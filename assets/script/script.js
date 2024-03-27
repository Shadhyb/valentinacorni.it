// function toggleMobileMenu() {
//   document.querySelector("#nav").classList.toggle("active");
//   document.querySelector(".mobile-bar").classList.toggle("active");
// }



let mybutton = document.getElementById("btn-back-to-top");


window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

let title = document.getElementById('cta_title')



let whoLink = document.getElementById("who_link");
let missionLink = document.getElementById("method_link");
let contactLink = document.getElementById("contact_link");
let drop = document.getElementById("points");



const point = document.querySelectorAll(".point");
const concept = document.querySelectorAll(".concept");

function concepts() {
  window.scrollTo(100, screen.height / 2);
}
const modal = document.querySelector(".modal");


const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
function openModal() {
  const modal = document.querySelector(".mod");
  modal.classList.remove("hidden");
}


function closeModal() {
  const modal = document.querySelector(".mod");

  modal.classList.add("hidden");
}





document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modalClose();
  }
});

//translations

function handleTranslate(language) {
  let enBtn = document.getElementById("en");
  let itBtn = document.getElementById("it");
  
  fetch("assets/script/language.json")
    .then(response => response.json())
    .then(data => {
      const translations = data[language];
 if (language == 'en') {
           enBtn.classList.add("hidden");
           itBtn.classList.remove("hidden");
      } else {
            enBtn.classList.remove("hidden");
           itBtn.classList.add("hidden");
      }
        modal_title.innerHTML = translations.modal_title;
        who_link.innerHTML = translations.who_link;
        contact_link.innerHTML = translations.contact_link;
        method_link.innerHTML = translations.method_link;
        faq_link.innerHTML = translations.faq_link;
        subtitle.innerHTML = translations.subtitle;
        cta_title.innerHTML = translations.cta_title;
        concept1.innerHTML = translations.concept1;
        concept2.innerHTML = translations.concept2;
        concept3.innerHTML = translations.concept3;
        discover.innerHTML = translations.discover;
        where_title.innerHTML = translations.where_title;
        bottom.innerHTML = translations.bottom;
        whom_title.innerHTML = translations.whom_title;
        whom_text.innerHTML = translations.whom_text;
        who_title.innerHTML = translations.who_title;
        main_text1.innerHTML = translations.main_text1;
        main_text2.innerHTML = translations.main_text2;
        main_text3.innerHTML = translations.main_text3;
        contact_title.innerHTML = translations.contact_title;
        contact_txt.innerHTML = translations.contact_txt;
        form_btn.innerHTML = translations.form_btn;
        name.innerHTML = translations.name;
        surname.innerHTML = translations.surname;
        phone.innerHTML = translations.phone;
        message.innerHTML = translations.message;
        privacy_text.innerHTML = translations.privacy_text;
        privacy.innerHTML = translations.privacy_form;
        cookies.innerHTML = translations.cookies
        one.innerHTML = translations.one;
        two.innerHTML = translations.two;
        three.innerHTML = translations.three;
        four.innerHTML = translations.four;
        five.innerHTML = translations.five;
        six.innerHTML = translations.six;
        seven.innerHTML = translations.seven;
        eight.innerHTML = translations.eight;
        nine.innerHTML = translations.nine;
        ten.innerHTML = translations.ten;
        eleven.innerHTML = translations.eleven;
        twelve.innerHTML = translations.twelve;
        accordion_body_one.innerHTML = translations.accordion_body_one;
        accordion_body_two.innerHTML = translations.accordion_body_two;
        accordion_body_three.innerHTML = translations.accordion_body_three;
        accordion_body_four.innerHTML = translations.accordion_body_four;
        accordion_body_five.innerHTML = translations.accordion_body_five;
        accordion_body_six.innerHTML = translations.accordion_body_six;
        accordion_body_seven.innerHTML = translations.accordion_body_seven;
        accordion_body_eight.innerHTML = translations.accordion_body_eight;
        accordion_body_nine.innerHTML = translations.accordion_body_nine;
        accordion_body_ten.innerHTML = translations.accordion_body_ten;
        accordion_body_eleven.innerHTML = translations.accordion_body_eleven;
        accordion_body_twelve.innerHTML = translations.accordion_body_twelve;
        faq_bottom_text.innerHTML = translations.faq_bottom_text;
        address.innerHTML = translation.address;
        contact_phone.innerHTML = translations.contact_phone;
        contact_mail.innerHTML = translations.contact_mail
      })
    .catch(error => {
      console.error("Si è verificato un errore durante il recupero delle traduzioni:", error);
    });
}



   const constraints = {
       name: {
           presence: { allowEmpty: false }
     },
      surname: {
           presence: { allowEmpty: false }
       },
       email: {
           presence: { allowEmpty: false },
           email: true
     },
      phone: {
           presence: { allowEmpty: false }
       },
      message: {
           presence: { allowEmpty: false }
       },

   };

   const form = document.getElementById('form');

   form.addEventListener('submit', function (event) {
     const formValues = {
          name: form.elements.name.value,
          surname: form.elements.surname.value,
          email: form.elements.email.value,
          phone: form.elements.phone.value,
          message: form.elements.message.value,
          privacy: form.element.privacy.value
     };
     event.preventDefault()
     

     const errors = validate(formValues, constraints);

     if (errors) {
       event.preventDefault();
       const errorMessage = Object
           .values(errors)
           .map(function (fieldValues) { return fieldValues.join(', ')})
           .join("\n");

       console.log(errorMessage);
     }
     else {
       event.preventDefault()
       const formBtn = document.getElementById('form_btn')
       setTimeout(() => {
         formBtn.classList.add('success')
       },200)
     }
   }, false);
   
   
