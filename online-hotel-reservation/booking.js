const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");

const stepsEl = document.querySelectorAll(".step");

const progressEl = document.querySelector(".progress-bar-front");

const bookingDate= document.querySelector(".bookingDate");
const bookingRooms= document.querySelector(".bookingRooms");
const persondetails= document.querySelector(".persondetails");
const checkoutinfo= document.querySelector(".checkoutinfo");

let currentChecked = 1;

nextEl.addEventListener("click", ()=>{
    currentChecked++;
    if(currentChecked>stepsEl.length){
        currentChecked = stepsEl.length
    }
    updateStepProgress();
});


prevEl.addEventListener("click", ()=>{
    currentChecked--;
    if(currentChecked<1){
        currentChecked = 1;
    }
    updateStepProgress();
});

function updateStepProgress(){
    stepsEl.forEach((stepsEl,idx)=>{
        if(idx < currentChecked){
            stepsEl.classList.add("checked");
        }
        else{
            stepsEl.classList.remove("checked");
        }
    });
    const checkedNumber = document.querySelectorAll(".checked");
    progressEl.style.width = ((checkedNumber.length-1) / (stepsEl.length-1) )*100 +"%";

    if(currentChecked === 1){
        prevEl.disabled = true;
    }
    else if(currentChecked === stepsEl.length){
        nextEl.disabled = true;
    }
    else{
        prevEl.disabled = false;
        nextEl.disabled = false;
    }
    if(currentChecked == 1){
        bookingDate.classList.add("live");
        bookingRooms.classList.remove("live");
    }
    if(currentChecked == 2){
        bookingDate.classList.remove("live");
        bookingRooms.classList.add("live");
        persondetails.style.display = "none";
    }
    if(currentChecked == 3){
        bookingRooms.classList.remove("live");
        persondetails.style.display = "flex";
        checkoutinfo.classList.remove("live");
    }
    if(currentChecked == 4){
        persondetails.style.display = "none";
        checkoutinfo.style.display ="flex";
    }
}


const flex1 = document.getElementById("flex1");
flex1.addEventListener('click',()=>{
    currentChecked = 2;
    updateStepProgress();
});



const btn2 = document.getElementById("confirminfo");

const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const sirname = document.getElementById("sirname");
const mail = document.getElementById("mail");
const phone = document.getElementById("phone");
const country = document.getElementById("country");
const town = document.getElementById("town");
const address = document.getElementById("address");
const tk = document.getElementById('tk');

btn2.addEventListener('click', () => {
	if(checkInputs() == true){
    currentChecked=4;
	
    updateStepProgress();
    }
    else{
        currentChecked=currentChecked;
        updateStepProgress();
    }
});

function checkInputs() {
    const firstnameValue = firstname.value.trim();
    const sirnameValue = sirname.value.trim();
    const mailValue = mail.value.trim();
    const phoneValue = phone.value.trim();
    const countryValue = country.value.trim();
    const townValue = town.value.trim();
    const addressValue = address.value.trim();
    const tkValue = tk.value.trim();

    if(firstnameValue === '') {
		setErrorFor(firstname, 'Συμπληρώστε');
	} else {
		setSuccessFor(firstname);
	}

    if(sirnameValue === '') {
		setErrorFor(sirname, 'Συμπληρώστε');
	} else {
		setSuccessFor(sirname);
	}

    if(mailValue === '') {
		setErrorFor(mail, 'Συμπληρώστε');
	} else if (!isEmail(mailValue)) {
		setErrorFor(mail, 'Λάθος τύπος email');
	} else {
		setSuccessFor(mail);
	}

    if(phoneValue === '') {
		setErrorFor(phone, 'Συμπληρώστε');
	} else {
		setSuccessFor(phone);
	}

    if(countryValue === '') {
		setErrorFor(country, 'Συμπληρώστε');
	} else {
		setSuccessFor(country);
	}
    if(townValue === '') {
		setErrorFor(town, 'Συμπληρώστε');
	} else {
		setSuccessFor(town);
	}
    if(addressValue === '') {
		setErrorFor(address, 'Συμπληρώστε');
	} else {
		setSuccessFor(address);
	}
    if(tkValue === '') {
		setErrorFor(tk, 'Συμπληρώστε');
	} else {
		setSuccessFor(tk);
	}
    if(firstnameValue != '' && sirnameValue != '' && mailValue != '' && phoneValue != '' && countryValue != '' &&
    townValue != '' && addressValue != '' && tkValue != '' ){
        return true;
    }
    else{
        return false;
    }
}




function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}





   
    
   
    
    

    
   
    
    
    
