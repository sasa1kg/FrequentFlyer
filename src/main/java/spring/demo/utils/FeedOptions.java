package spring.demo.utils;

import java.io.Serializable;

public class FeedOptions implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -763057887992296293L;
	
	private String type;
	private String searchCrit;
	private int offset;
	private int limit;
	
	public FeedOptions(String type, int offset, int limit, String searchCrit) {
		super();
		this.type = type;
		this.offset = offset;
		this.limit = limit;
		this.searchCrit = searchCrit;
	}

	public FeedOptions() {
		super();
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getOffset() {
		return offset;
	}

	public void setOffset(int offset) {
		this.offset = offset;
	}

	public int getLimit() {
		return limit;
	}

	public void setLimit(int limit) {
		this.limit = limit;
	}

	public String getSearchCrit() {
		return searchCrit;
	}

	public void setSearchCrit(String searchCrit) {
		this.searchCrit = searchCrit;
	}
	
}
