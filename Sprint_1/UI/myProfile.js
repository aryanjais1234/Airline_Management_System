const logedInId = JSON.parse(localStorage.getItem('loggedInUser'));
const logedInUser = JSON.parse(localStorage.getItem(logedInId));
const passengerId = logedInUser.passengerId;

if(logedInUser){
    document.getElementById('passengerName').innerHTML = logedInUser.firstName;
    document.getElementById('data').innerHTML = `
    <p>Name: ${logedInUser.firstName} ${logedInUser.lastName}</p>
    <p>Passenger Id: ${logedInUser.passengerId}</p>
    <p>DOB: ${logedInUser.dob}</p>
    <p>Contact: ${logedInUser.contact}</p>
    <button id="editBtn">Edit</button>`;

    document.getElementById('editBtn').addEventListener('click',function(){
        document.getElementById('edit').style.display="block";
        document.getElementById('data').style.display="none";
        document.getElementById('firstName').value = logedInUser.firstName;
        document.getElementById('lastName').value = logedInUser.lastName;
        document.getElementById('dob').value = logedInUser.dob;
        document.getElementById('address').value = logedInUser.address;
        document.getElementById('contact').value = logedInUser.contact;
    })
}


document.getElementById('saveBtn').addEventListener('click',function(){
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;

    const userData = {
        passengerId: passengerId,
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        email: logedInUser.email,
        address: address,
        contact: contact,
        password: logedInUser.password
    };
    localStorage.setItem(logedInId,JSON.stringify(userData));
    document.getElementById('edit').style.display="none";
    window.location.href = 'myProfile.html';
});

document.getElementById('cancelBtn').addEventListener('click',function(){
    document.getElementById('edit').style.display="none";
    document.getElementById('data').style.display="block";
})
