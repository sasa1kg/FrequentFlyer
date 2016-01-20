package spring.demo;

import java.security.Principal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.DomElement;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import com.gargoylesoftware.htmlunit.javascript.host.html.HTMLElement;

import spring.demo.entities.Feeds;
import spring.demo.utils.Feed;
import spring.demo.utils.FeedOptions;
import spring.demo.utils.FetchRssObject;
import spring.demo.utils.RSSFeedParser;
import spring.demo.utils.RegisterRequest;
import spring.demo.utils.iata.Autocomplete;
import spring.demo.utils.iata.Timetable;

@RestController
public class RestService {

	Logger logger = LoggerFactory.getLogger(SpringDataRestApplication.class);

	/*@Autowired
	PersonRepository personRepo;*/

	@Autowired
	UserDetailsRepo userDetailsRepo;

	@Autowired
	FeedsRepo feedsRepo;

	private String iata_app_key = "3e153e57-6f5a-4cb2-9d37-e85e68923822";
	private String iata_pre_url = "http://iatacodes.org/api/v4/autocomplete?api_key=";
	private String iata_pre_url_timetable = "http://iatacodes.org/api/v4/timetable?api_key=";

	@RequestMapping("/person")
	public Object findPerson(@RequestParam(value="id") Long id) {
		/*logger.info("Find a person with ID " + id);
		PersonEntity retPerson = personRepo.findOne(id);
		if (retPerson != null) {
			logger.info("Found person " + retPerson.getFirstName() + " " + retPerson.getLastName());
			return retPerson;
		}*/
		return null;
	}


	@RequestMapping("/resource")
	public Map<String,Object> home() {
		Map<String,Object> model = new HashMap<String,Object>();
		model.put("id", UUID.randomUUID().toString());
		model.put("content", "Hello World");
		return model;
	}


	@RequestMapping("/user")
	public Principal user(Principal user) {
		return user;
	}


	@RequestMapping(value="/account/{accountId}",
			method = RequestMethod.GET)
	public ResponseEntity<UserDetails> account(@PathVariable("accountId") String username) {
		logger.info("Find account Info " + username);
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		logger.info(principal.getClass().getName());
		logger.info("Principal " + principal);
		if(principal instanceof org.springframework.security.core.userdetails.UserDetails) {
			org.springframework.security.core.userdetails.UserDetails details = (org.springframework.security.core.userdetails.UserDetails)principal;
			UserDetails loggedIn = userDetailsRepo.findAccountByUsername(username);
			if(loggedIn.getUsername().equalsIgnoreCase(details.getUsername())) {
				return new ResponseEntity<UserDetails>(loggedIn, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.CONFLICT);
			}
		} else {
			logger.info("Principal not instance of");
			return new ResponseEntity<>(HttpStatus.FORBIDDEN);
		}
	}


