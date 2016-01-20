package spring.demo.utils.iata;

import java.io.Serializable;
import java.util.ArrayList;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class AutocompleteResponse implements Serializable {

	private static final long serialVersionUID = -7911993077688002352L;
	
	private ArrayList<AutocompleteObject> cities_by_airports;
	private ArrayList<AutocompleteObject> airports;
	private ArrayList<AutocompleteObject> airports_by_cities;
	private ArrayList<AutocompleteObject> cities;
	
	public AutocompleteResponse() {
		super();
	}

	public AutocompleteResponse(ArrayList<AutocompleteObject> cities_by_airports,
			ArrayList<AutocompleteObject> airports, ArrayList<AutocompleteObject> airports_by_cities,
			ArrayList<AutocompleteObject> cities) {
		super();
		this.cities_by_airports = cities_by_airports;
		this.airports = airports;
		this.airports_by_cities = airports_by_cities;
		this.cities = cities;
	}

	public ArrayList<AutocompleteObject> getCities_by_airports() {
		return cities_by_airports;
	}

	public void setCities_by_airports(ArrayList<AutocompleteObject> cities_by_airports) {
		this.cities_by_airports = cities_by_airports;
	}

	public ArrayList<AutocompleteObject> getAirports() {
		return airports;
	}

	public void setAirports(ArrayList<AutocompleteObject> airports) {
		this.airports = airports;
	}

	public ArrayList<AutocompleteObject> getAirports_by_cities() {
		return airports_by_cities;
	}

	public void setAirports_by_cities(ArrayList<AutocompleteObject> airports_by_cities) {
		this.airports_by_cities = airports_by_cities;
	}

	public ArrayList<AutocompleteObject> getCities() {
		return cities;
	}

	public void setCities(ArrayList<AutocompleteObject> cities) {
		this.cities = cities;
	}
	
	
	
}
