package spring.demo.utils.iata;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class AutocompleteObject {

	private String code;
	private String name;
	private String city_code;
	private String city_name;
	private String country_code;
	private String timezone;
	private String type;
	private float lat;
	private float lng;
	
	
	public AutocompleteObject() {
		super();
	}


	public AutocompleteObject(String code, String name, String city_code, String city_name,
			String country_code, String timezone, String type, float lat, float lng) {
		super();
		this.code = code;
		this.name = name;
		this.city_code = city_code;
		this.city_name = city_name;
		this.country_code = country_code;
		this.timezone = timezone;
		this.type = type;
		this.lat = lat;
		this.lng = lng;
	}


	public String getCode() {
		return code;
	}


	public void setCode(String code) {
		this.code = code;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getCity_code() {
		return city_code;
	}


	public void setCity_code(String city_code) {
		this.city_code = city_code;
	}


	public String getCity_name() {
		return city_name;
	}


	public void setCity_name(String city_name) {
		this.city_name = city_name;
	}


	public String getCountry_code() {
		return country_code;
	}


	public void setCountry_code(String country_code) {
		this.country_code = country_code;
	}


	public String getTimezone() {
		return timezone;
	}


	public void setTimezone(String timezone) {
		this.timezone = timezone;
	}


	public String getType() {
		return type;
	}


	public void setType(String type) {
		this.type = type;
	}


	public float getLat() {
		return lat;
	}


	public void setLat(float lat) {
		this.lat = lat;
	}


	public float getLng() {
		return lng;
	}


	public void setLng(float lng) {
		this.lng = lng;
	}
}
