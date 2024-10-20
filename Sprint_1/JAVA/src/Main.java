import java.util.*;

import com.admin.*;

import com.customer.*;
import com.flight.*;

public class Main {
	static Admin admin = new Admin("admin","admin");
	static ArrayList<Customer> customerList = new ArrayList<>();
	static Scanner sc = new Scanner(System.in);
	public static void main(String[] args){
		int choice;
        do {
            System.out.println("Welcome to Airline Management System (AMS)");
            System.out.println("1. Admin Sign-in\n2. Customer Sign-in\n3. Exit");
            choice = sc.nextInt();
            
            switch (choice) {
                case 1:
                    adminSignIn();
                    break;
                case 2:
                    customerSignIn();
                    break;
                case 3:
                    System.out.println("Exiting AMS...");
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        } while (choice != 3);
	}
	
	public static void adminSignIn(){
		System.out.println("Enter Admin UserName: ");
        String userName = sc.next();
        System.out.println("Enter Admin Password: ");
        String password = sc.next();
        
        if (userName.equals(admin.userName) && password.equals(admin.password)) {
            int adminChoice;
            do {
                admin.viewMenu();
                adminChoice = sc.nextInt();
                switch (adminChoice) {
                    case 1:
                    	System.out.println("Enter CarrierId: ");
                    	int carrierId = sc.nextInt(); sc.nextLine();
                    	System.out.println("Enter CarrierName: ");
                    	String carrierName = sc.nextLine();
                    	
                        admin.addCarrier(carrierId, carrierName);
                        break;
                        
                    case 2:
                    	System.out.println("Enter CarrierId: ");
                    	int editId = sc.nextInt();
                        admin.editCarrier(editId);
                        
                        break;
                        
                    case 3:
                    	int removeId = sc.nextInt();
                        admin.removeCarrireById(removeId);
                        break;
                    case 4:
                    	flightCreate();
                        break;
                    case 5:
                    	admin.cancelFlight();
                        break;
                    case 6:
                    	System.out.println("Logging out Admin...");
                    	break;
                    default:
                        System.out.println("Invalid choice. Try again.");
                }
            } while (adminChoice != 6);
        } else {
            System.out.println("Invalid Admin credentials.");
        }
        sc.reset();
	}
	
	public static void customerSignIn(){
		
		
		int choice;
		do{
			System.out.println("1.Register Customer\n2.Login Existing Customer\n3.Exit");
			choice = sc.nextInt();
			switch(choice){
				case 1:
					customerRegistration();
					break;
				case 2:
					loginCustomer();
					break;
				default:
                    System.out.println("Back to main menu.");
			}
			
		}while(choice!=3);
		
	}
	
	public static void flightCreate(){
		System.out.println("|Add Flight|");
		System.out.println("Enter flightId: ");
		int flightId = sc.nextInt(); sc.nextLine();
		System.out.println("Enter flightName: ");
		String flightName = sc.nextLine();
		System.out.println("Enter flightOrigin: ");
		String origin = sc.nextLine();
		System.out.println("Enter flightDestination: ");
		String destination = sc.nextLine();
		System.out.println("Enter flightCarrierName: ");
		String carrierName = sc.nextLine(); 
		boolean checkCarrier = admin.checkCarrierByName(carrierName);
		
		if(!checkCarrier){
			System.out.println("No Carrier Present By this name please add Carrier then add flight again!!!!");
			return;
		}
		
		System.out.println("Enter flight year: ");
		int year = sc.nextInt();
		System.out.println("Enter flight month: ");
		int month = sc.nextInt();
		System.out.println("Enter flight date: ");
		int date = sc.nextInt();
		Date d = new Date(year,month,year);
		System.out.println("Enter flight fare: ");
		double airFare = sc.nextDouble();
		admin.addFlight(flightId, flightName, origin, destination, carrierName, d, airFare);
	}
	
	public static void customerRegistration(){
		System.out.println("|User Registiration|");
		System.out.println("Enter UserID: ");
		int userId = sc.nextInt(); sc.nextLine();
		System.out.println("Enter UserName: ");
		String userName = sc.nextLine();
		System.out.println("Enter Password: ");
		String password = sc.nextLine();
		System.out.println("Enter Phone: ");
		long phone = sc.nextLong(); sc.nextLine();
		System.out.println("Enter Email: ");
		String email = sc.nextLine();
		System.out.println("Enter Address1: ");
		String address1 = sc.nextLine();
		System.out.println("Enter Address2: ");
		String address2 = sc.nextLine();
		System.out.println("Enter City: ");
		String city = sc.nextLine();
		System.out.println("Enter State: ");
		String state = sc.nextLine();
		System.out.println("Enter Country: ");
		String country = sc.nextLine();
		System.out.println("Enter ZipCode: ");
		long zipCode = sc.nextLong();
		System.out.println("Enter DOB year: ");
		int year = sc.nextInt();
		System.out.println("Enter DOB month:");
		int month = sc.nextInt();
		System.out.println("Enter DOB day:");
		int day = sc.nextInt();
		Date d = new Date(year,month,day);
		sc.reset();
		Customer c = new Customer( userId,  userName,  password,  phone,  email,  address1, address2,  city,  state,  country,  zipCode,  d);
		System.out.println("Customer Registered Successfully!!!!!");
		customerList.add(c);
	}
	
	public static void loginCustomer(){
		sc.nextLine();
		System.out.println("Enter UserName: ");
		String userNameC = sc.nextLine();
		System.out.println("Enter Password: ");
		String passwordC = sc.nextLine();
		for(Customer cus :  customerList){
			if(cus.getUserName().equalsIgnoreCase(userNameC) && cus.getPassword().equalsIgnoreCase(passwordC)){
				System.out.println("Login Successfull!!!!!!!!!!");
				int customerChoice;
				do{
					cus.viewMenu();
					customerChoice = sc.nextInt();
					switch(customerChoice){
					case 1:
							cus.editUser();
							break;
					case 2:
							System.out.println("|Search Flight|");
							sc.nextLine();
							System.out.println("Enter Origin: ");
							String origin = sc.nextLine();
							System.out.println("Enter Destination: ");
							String destination = sc.nextLine();
							System.out.println("Enter Year: ");
							int yearC = sc.nextInt();
							System.out.println("Enter Month: ");
							int monthC = sc.nextInt();
							System.out.println("Enter Date: ");
							int dateC = sc.nextInt();
							Date dC = new Date(yearC,monthC,dateC);
							admin.viewFlight(origin, destination, dC);
							break;
							
					case 3:
							System.out.println("|Book Flight Ticket|");
							System.out.println("Enter BookingId: ");
							int bookingId = sc.nextInt();
							System.out.println("Enter FlightId: ");
							
							int flightId = sc.nextInt();
							System.out.println("Enter Ticket Count: ");
							boolean check = false;
							double price = 0;
							for(Flight f:admin.getFlightList()){
								if(f.getFlightId()==flightId){
									check = true;
									price = f.getAirFare();
								}
							}
							if(check == false){
								System.out.println("No Flight found Bad request!!!!");
								break;
							}
							int ticketCount = sc.nextInt(); sc.nextLine();
							System.out.println("Enter Seat Category(Economy, Business, Executive): ");
							String seatCategory = sc.nextLine();
							System.out.println("Enter Customer Category(Silver, Gold, Platinum): ");
							String customerCategory = sc.nextLine();
							System.out.println("Enter Year: ");
							int yearCC = sc.nextInt();
							System.out.println("Enter Month: ");
							int monthCC = sc.nextInt();
							System.out.println("Enter Date: ");
							int dateCC = sc.nextInt();
							Date dCC = new Date(yearCC,monthCC,dateCC);
							cus.bookTicket(bookingId, flightId, ticketCount, seatCategory, customerCategory, dCC,price);
							
							break;
					case 4:
						System.out.println("|Cancel Booking|");
						System.out.println("Enter Booking Id: ");
						int bookingIdC = sc.nextInt();
						
						int res = cus.cancelTicket(bookingIdC);
						break;
					case 5:
						cus.viewBookings();
						break;
					default:
                        System.out.println("LogOut!!!!");
					}
				}while(customerChoice!=6);
			}
			else{
				System.out.println("Invalid Credentials.....");
			}
		}
	}
}