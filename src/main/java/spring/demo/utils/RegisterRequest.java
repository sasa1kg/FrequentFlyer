package spring.demo.utils;

import java.io.Serializable;

public class RegisterRequest implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -1838489204178558258L;
	
	
	private String username;

	private String password;

	private String first_name;
	
	private String last_name;

	private String email;

	

	public RegisterRequest() {
	}

	public RegisterRequest(long user_id, String username, String password, String first_name, String last_name, boolean enabled,
			String email, String role) {
		super();
		this.username = username;
		this.password = password;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
	}



	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}


	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
