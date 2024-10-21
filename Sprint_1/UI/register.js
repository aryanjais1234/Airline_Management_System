document.getElementById('registerBtn').addEventListener('click',function(){
    const firstName = document.getElementById('firstName').value;
    const lastName =  document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contactNumber').value;
    const success = document.getElementById('success');

    if(!firstName || !lastName || !dob || !email || ! address || !contact){
        alert('Please enter all details');
        return;
    }

    success.innerHTML = '';

    const date = new Date(dob);

    const minDate = new Date('1924-01-01');
    const date2 = new Date();

    let day = date2.getDate();
    let month = date2.getMonth() + 1;
    let year = date2.getFullYear();
    let maxDate = `${year}-${day}-${month}`;

    if(date<minDate){
        alert("Choose a date greater than 1/1/1924 and before today");
        return;
    }

    if(!/^\d{10}$/.test(contact)){
        alert('Enter a valid contact number');
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(!emailPattern.test(email)){
        alert('Enter a valid email id');
        return;
    }

    const passengerId = Math.floor(Math.random()*100000);
    const password = firstName.slice(0,4) + '@123';
    success.innerHTML = `Passenger Registration is successful! <br>ID: ${passengerId} <br> Password ${password}`;
    const userData = {
        passengerId: passengerId,
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        email: email,
        address: address,
        contact: contact,
        password: password
    };

    localStorage.setItem(passengerId, JSON.stringify(userData));
}
);

document.getElementById('resetBtn').addEventListener('click', function(e){
    if(!confirm('Is it okay to reset the fields?')){
        e.preventDefault();
    }
})