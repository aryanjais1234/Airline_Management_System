const logedInId = JSON.parse(localStorage.getItem('loggedInUser'));
const logedInUser = JSON.parse(localStorage.getItem(logedInId));
const passengerId = logedInUser.passengerId;
function edit(loggedInUser){
    console.log(loggedInUser.firstName);
}
if(logedInUser){
    document.getElementById('passengerName').innerHTML = logedInUser.firstName;
    document.getElementById('data').innerHTML = `
    <p>Name: ${logedInUser.firstName} ${logedInUser.lastName}</p>
    <p>Passenger Id: ${logedInUser.passengerId}</p>
    <p>DOB: ${logedInUser.dob}</p>
    <p>Contact: ${logedInUser.contact}</p>
    <button id="editBtn" onclick="edit(logedInUser)">Edit</button>`;

    document.getElementById('editBtn').addEventListener('click',function(){
        document.getElementById('edit').style.display="block";
        document.getElementById('data').style.display="none";
    })
}

document.getElementById('logOut').addEventListener('click',function(){
    localStorage.removeItem('loggedInUser');
})




