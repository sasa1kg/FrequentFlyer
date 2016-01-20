package spring.demo.utils.iata;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Autocomplete implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -5775055932414270214L;
	
	private Object request;
	private AutocompleteResponse response;
	
	
	public Autocomplete() {
		super();
	}

	public Autocomplete(Object request, AutocompleteResponse response) {
		super();
		this.request = request;
		this.response = response;
	}

	public Object getRequest() {
		return request;
	}

	public void setRequest(Object request) {
		this.request = request;
	}

	public AutocompleteResponse getResponse() {
		return response;
	}

	public void setResponse(AutocompleteResponse response) {
		this.response = response;
	}
	
}
