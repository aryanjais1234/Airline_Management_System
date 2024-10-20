package com.carrier;

public class Carrier {
	
	int carrierId;
	String carrierName;
	int discountPercentageThirtyDays;
	int discountPercentageSixtyDays;
	int discountPercentageNinteyDays;
	int bulkBookingDiscount;
	int refundPercentageTwoDays;
	int refundPercentageTendDays;
	int refundPercentageTwentyDays;
	int silverUserDiscount;
	int goldUserDiscount;
	int platinumUserDiscount;
	
	public Carrier(int carrierId, String carrierName) {
		super();
		this.carrierId = carrierId;
		this.carrierName = carrierName;
//		this.discountPercentageThirtyDays = discountPercentageThirtyDays;
//		this.discountPercentageSixtyDays = discountPercentageSixtyDays;
//		this.discountPercentageNinteyDays = discountPercentageNinteyDays;
//		this.bulkBookingDiscount = bulkBookingDiscount;
//		this.refundPercentageTwoDays = refundPercentageTwoDays;
//		this.refundPercentageTendDays = refundPercentageTendDays;
//		this.refundPercentageTwentyDays = refundPercentageTwentyDays;
//		this.silverUserDiscount = silverUserDiscount;
//		this.goldUserDiscount = goldUserDiscount;
//		this.platinumUserDiscount = platinumUserDiscount;
	}

	public int getCarrierId() {
		return carrierId;
	}

	public void setCarrierId(int carrierId) {
		this.carrierId = carrierId;
	}

	public String getCarrierName() {
		return carrierName;
	}

	public void setCarrierName(String carrierName) {
		this.carrierName = carrierName;
	}

	public int getDiscountPercentageThirtyDays() {
		return discountPercentageThirtyDays;
	}

	public void setDiscountPercentageThirtyDays(int discountPercentageThirtyDays) {
		this.discountPercentageThirtyDays = discountPercentageThirtyDays;
	}

	public int getDiscountPercentageSixtyDays() {
		return discountPercentageSixtyDays;
	}

	public void setDiscountPercentageSixtyDays(int discountPercentageSixtyDays) {
		this.discountPercentageSixtyDays = discountPercentageSixtyDays;
	}

	public int getDiscountPercentageNinteyDays() {
		return discountPercentageNinteyDays;
	}

	public void setDiscountPercentageNinteyDays(int discountPercentageNinteyDays) {
		this.discountPercentageNinteyDays = discountPercentageNinteyDays;
	}

	public int getBulkBookingDiscount() {
		return bulkBookingDiscount;
	}

	public void setBulkBookingDiscount(int bulkBookingDiscount) {
		this.bulkBookingDiscount = bulkBookingDiscount;
	}

	public int getRefundPercentageTwoDays() {
		return refundPercentageTwoDays;
	}

	public void setRefundPercentageTwoDays(int refundPercentageTwoDays) {
		this.refundPercentageTwoDays = refundPercentageTwoDays;
	}

	public int getRefundPercentageTendDays() {
		return refundPercentageTendDays;
	}

	public void setRefundPercentageTendDays(int refundPercentageTendDays) {
		this.refundPercentageTendDays = refundPercentageTendDays;
	}

	public int getRefundPercentageTwentyDays() {
		return refundPercentageTwentyDays;
	}

	public void setRefundPercentageTwentyDays(int refundPercentageTwentyDays) {
		this.refundPercentageTwentyDays = refundPercentageTwentyDays;
	}

	public int getSilverUserDiscount() {
		return silverUserDiscount;
	}

	public void setSilverUserDiscount(int silverUserDiscount) {
		this.silverUserDiscount = silverUserDiscount;
	}

	public int getGoldUserDiscount() {
		return goldUserDiscount;
	}

	public void setGoldUserDiscount(int goldUserDiscount) {
		this.goldUserDiscount = goldUserDiscount;
	}

	public int getPlatinumUserDiscount() {
		return platinumUserDiscount;
	}

	public void setPlatinumUserDiscount(int platinumUserDiscount) {
		this.platinumUserDiscount = platinumUserDiscount;
	}
	
	
	
	
}