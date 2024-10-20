package com.customer;

import java.util.*;
import com.bookingDetails.*;

public class Customer {
	
	int userId;
	String userName;
	String password;
	long phone;
	String email;
	String address1;
	String address2;
	String city;
	String State;
	String country;
	long zipCode;
	Date dob = null;
	
	String role = "";
	String UserCategory = "";
	
	ArrayList<BookingDetails>bookings = new ArrayList<>();
	
	public Customer(int userId, String userName, String password, long phone, String email, String address1,
			String address2, String city, String state, String country, long zipCode, Date d) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.password = password;
		this.phone = phone;
		this.email = email;
		this.address1 = address1;
		this.address2 = address2;
		this.city = city;
		State = state;
		this.country = country;
		this.zipCode = zipCode;
		this.dob = d;
	}
	
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public long getPhone() {
		return phone;
	}
	public void setPhone(long phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress1() {
		return address1;
	}
	public void setAddress1(String address1) {
		this.address1 = address1;
	}
	public String getAddress2() {
		return address2;
	}
	public void setAddress2(String address2) {
		this.address2 = address2;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return State;
	}
	public void setState(String state) {
		State = state;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public long getZipCode() {
		return zipCode;
	}
	public void setZipCode(long zipCode) {
		this.zipCode = zipCode;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date d) {
		this.dob = d;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getUserCategory() {
		return UserCategory;
	}
	public void setUserCategory(String userCategory) {
		UserCategory = userCategory;
	}
	
	
	
	public void editUser(){
		System.out.println("Edit Done!!!!!");
	}
	
	
	public void bookTicket(int bookingId,int flightId, int ticketCount, String seatCategory, String customerCategory, Date date, double price){
		BookingDetails b = new BookingDetails(bookingId, flightId, ticketCount, seatCategory, customerCategory, date,price);
		bookings.add(b);
		System.out.println("Booking Details Saved!!!!");
		System.out.println("Total Amount: "+b.getFair());
	}
	
	public int cancelTicket(int bookingId){
		int idx = -1;
		for(BookingDetails booking:bookings){
			if(booking.getBookingId()==bookingId){
				idx = bookings.indexOf(booking);
				System.out.println("Booking Canceled!!! Refund Amount: "+booking.getFair());
				bookings.remove(idx);
				return 1;
			}	
		}
		if(idx==-1){
			System.out.println("Invalid Booking Id!!!!!!");
		}
		return -1;
	}
	
	public void viewBookings(){
		if(bookings.size()==0){
			System.out.println("No Booking Details Found!!!");
			return;
		}
		else{
			System.out.println(" |BookingId| \t |FlightId| \t |TicketCount| \t |SeatCategory| \t |CustomerCategory| \t |Date| \t |Total Fare|" );
			for(BookingDetails booking:bookings){
				int i = 1;
				System.out.println(i + ". \t" + booking.getBookingId() + "\t" + booking.getFlightId() + "\t" + booking.getTicketCount() + "\t" + booking.getSeatCategory() + "\t"
						+ booking.getSeatCategory() + "\t" + booking.getCustomerCategory() + "\t" + booking.getDate() + "\t" + booking.getFair());
				i++;
			}
		}
	}
	
	public void viewMenu(){
		System.out.println("1.Edit Details\n2.View Flights\n3.Book Ticket\n4.Cancel Booking\n5.View Bookings\n6.Exit.");
	}
	
	
	

}