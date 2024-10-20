document.getElementById('carrierForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const carrierId = Math.floor(Math.random() * 1000); // Static ID generation for example
  const successMessage = `Carrier Information Saved Successfully!!! - Carrier Id generated is ${carrierId}`;
  
  document.getElementById('successMessage').innerText = successMessage;
  document.getElementById('successMessage').style.display = 'block';

  
  let carrierList = JSON.parse(localStorage.getItem('carrierList')) || [];

    // Create a new carrier object
    const carrierDetails = {
      carrierId: carrierId,
        carrierName: document.getElementById('carrierName').value,
        _30DaysAdvanceBooking: document.getElementById('30DaysAdvanceBooking').value,
        _60DaysAdvanceBooking: document.getElementById('60DaysAdvanceBooking').value,
        _90DaysAdvanceBooking: document.getElementById('90DaysAdvanceBooking').value,
        bulkBooking: document.getElementById('bulkBooking').value,
        silverUser: document.getElementById('silverUser').value,
        goldUser: document.getElementById('goldUser').value,
        platinumUser: document.getElementById('platinumUser').value,
        _2DaysBeforeTravelDate: document.getElementById('2DaysBeforeTravelDate').value,
        _10DaysBeforeTravelDate: document.getElementById('10DaysBeforeTravelDate').value,
        _20DaysOrMoreBeforeTravelDate: document.getElementById('20DaysOrMoreBeforeTravelDate').value
    };

    // Add the new carrier details to the array
    carrierList.push(carrierDetails);

    // Save the updated carrier list back to localStorage
    localStorage.setItem('carrierList', JSON.stringify(carrierList));

    console.log('Carrier added:', carrierDetails);
    alert('Carrier Information Saved Successfully!!!');
});
