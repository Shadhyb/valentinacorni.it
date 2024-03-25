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

//translation

function handleTranslateEN() {
  let enBtn = document.getElementById("en");
  let itBtn = document.getElementById("it");
  let sense = "<span>sensory</span>";
  let lang = '<span class="key">foreign language</span>';
  let padroneggiare = "<span>mastering</span>";
  let corpo = ' <span class="key">body</span>';
  let senso = " <span>sensory-motor</span>";
  let comunicazione = "<span>communicate</span>";
  let apprendimento = ' <span class="key">learning</span>';
  let scuola = "<span>School of Interpreters and Translators</span>";
  let asefop = "<span>ASEFOP psychomotor</span>";
  let stella = "<span>Giacomo Stella</span>";
  let maude = "<span>Maude Le Roux</span>";
  let icdl = "<span>ICDL DIR 201 Diploma</span>";
  let neuroalign = "<span>Neuroalign</span>";
  let audio = "<span>audio-psycho-phonology</span>";
  let tomatis = "<span>Tomatis</span>";
 
  let language = {
    en: {
      modal_title: "Watch these videos to learn more:",
      who_link: "about me",
      contact_link: "contact",
      method_link: "in what sense?",
      faq_link: 'f.a.q.',
      subtitle: `The ${sense} motor teacher`,
      cta_title: "In what sense?",
      concept1: `Learning a ${lang} requires much more than just mental effort. Attention, working memory, cognitive flexibility, and calmness are essential elements for ${padroneggiare} a new language, learning, and communicating effectively.
      <img src="assets/style/images/1.jpg" alt="bambina stesa su pavimento"/>
       However, these skills are not innate; we are not born with the ability to do them but with a nervous system that needs to be organized and may have encountered difficulties during development for various reasons`,
      concept2: `To understand the learning process, we must consider our nervous system as a complex mosaic of interconnected skills, many of which are linked to our senses,
      <img class="img_right"src="assets/style/images/2.jpg" alt="bambina che fa un puzzle"/>
      our sense of sequence, rhythm, and time. All these characteristics stem from the ${corpo} and involve a ${senso} approach, even before a cognitive one`,
      concept3: `Our brain not only has to receive information but also process it, organize it efficiently, and reproduce it to enable us to ${comunicazione}.
      <img src="assets/style/images/3.jpg" alt="bambina su altalena" />
       Going through the body, helping the person regain calmness at an appropriate pace and timing while supporting information acquisition is crucial in language ${apprendimento}.  It is through understanding individual difficulties that one can make a difference in acquiring a foreign language`,
      discover: "find out more",
      where_title: "Where?",
      bottom:
        "A welcoming and peaceful studio, where you can move around freely and begin your language learning journey.",
      whom_title: "To whom I offer my support",
      contact_title: "Contact me",
      whom_text:
        "I offer my support to those who wish to learn English or Spanish but may encounter challenges in their learning due to specific conditions such as dyslexia, dyspraxia, or advanced age, or those who have faced difficulties in language learning in the past that may have caused frustration. I also welcome foreign students interested in studying Italian and help with other languages in collaboration with other teachers using the Tomatis method.",
      who_title: "About me",
      main_text1: `After graduating from the ${scuola} I became an English and Spanish teacher. To further my education, I earned the ${asefop} diploma`,
      main_text2: `I attended courses on learning and language disorders with Professor ${stella}.  I studied the relationship between senses, praxis, language, and executive functions with Dr. ${maude} of Glen Mills, PA. Through her, I obtained the ${icdl} and became acquainted with the ${neuroalign} method, becoming a provider for it`,
      main_text3: `For over a decade, I have been using ${audio}(${tomatis} 4th level)`,
      // contact_btn: "Contact me",
      contact_txt: 'You can write me a message using the form or any of my contacts',

      form_btn: "Send",
      name: "name",
      surname: "surname",
      phone: "phone",
      message: "message",
      privacy_text: `Read and confirm <span><a id="privacy_form" class="policy_link" href=https://www.iubenda.com/privacy-policy/61997036 class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Privacy Policy">Privacy Policy</a>`,
      privacy: `<a id="privacy_form" class="policy_link" href=https://www.iubenda.com/privacy-policy/61997036 class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Privacy Policy">Privacy Policy</a>`,
      cookies:`<a id="cookies" href=https://www.iubenda.com/privacy-policy/61997036/cookie-policy class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Cookie Policy ">Cookie Policy</a>`
    },
  };

  modal_title.innerHTML = language.en.modal_title;
  who_link.innerHTML = language.en.who_link;
  contact_link.innerHTML = language.en.contact_link;
  method_link.innerHTML = language.en.method_link;
  faq_link.innerHTML = language.en.faq_link;
  subtitle.innerHTML = language.en.subtitle;
  cta_title.innerHTML = language.en.cta_title;
  concept1.innerHTML = language.en.concept1;
  concept2.innerHTML = language.en.concept2;
  concept3.innerHTML = language.en.concept3;
  discover.innerHTML = language.en.discover;
  where_title.innerHTML = language.en.where_title;
  bottom.innerHTML = language.en.bottom;
  whom_title.innerHTML = language.en.whom_title;
  whom_text.innerHTML = language.en.whom_text;
  who_title.innerHTML = language.en.who_title;
  main_text1.innerHTML = language.en.main_text1;
  main_text2.innerHTML = language.en.main_text2;
  main_text3.innerHTML = language.en.main_text3;
  contact_title.innerHTML = language.en.contact_title;
 
  contact_txt.innerHTML = language.en.contact_txt;

  form_btn.innerHTML = language.en.form_btn;
  name.innerHTML = language.en.name;
  surname.innerHTML = language.en.surname;
  phone.innerHTML = language.en.phone;
  message.innerHTML = language.en.message;
  privacy_text.innerHTML = language.en.privacy_text;
  privacy.innerHTML = language.en.privacy_form;
  cookies.innerHTML = language.en.cookies
  enBtn.classList.add("hidden");
  itBtn.classList.remove("hidden");

}
let lang = '<span class="key">lingua straniera</span>';
function handleTranslateIT() {
  let enBtn = document.getElementById("en");
  let itBtn = document.getElementById("it");
  let sense = "<span>senso</span>";
  let lang = '<span class="key">lingua straniera</span>';
  let padroneggiare = "<span>padroneggiare</span>";
  let corpo = ' <span class="key">corpo</span>';
  let senso = " <span>senso-motorio</span>";
  let comunicazione = "<span>comunicazione</span>";
  let apprendimento = ' <span class="key">apprendimento</span>';
  let scuola = "<span>Scuola Interpreti e Traduttori</span>";
  let asefop = "<span>psicomotricista ASEFOP</span>";
  let stella = " <span>Giacomo Stella</span>";
  let maude = "<span>Maude Le Roux</span>";
  let icdl = "<span>Diploma DIR 201 di ICDL</span>";
  let neuroalign = "<span>Neuroalign</span>";
  let audio = "<span>audio-psico-fonologia</span>";
  let tomatis = "<span>Tomatis</span>";
 
  let language = {
    it: {
      modal_title: "Guarda questi video per approfondire:",
      who_link: "chi sono",
      contact_link: "contatti",
      method_link: `l'approccio`,
      faq_link: 'f.a.q.',
      cta_title: "In che senso?",
      subtitle: `insegnante in ${sense} motorio`,
      concept1: `Imparare una ${lang} richiede molto più di un semplice impegno mentale. Attenzione, memoria di lavoro, flessibilità cognitiva e calma sono elementi essenziali per ${padroneggiare} una nuova lingua, apprendere e comunicare al meglio.    
      <img src="assets/style/images/1.jpg" alt="bambina stesa su pavimento"/>
      Tuttavia, queste abilità non sono innate; non nasciamo con l’abilità del fare, ma con un sistema nervoso che si deve organizzare e che per diverse ragioni può aver incontrato difficoltà durante lo sviluppo`,
      concept2: `Per comprendere il processo di apprendimento, dobbiamo considerare il nostro sistema nervoso come un intricato mosaico di abilità interconnesse, molte delle quali sono legate ai nostri sensi,
      <img class="img_right"src="assets/style/images/2.jpg" alt="bambina che fa un puzzle"/>
       al nostro senso della sequenza, del ritmo e del tempo. Tutte caratteristiche che passano dal ${corpo} e che implicano un approccio ${senso}, ancor prima che cognitivo`,
      concept3: `Il nostro cervello non solo deve ricevere informazioni, ma anche elaborarle, organizzarle al meglio e riproporle per permetterci di stare in ${comunicazione}.
      <img src="assets/style/images/3.jpg" alt="bambina su altalena" />
       Passare attraverso il nostro corpo, aiutare la persona a ritrovare la calma, in un ritmo e timing adeguato, sostenendo l’acquisizione delle informazioni, è cruciale nell'${apprendimento} linguistico. E' tramite la comprensione delle difficoltà individuali che si può fare la differenza nell'acquisizione di una lingua straniera`,
      discover: "scopri di più",
      contact_title: "Contattami!",
      where_title: "In che luogo?",
      bottom: `Uno studio accogliente e tranquillo, dove potrai muoverti liberamente e affrontare i primi passi nell'apprendimento linguistico`,
      whom_title: "A chi è rivolto?",
      whom_text: `A coloro che desiderano imparare l'inglese o lo spagnolo, ma che possono incontrare sfide nell'apprendimento dovute a condizioni specifiche come la dislessia, la disprassia o l'età avanzata, oppure che hanno affrontato difficoltà nell'apprendimento linguistico in passato che potrebbero aver generato frustrazione. Mi rivolgo anche agli studenti stranieri interessati a studiare l'italiano e offro supporto per altre lingue in collaborazione con altri insegnanti utilizzando il metodo Tomatis`,
      who_title: "Chi sono",
      main_text1: `Dopo la laurea alla ${scuola} divento insegnante di inglese e spagnolo. Per completare la mia formazione conseguo il diploma da ${asefop}`,
      main_text2: `Seguo i corsi sui disturbi dell’apprendimento e del linguaggio del Professor ${stella} e studio la relazione tra sensi, prassia, linguaggio e funzioni esecutive con la dottoressa ${maude} di Glen Mills, PA con la quale ottengo inoltre il ${icdl} e grazie alla quale conosco il metodo ${neuroalign} di cui divento provider`,
      main_text3: `Da oltre un decennio utilizzo l’${audio}(${tomatis} 4 ° livello)`,
   
      contact_txt: ' Puoi scrivermi un messaggio usando il form o uno dei miei contatti',
    
      form_btn: "Invia",
      name: "nome",
      surname: "cognome",
      phone: "telefono",
      message: "messaggio",
      privacy_text: `Leggi e accetta i termini di <span><a id="privacy_form" class="policy_link" href=https://www.iubenda.com/privacy-policy/61997036 class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Privacy Policy">Privacy Policy</a>`,
      privacy: `<a id="privacy_form" class="policy_link" href=https://www.iubenda.com/privacy-policy/61997036 class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Privacy Policy">Privacy Policy</a>`,
      cookies:`<a id="cookies" href=https://www.iubenda.com/privacy-policy/61997036/cookie-policy class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Cookie Policy">Cookie Policy</a>`
    },
  };

  modal_title.innerHTML = language.it.modal_title;
  who_link.innerHTML = language.it.who_link;
  contact_link.innerHTML = language.it.contact_link;
  method_link.innerHTML = language.it.method_link;
  faq_link.innerHTML = language.it.faq_link
  subtitle.innerHTML = language.it.subtitle;
  cta_title.innerHTML = language.it.cta_title;
  concept1.innerHTML = language.it.concept1;
  concept2.innerHTML = language.it.concept2;
  concept3.innerHTML = language.it.concept3;
  discover.innerHTML = language.it.discover;
  where_title.innerHTML = language.it.where_title;
  bottom.innerHTML = language.it.bottom;
  whom_title.innerHTML = language.it.whom_title;
  whom_text.innerHTML = language.it.whom_text;
  who_title.innerHTML = language.it.who_title;
  main_text1.innerHTML = language.it.main_text1;
  main_text2.innerHTML = language.it.main_text2;
  main_text3.innerHTML = language.it.main_text3;
  contact_title.innerHTML = language.it.contact_title;
  
  contact_txt.innerHTML = language.it.contact_txt;
  contact_txt_bottom.innerHTML = language.it.contact_txt_bottom
  form_btn.innerHTML = language.it.form_btn;
  name.innerHTML = language.it.name;
  surname.innerHTML = language.it.surname;
  phone.innerHTML = language.it.phone;
  message.innerHTML = language.it.message;
  privacy_text.innerHTML = language.it.privacy_text;
  privacy.innerHTML = language.it.privacy;
  cookies.innerHTML = language.it.cookies;
  enBtn.classList.remove("hidden");
  itBtn.classList.add("hidden");
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
   
   
