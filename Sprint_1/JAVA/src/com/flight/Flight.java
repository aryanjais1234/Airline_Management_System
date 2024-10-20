package com.flight;

import java.util.*;

/**
 * As an Admin, I should ble able to enter Flight details in console 
 * (Flight Id, Flight Name, Origin, Destination, CarrierName TravelDate and Airfare)
 *  and store Flight details in an Array(Array Of Objects)

Note : Declare Array of Flight Objects and store details entered by admin in this Array

 * **/
public class Flight {
	int flightId;
	String flightName;
	String origin;
	String destination;
	String carrierName;
	Date date = null;
	double AirFare;
	
	
	
	public Flight(int flightId, String flightName, String origin, String destination, String carrierName, Date date,
			double airFare) {
		super();
		this.flightId = flightId;
		this.flightName = flightName;
		this.origin = origin;
		this.destination = destination;
		this.carrierName = carrierName;
		this.date = date;
		AirFare = airFare;
	}


	public int getFlightId() {
		return flightId;
	}


	public void setFlightId(int flightId) {
		this.flightId = flightId;
	}


	public String getFlightName() {
		return flightName;
	}


	public void setFlightName(String flightName) {
		this.flightName = flightName;
	}


	public String getOrigin() {
		return origin;
	}


	public void setOrigin(String origin) {
		this.origin = origin;
	}


	public String getDestination() {
		return destination;
	}


	public void setDestination(String destination) {
		this.destination = destination;
	}


	public String getCarrierName() {
		return carrierName;
	}


	public void setCarrierName(String carrierName) {
		this.carrierName = carrierName;
	}


	public Date getDate() {
		return date;
	}


	public void setDate(Date date) {
		this.date = date;
	}


	public double getAirFare() {
		return AirFare;
	}


	public void setAirFare(double airFare) {
		AirFare = airFare;
	}
	
	
	
	
	
	
}
