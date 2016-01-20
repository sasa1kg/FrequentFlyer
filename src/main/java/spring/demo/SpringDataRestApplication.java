package spring.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringDataRestApplication implements CommandLineRunner {

	Logger logger = LoggerFactory.getLogger(SpringDataRestApplication.class);

	/*@Autowired
	PersonService personService;

	@Autowired
	PersonRepository personRepository;*/

	@Autowired
	private UserDetailsRepo userDetailsRepo;

	public void run(String... args) {

		logger.info("Using JPA for insert and find");

		logger.info("***** USER DETAILS REPO 1 *****");
		for (UserDetails userDetails : userDetailsRepo.findAllAccounts()) {
			logger.info(userDetails.getUsername() + " " + userDetails.getPassword());
		}

		try {
			logger.info("***** USER DETAILS REPO 2 *****");
			UserDetails userDet = userDetailsRepo.findAccountByUsername("sasa");
			logger.info(userDet.getEmail());
			logger.info("***** USER DETAILS REPO 3 *****");
			UserDetails userDet1 = userDetailsRepo.findAccountByName("Sasa");
			logger.info(userDet1.getEmail());
		} catch (Exception e) {
			logger.info("No sasa");
		}

	}


	public static void main(String[] args) {
		SpringApplication.run(SpringDataRestApplication.class, args);
	}
}
