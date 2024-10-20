package com.bookingDetails;

import java.util.*;

public class BookingDetails {
	
	int bookingId;
	int flightId;
	int ticketCount;
	String seatCategory;
	String customerCategory;
	Date date = null;
	double price;
	
	double fair = 0.0;
	
	public BookingDetails(int bookingId,int flightId, int ticketCount, String seatCategory, String customerCategory, Date date, double price) {
		this.bookingId = bookingId;
		this.flightId = flightId;
		this.ticketCount = ticketCount;
		this.seatCategory = seatCategory;
		this.customerCategory = customerCategory;
		this.date = date;
		this.price = price;
		
		calculateFair(price);
	}

	public int getBookingId() {
		return bookingId;
	}
	public int getFlightId() {
		return flightId;
	}

	public void setFlightId(int flightId) {
		this.flightId = flightId;
	}

	public int getTicketCount() {
		return ticketCount;
	}

	public void setTicketCount(int ticketCount) {
		this.ticketCount = ticketCount;
	}

	public String getSeatCategory() {
		return seatCategory;
	}

	public void setSeatCategory(String seatCategory) {
		this.seatCategory = seatCategory;
	}

	public String getCustomerCategory() {
		return customerCategory;
	}

	public void setCustomerCategory(String customerCategory) {
		this.customerCategory = customerCategory;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	
	public void calculateFair(double price){
		if(seatCategory.equalsIgnoreCase("Economy")){
			this.fair = price*1;
		}
		else if(seatCategory.equalsIgnoreCase("Business")){
			this.fair = price*2;
		}
		else if(seatCategory.equalsIgnoreCase("Executive")){
			this.fair = price*5;
		}
		else{
			System.out.println("Ivalid Category");
		}
		
		if(customerCategory.equalsIgnoreCase("Silver")){
			this.fair = this.fair - (this.fair*0.01);
		}
		else if(customerCategory.equalsIgnoreCase("Gold")){
			this.fair = this.fair - (this.fair*0.02);
		}
		else if(customerCategory.equalsIgnoreCase("Platinum")){
			this.fair = this.fair - (this.fair*0.04);
		}
		else{
			System.out.println("Invalid Seat Category");
		}
		
	}
	
	public double getFair(){
		return this.fair;
	}
	
	
}