	@RequestMapping(value="/register",
			method = RequestMethod.POST)
	public ResponseEntity<UserDetails> register(@RequestBody RegisterRequest regRequest) {

		UserDetails userDetails = new UserDetails(regRequest.getUsername(), regRequest.getPassword(), regRequest.getFirst_name(), regRequest.getLast_name(), regRequest.getEmail());
		userDetails.setEnabled(true);
		userDetails.setRole("USER");
		UserDetails created;
		try {
			created = userDetailsRepo.createAccount(userDetails);
		} catch (Exception e) {
			return new ResponseEntity<UserDetails>(userDetails, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<UserDetails>(created, HttpStatus.OK);
	}

	@RequestMapping(value="/invalidate",
			method = RequestMethod.POST)
	public ResponseEntity<UserDetails> invalidateSession(HttpServletRequest request, HttpServletResponse response) {
		HttpSession session = request.getSession(false);
		if(request.isRequestedSessionIdValid() && session != null) {
			session.invalidate();
		} else {
			new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<>(HttpStatus.OK);
	}


	@RequestMapping(value="/feed",
			method = RequestMethod.POST)
	public ResponseEntity<Feed> register() {

		RSSFeedParser parser = new RSSFeedParser("http://www.npr.org/rss/rss.php?id=1004");
		Feed feed = parser.readFeed();
		return new ResponseEntity<Feed>(feed, HttpStatus.OK);
	}

	@RequestMapping(value="/feed_options",
			method = RequestMethod.POST)
	public ResponseEntity<ArrayList<Feeds>> feedOptions() {
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		logger.info(principal.getClass().getName());
		if(principal instanceof org.springframework.security.core.userdetails.UserDetails) {
			ArrayList<Feeds> feedOptionsRet = (ArrayList<Feeds>) feedsRepo.findAllFeeds();
			return new ResponseEntity<ArrayList<Feeds>>(feedOptionsRet, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}

	}


	@RequestMapping(value="/complex_feed_options",
			method = RequestMethod.POST)
	public ResponseEntity<ArrayList<Feeds>> feedOptions(@RequestBody FeedOptions feedOptions) {
		Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		logger.info(principal.getClass().getName());
		if(principal instanceof org.springframework.security.core.userdetails.UserDetails) {
			logger.info("Search by type" + feedOptions.getType());
			ArrayList<Feeds> feedOptionsRet;
			if (feedOptions.getSearchCrit().equalsIgnoreCase("")) {
				logger.info(">>> NO SEARCH CRIT");
				if (feedOptions.getType().equalsIgnoreCase("all")) {
					logger.info(">>> ALL");
					feedOptionsRet = (ArrayList<Feeds>) feedsRepo.findAllFeeds();
				} else {
					logger.info(">>> " + feedOptions.getType());
					feedOptionsRet = (ArrayList<Feeds>) feedsRepo.findAllCategoryTypes(feedOptions.getType());
				}
			} else {
				logger.info(">>> SEARCH CRIT " + feedOptions.getSearchCrit());
				if (!feedOptions.getType().equalsIgnoreCase("all")) {
					logger.info(">>> " + feedOptions.getType());
					feedOptionsRet = (ArrayList<Feeds>) feedsRepo.findAllFeedsByCategoryAndPartialName(feedOptions.getType(), feedOptions.getSearchCrit().toLowerCase());
				} else {
					logger.info(">>> ALL");
					feedOptionsRet = (ArrayList<Feeds>) feedsRepo.findAllFeedsByPartialName(feedOptions.getSearchCrit().toLowerCase());
				}
			}
			logger.info("Length of ret " + feedOptionsRet.size());
			return new ResponseEntity<ArrayList<Feeds>>(feedOptionsRet, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}

	}


	@RequestMapping(value="/fetch_rss",
			method = RequestMethod.POST)
	public ResponseEntity<Feed> fetchRss(@RequestBody FetchRssObject fetchRssObject) {

		logger.info("----> FETCH RSS " + fetchRssObject.getFeedName());
		logger.info("----> FETCH URL " + fetchRssObject.getFeedUrl());
		RSSFeedParser parser = new RSSFeedParser(fetchRssObject.getFeedUrl());
		Feed feed = parser.readFeed();

		return new ResponseEntity<Feed>(feed, HttpStatus.OK);
	}


	@RequestMapping(value="/flight_track_search/{queryString}",
			method = RequestMethod.GET)
	public ResponseEntity<Object> fetchIATAsuggestions(@PathVariable("queryString") String queryString) {

		logger.info("Autocomplete search " + queryString);
		RestTemplate restTemplate = new RestTemplate();
		Autocomplete autocomplete = restTemplate.getForObject(iata_pre_url + iata_app_key + "&query=" + queryString, Autocomplete.class);
		return new ResponseEntity<Object>(autocomplete.getResponse(), HttpStatus.OK);
	}

	@RequestMapping(value="/flight_airport_data/{queryString}",
			method = RequestMethod.GET)
	public ResponseEntity<Object> fetchIATA_AirportData(@PathVariable("queryString") String queryString) {

		logger.info("Airport timetable " + queryString);
		RestTemplate restTemplate = new RestTemplate();
		Timetable airportData = restTemplate.getForObject(iata_pre_url_timetable + iata_app_key + "&code=" + queryString, Timetable.class);
		return new ResponseEntity<Object>(airportData.getResponse(), HttpStatus.OK);
	}


	@RequestMapping(value="/live_flight_data",
			method = RequestMethod.POST)
	public ResponseEntity<Object> liveFlightData() {
		WebClient webClient = new WebClient();
	    try {
	    	final HtmlPage page = webClient.getPage("https://www.google.rs/search?q=OS796");
	    	DomElement elem = page.getElementById("search");
	    	//ArrayList<DomElement> search = (ArrayList<DomElement>) elem.getChildElements();
	    	System.out.println(elem.asXml());
	    	//System.out.println("HAS CHILDS " + search.size() );
	    	
	    } catch ( Exception e ) {
	    	
	    }
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}



}
