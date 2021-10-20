window.addEventListener('load', solution);

function solution() {
  let fullName = document.getElementById('fname');
  let email = document.getElementById('email');
  let phone = document.getElementById('phone');
  let address = document.getElementById('address');
  let postCode = document.getElementById('code');

  let submitBtn = document.getElementById('submitBTN');
  let previewInfoBox = document.getElementById('infoPreview');
  let editBtn = document.getElementById('editBTN');
  let continueBtn = document.getElementById('continueBTN');

  const data = {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    postCode: ''
  }
  
  submitBtn.addEventListener('click', previewInfo);
  editBtn.addEventListener('click', editInfo);
  continueBtn.addEventListener('click', continueToEnd);



  function previewInfo() {

    if (fullName.value && email.value) {

      let fullNameLi = document.createElement('li');
      fullNameLi.textContent = `Full Name: ${fullName.value}`;
      let emailLi = document.createElement('li');
      emailLi.textContent = `Email: ${email.value}`;
      let phoneLi = document.createElement('li');
      phoneLi.textContent = `Phone Number: ${phone.value}`;
      let addressLi = document.createElement('li');
      addressLi.textContent = `Address: ${address.value}`
      let postalCodeLi = document.createElement('li');
      postalCodeLi.textContent = `Postal Code: ${postCode.value}`;

      previewInfoBox.appendChild(fullNameLi);
      previewInfoBox.appendChild(emailLi);
      previewInfoBox.appendChild(phoneLi);
      previewInfoBox.appendChild(addressLi);
      previewInfoBox.appendChild(postalCodeLi);

      data.fullName = fullName.value;
      data.email = email.value;
      data.phone = phone.value;
      data.address = address.value;
      data.postCode = postCode.value;

      fullName.value = '';
      email.value = '';
      phone.value = '';
      address.value = '';
      postCode.value = '';

      submitBtn.disabled = true;
      editBtn.disabled = false;
      continueBtn.disabled = false;

    }
    
  }

  function editInfo() {
    
    fullName.value = data.fullName;
    email.value = data.email;
    phone.value = data.phone;
    address.value = data.address;
    postCode.value = data.postCode;
    
    submitBtn.disabled = false;
    editBtn.disabled = true;
    continueBtn.disabled = true;

    let ul = document.getElementsByTagName('ul')[0];
    ul.innerText = '';



  }

  function continueToEnd() {
    let blockDiv = document.getElementById('block');
    blockDiv.innerHTML = '';
    let h3Tag = document.createElement('h3');
    h3Tag.textContent = `Thank You For Your Reservation!`;
    blockDiv.appendChild(h3Tag);

  }

}
