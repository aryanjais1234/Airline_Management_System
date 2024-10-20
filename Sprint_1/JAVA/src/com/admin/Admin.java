package com.admin;


import com.user.*;

import com.flight.*;

import java.util.*;

import com.carrier.*;

public class Admin extends User {
	
	public Admin(String userName, String password){
		super(userName, password);
	}
	
	
	
	ArrayList<Carrier>carrierList = new ArrayList<>();
	ArrayList<Flight>flightList = new ArrayList<>();
	
	double totalBookingAmount = 0;
	
	
	
	public ArrayList<Carrier> getCarrierList() {
		return carrierList;
	}


	public void setCarrierList(ArrayList<Carrier> carrierList) {
		this.carrierList = carrierList;
	}


	public ArrayList<Flight> getFlightList() {
		return flightList;
	}


	public void setFlightList(ArrayList<Flight> flightList) {
		this.flightList = flightList;
	}


	public void addCarrier(int carrierId, String carrierName){
		
		
		Carrier c = new Carrier(carrierId, carrierName);
		
		try{
			this.carrierList.add(c);
			System.out.println("Carrier Information Saved Successfully in the System");
			
			
		}catch(Exception e){
			System.out.println("Encountered issue while saving Carrier Information. Please check the data and try again.");
		}
		
	}
	
	public boolean checkCarrierByName(String name){
		for(Carrier c:carrierList){
			if(c.getCarrierName().equalsIgnoreCase(name)){
				return true;
			}
		}
		return false;
	}
	
	
	public void editCarrier(int id){
		
		Carrier c = null;
		for(Carrier ch : carrierList){
			if(ch.getCarrierId() == id){
				c = ch;
			}
		}
		
		if(c == null){
			System.out.println("Either the data is incorrect or no Carrier Information is available for the given Carrier ID");
			return;
		}
		
		else{
			
			
			System.out.println("CarrierId: "+c.getCarrierId());
			System.out.println("CarrierName: "+c.getCarrierName());
			System.out.println("DiscountPercentageThirtyDays: "+c.getDiscountPercentageThirtyDays());
			System.out.println("DiscountPercentageSixtyDays: "+c.getDiscountPercentageSixtyDays());
			System.out.println("DiscountPercentageNinteyDays: "+c.getDiscountPercentageNinteyDays());
			System.out.println("BulkBookingDiscount: "+c.getBulkBookingDiscount());
			System.out.println("RefundPercentageTwoDays: "+c.getRefundPercentageTwoDays());
			System.out.println("RefundPercentageTenDays: "+c.getRefundPercentageTendDays());
			System.out.println("RefundPercentageTwentyDays: "+c.getRefundPercentageTwentyDays());
			System.out.println("SilverUserDiscount: "+c.getSilverUserDiscount());
			System.out.println("GoldUserDiscount: "+c.getGoldUserDiscount());
			System.out.println("PlatinumUserDiscount: "+c.getPlatinumUserDiscount());
			
			
			
		}
		
		
	}
	
	public void editCarrier(int id, int choice){
		for(Carrier ch : carrierList){
			if(ch.getCarrierId() == id){
				switch(choice){
					case 1:
						break;
					case 2:
						break;
				}
			}
		}
	}
	
	
	public void removeCarrireById(int id){
		Carrier c = null;
		for(Carrier ch : carrierList){
			if(ch.getCarrierId() == id){
				c = ch;
			}
		}
		
		if(c == null){
			System.out.println("Either the data is incorrect or no Carrier Information is available for the given Carrier ID");
			return;
		}
		
		else{
			int index = carrierList.indexOf(c);
			for(Flight f:flightList){
				if(c.getCarrierName().equalsIgnoreCase(f.getCarrierName())){
					int idx = flightList.indexOf(f);
					flightList.remove(idx);
					System.out.println("Flight of this Carrier removed Successfully!!!!!");
				}
			}
			this.carrierList.remove(index);
			System.out.println("Carrier Information successfully removed from system!!!!!");
		}
	}
	
	
	
	
	public void addFlight(int flightId, String flightName, String origin, String destination, String carrierName, Date date,
			double airFare){
		
		Flight f = new Flight(flightId, flightName, origin, destination, carrierName, date,airFare);
		
		try{
			this.flightList.add(f);
			System.out.println("Carrier Information Saved Successfully in the System");
			
			
		}catch(Exception e){
			System.out.println("Encountered issue while saving Flight Information. Please check the data and try again.");
		}
		
	}
	
	public void viewFlight(String origin, String destination, Date date ){
		
		if(this.flightList.size()==0){
			System.out.println("No flight available");
			return;
		}
		
		for(Flight f : this.flightList){
			if(f.getOrigin().equalsIgnoreCase(origin) && f.getDestination().equalsIgnoreCase(destination) && f.getDate().equals(date)){
				System.out.println("Details of Flight: ");
				System.out.println("|FlightId| \t |Flightname| \t |Origin \t |CarrierName| \t |TravelDate| \t |AirFare|");
				System.out.println(f.getFlightId() + "\t\t" + f.getFlightName() + "\t\t" + f.getOrigin() + "\t\t" + f.getCarrierName() + "\t\t" + f.getDate() + "\t\t" + f.getAirFare());
			}
		}
		
	}
	
	public void updateAddBooking(double price){
		this.totalBookingAmount+=price;
	}
	
	public double getTotalBookingAmount(){
		return this.totalBookingAmount;
	}
	
	
	public void cancelFlight(){
		
	}
	
	public void viewMenu(){
		System.out.println("1. Add Carrier\n2. Edit Carrier\n3. Remove Carrier\n4. AddFlight\n5. Flight Cancellation\n6.. Exit");
	}
}