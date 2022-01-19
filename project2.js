let name1 = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");

let name1Val = false;
let emailVal = false;
let phoneVal = false;

name1.addEventListener("blur", () => {
  let regex = /^[a-zA-Z  ]{2,15}$/;
  let nameValue = name1.value;
  if (regex.test(nameValue)) {

    name1.classList.remove("is-invalid");
    name1Val = true;
  } else {
    
    name1.classList.add("is-invalid");
    name1Val = false;
  }
});

// for email

email.addEventListener("blur", () => {
  let regex = /^[a-zA-Z  ._0-9]{1,20}@[a-zA-Z  .0-9]{1,7}[.a-zA-Z]{1,8}$/;
  let emailValue = email.value;
  if (regex.test(emailValue)) {
    email.classList.remove("is-invalid");
    emailVal = true;
  } else {
    email.classList.add("is-invalid");
    emailVal = false;
  }
});

// for Phone Number

phone.addEventListener("blur", () => {
  let regex = /^[0-9]{10}$/;
  let phoneValue = phone.value;
  if (regex.test(phoneValue)) {
    phone.classList.remove("is-invalid");
    phoneVal = true;
  } else {
    phone.classList.add("is-invalid");
    phoneVal = false;
  }
});

let btn = document.getElementById("button");
btn.addEventListener("click", () => {
  console.log("submitted SUCCESSFULLY.");

  if (name1Val && emailVal && phoneVal) {
   
    document.getElementById("content").innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success! </strong> Your Details has Submitted Successfully.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;
        setTimeout(() => {
            document.getElementById("content").innerHTML = ``;
        }, 3000);
        document.getElementById("form").reset();
        // location.reload();

  } else {
    button.classList.add("is-invalid");
    document.getElementById(
      "content"
    ).innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error! </strong> Your Details has Not been Submitted Successfully.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>`;

    setTimeout(() => {
      document.getElementById("content").innerHTML = ``;
    }, 3000);
  }
});
