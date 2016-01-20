package spring.demo.utils.iata;

import java.io.Serializable;

public class Timetable implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 2036038010619090439L;
	private Object request;
	private Object response;
	
	
	public Timetable() {
		super();
	}

	public Timetable(Object request, Object response) {
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

	public Object getResponse() {
		return response;
	}

	public void setResponse(Object response) {
		this.response = response;
	}
	

}
