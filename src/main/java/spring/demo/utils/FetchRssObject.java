package spring.demo.utils;

import java.io.Serializable;

public class FetchRssObject implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -4694695476202618673L;

	private String feedType;
	private String feedName;
	private String feedUrl;
	
	public FetchRssObject() {
	}
	
	public FetchRssObject(String feedType, String feedName, String feedUrl) {
		super();
		this.feedType = feedType;
		this.feedName = feedName;
		this.feedUrl = feedUrl;
	}

	public String getFeedType() {
		return feedType;
	}

	public void setFeedType(String feedType) {
		this.feedType = feedType;
	}

	public String getFeedName() {
		return feedName;
	}

	public void setFeedName(String feedName) {
		this.feedName = feedName;
	}

	public String getFeedUrl() {
		return feedUrl;
	}

	public void setFeedUrl(String feedUrl) {
		this.feedUrl = feedUrl;
	}
	
	
	
}
