window.addEventListener('load', solution);

function solution() {
  let fName = document.querySelector('#fname');
  let email = document.querySelector('#email');
  let phone = document.querySelector('#phone');
  let address = document.querySelector('#address');
  let postCode = document.querySelector('#code');
  let submitBtn = document.querySelector('#submitBTN');
  let editBTN = document.querySelector('#editBTN');
  let continueBTN = document.querySelector('#continueBTN');

  continueBTN.addEventListener('click', (e)=> {
    let blockDiv = document.querySelector('#block');
    blockDiv.innerHTML = '';
    let h3 = document.createElement('h3');
    h3.textContent = 'Thank you for your reservation!';
    blockDiv.appendChild(h3);

  })

  submitBtn.addEventListener('click', submitInfo);
  function submitInfo(e) {
    if(fName.value && email.value) {
      submitBtn.disabled = true;
      editBTN.disabled = false;
      continueBTN.disabled = false;

      const data = {
        name: fName.value,
        email: email.value,
        phone: phone.value,
        address: address.value,
        postCode: postCode.value
      }

      let nameLi = document.createElement('li');
      nameLi.textContent = `Full Name: ${fName.value}`;
      let emailLi = document.createElement('li');
      emailLi.textContent = `Email: ${email.value}`;
      let phoneLi = document.createElement('li');
      phoneLi.textContent = `Phone Number: ${phone.value}`;
      let addresLi = document.createElement('li');
      addresLi.textContent = `Address: ${address.value}`;
      let postCodeLi = document.createElement('li');
      postCodeLi.textContent = `Postal Code: ${postCode.value}`;


      let previewInfoSection = document.querySelector('#infoPreview');
      previewInfoSection.appendChild(nameLi);
      previewInfoSection.appendChild(emailLi);
      previewInfoSection.appendChild(phoneLi);
      previewInfoSection.appendChild(addresLi);
      previewInfoSection.appendChild(postCodeLi);

      fName.value = '';
      email.value = '';
      phone.value = '';
      address.value = '';
      postCode.value = '';

      editBTN.addEventListener('click', (e)=> {
      
        fName.value = data.name;
        email.value = data.email;
        phone.value = data.phone;
        address.value = data.address;
        postCode.value = data.postCode;

        editBTN.disabled = true;
        continueBTN.disabled = true;
        submitBtn.disabled = false;

        previewInfoSection.innerHTML = '';

      })
    }

  }
}
