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
      cookies: `<a id="cookies" href=https://www.iubenda.com/privacy-policy/61997036/cookie-policy class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Cookie Policy ">Cookie Policy</a>`,
      one: `<span class="number">1</span>Why can&#39;t I learn a foreign language if I&#39;ve already learned one, my own? <br>
      Is it because I tried to learn it too late?`,
      two:`<span class="number">2</span>Why is speaking a language so complex? It can be frustrating, why?`,
      three:`<span class="number">3</span>Why might immersive language learning alone sometimes not be enough? `,
      four:`<span class="number">4</span>Why a sensory approach?`,
      five:`<span class="number">5</span>Why are the motor and the relational part important?`,
      six:`<span class="number">6</span>I still don&#39;t understand what we will do.`,
      seven:`<span class="number">7</span>Will it work for me? I&#39;m not convinced yet<br>
I&#39;m worried about wasting money and time. I&#39;ve never heard of this before.`,
      eight:`<span class="number">8</span>Which results are visible? In what time frame?`,
      nine:`<span class="number">9</span>Will I see results in other areas too?`,
      ten:`<span class="number">10</span>Which languages do you teach?`,
      eleven:`<span class="number">11</span>How do you manage to handle so many roles as a teacher, psychomotor
educator, and audio-psycho-phonologist?`,
  twelve:`<span class="number">12</span>Mi hai quasi convinta, ma mi sento un po’ a disagio per età, o per carattere, ad entrare in una palestra e a lavorare sul corpo per imparare una lingua, è successo anche ad altri?`,
      accordion_body_one:`There can be different reasons and situations because certain people can&#39;t learn a new
language. <br>
Elements such as exposure to the language, mindset, enjoyment, intrinsic motivation and
<em>calmness</em> harsh self-judgment are fundamental to all learning, not just linguistic
acquisition. 
<br>The <em>age factor</em> is often discussed in language learning, a factor that I
personally don&#39;t consider so relevant.
Children do not learn faster just because they have a &quot;younger&quot; brain and nervous system.
Certainly, we cannot ignore that their nervous system develops and adjusts to the
language they are exposed to, but we&#39;ll discuss this further in box 4.
<br>
If age were the only reason why you can&#39;t learn a new language, then anyone who moves
abroad wouldn&#39;t learn the language of the host country after the age of 7, right?
<br>
If you stop to think, a child&#39;s approach to languages naturally contains all those factors I
have just listed: enjoyment, peace, intrinsic motivation, exposure to the language.
<br>
Children learn through play, they don&#39;t suffer from the pressure of <em>time</em> and <em>results</em>, and
thanks to their young age and supportive adults, they can afford to learn through a trial-
and-error system without it affecting their feelings.
Because people have always learned to speak through a system of <em>feedback</em> and <em>feed-
forward</em>, where the meaning comes from experience.
<br>
For sure, no child has ever learned from a grammar book.
But there may also be situations where even children struggle to learn a language or
struggle to learn in general.
<br>
Perhaps that&#39;s your case. You finished school, with great difficulty, believing you didn&#39;t
want to study or just did not understand some subjects.
You didn&#39;t understand why it took you longer than others, but then in life, you did very well! <br>
Or maybe you didn&#39;t do well in school, but you learned languages without even realizing it
because you had the characteristics I have just described, or others, but you just did not
realize why learning a language was easy for you. <br>
Are we really gifted in languages, or is there something more?
<br>
Speaking a language is highly complex; it is what we see of numerous intricate internal
processes that often go unnoticed.`,
      accordion_body_two:`In any communicative and learning process, we receive, organize and process the
information we receive, and eventually return our message to the person we are talking to. <br>
All of this involves functions and abilities such as calmness, gathering information,
attention and presence, working memory, short-term and long-term memory, visual,
musical, rhythmic, tonal, and timbre skills. <br>
Attention is necessary to discriminate and understand the message we receive, a
message that even before its semantic components, has rhythmic, timing, tonal, and
timbral skills.
Where does one word end and another begin?
Why doesn&#39;t it sound the same as the word I heard in that video?
What does this word mean? Why can&#39;t I remember how to pronounce that word? <br>
Basically, an infinite number of <em>variables</em> and characteristics depend on our nervous
system.
We keep all these functions working together along with our thoughts and our memory to
process a response while seeking an emotional and relational connection with the other
person. <br>
It is indeed a complex process that, before becoming automatic, requires integrating many
components.`,
      accordion_body_three:`Immersive language learning means being exposed to sound, rhythm, and problem-
solving of a language.
It has proven to be the most effective way to approach a language. That&#39;s why certain
individuals opt for study trips abroad.
However, for some people, this may not be sufficient.
Some individuals experience significant <em>frustration</em> because they fail to achieve the results
they have seen flourish in their friends who had such experiences.
Consequently, they may become even more frustrated and fail to understand what went
wrong, perhaps concluding that mastering languages is an impossible feat for them,
believing they have a tin ear for language.`,
      accordion_body_four:`In box 1, I briefly described the development of the nervous system, and that while we
develop our nervous system, language develops as well.
In box 2, I mentioned the ability to gather information. <br>
Now, consider that the first phase, when we gather the information, occurs through our
body, through our senses. <br>
The five senses we studied in science class - hearing, sight, touch, smell, taste - give us
the information we need about the environment. Information that we send to the brain to
be processed.
Besides these five senses, perhaps you&#39;re unaware that there are others: the sense of
balance, proprioception, and interoception. <br>
Balance not only maintains us in an upright position against gravity, but it is important for
walking, and moving coordinately.
Balance is also the only sense that connects with the other senses to optimize their
functioning. It connects with vision to read correctly and observe the environment around
us; with hearing to listen appropriately, and it promotes inter-hemispherical organization of
our brain for learning and social interaction. <br>
Proprioception relates to our joints, our body schema, our perception of ourselves in the
environment.
If we have poor self-perception, it&#39;s difficult for us to pay attention to others, and in a
communicative act, this is essential. <br>
Interoception is that sense related to our internal state, our most visceral organs, which
generally informs us about how we feel in a given situation, socially or in terms of learning.
Are we calm? Are we ready to engage with others? <br>
Sometimes this information doesn&#39;t arrive adequately, we do not discriminate the message
as certain senses may fail to provide relevant data, or they don&#39;t arrive simultaneously to
be processed by the brain with meaning.
They need an extra push.
Other times, however, we can have a sensory overload that prevent us from being
regulated - and we might find ourselves agitated without knowing why. <br>
Think of a noisy room; it&#39;s difficult to converse, remain calm, or maintain attention if we&#39;re
bothered by certain types of sounds or high volume.
This can also happen if we don&#39;t discern well the sound of a foreign language.`,
      accordion_body_five:`In the case of foreign languages, it is pretty evident that senses such as hearing, and
vision need to be refined.
It&#39;s necessary to perceive frequencies, tones, and the timbre of the language adequately
before even making these characteristics our own.
It is also essential to integrate our visual abilities with spelling rules of the language,
matching certain letters to specific sounds in a <em>continuous</em> process. <br>
But consider also balance, rhythm, and the sense of timing as motor qualities not only for a
language but also for memory and sustained attention.
If you lose the rhythm or timing, you fall behind and can&#39;t integrate the message because
you perceive it as too fast. <br>
These aspects are strongly linked to our sense of balance, body schema, attention to the
external and internal environment (what happens inside me while the other person is
speaking?). <br>
You understand that learning is highly sensory and motor.
Certain functions are then taken for granted because invisible. <br>
Like a pyramid of which we can only observe the tip, the executive functions: memory,
attention, processing, speaking, reading. <br>
Just think about how much clearer and more attentive you feel after a yoga or Pilates
session, or a good run! The body is more integrated, more responsive, and still in a state
of calm. <br>
Some people are more visual, others more auditory.
Others have compensated with cognitive and logical strategies for learning, but it&#39;s
exhausting, and often, one feels like giving up if intrinsic motivation is lacking.
It is difficult, even impossible to use logic to start an automatism like speaking!
It&#39;s possible to use logic along with visual memory for certain language tests, but
impossible to stay in communication. Speaking is fast-paced and is interaction.
It&#39;s necessary then to start from the body, calm it, regulate it, and reactivate it in a gentle
and fun way, proposing activities that support the acquisition and processing of
information.`,
      accordion_body_six:`My challenge is to keep your curiosity alive, without pressure, throughout our journey. <br> I
have a body approach; this is to make you feel more integrated and present.
The idea underneath is to allow you to have a linguistic experience in small steps through
movement and play. <br>

For years, I have been using the Tomatis audio-psycho-phonology approach for several
reasons: it helps regulate to achieve a state of calm, promotes attention, rhythm, timing,
and tone of the language, integrating all the sensory functions I have already listed. <br>
In addition to this unique musical approach, I suggest a language experience approach.
We will work and <em>play</em> in a studio equipped for sensorimotor activities on what I anticipated
in boxes 3 and 4.
Balls, swings, balance boards, and beams, movement games so that you feel more
integrated and aware of the linguistic process. <br>
Each of us is different, and what may be a valid starting point for you may not be helpful
for another person. <br> In addition, I will propose high-level technologies later in our training,
whether you are aware of a learning disorder, or if you are struggling to understand why
you find learning a foreign language so challenging. <br>
At some point, we will sit at a worktable, but not before we have gone through all the
aspects I have just described, the sensorimotor part.`,
      accordion_body_seven:`I understand. <br>
I don&#39;t think you&#39;ve heard of it because so far, I&#39;ve never heard of colleagues combining a
psychomotricity and sensorimotor approach with language teaching.
If I&#39;m mistaken, there are still only a few of us! <br>
Certainly, psychomotricity and sensorimotor activities are used to help children grow and
develop harmoniously, socially and academically. <br>
Many language teachers do propose a playful approach that includes some of these
components; after all, <em>play</em> is the primary form of learning.
What I propose is a targeted and respectful approach to your pace that engages you
consciously. <br>
I&#39;ve deepened my studies in three fields have nothing in common apparently: foreign
languages, psychomotricity and audio-psycho-phonology.
As a teacher, I&#39;ve always asked myself - why do some people effortlessly learn on their
own while others find it so difficult? Does even talent for languages exist? If you&#39;re not yet
ready to contact me and need some time to consider, check if you recognize yourself in
some of these situations:
<ul class="list">
 <li>  Do you feel anxious when speaking with foreigners? </li>
<li>  Do you understand some words but struggle to follow the rhythm and the order of
the words despite years of study? </li>
<li>  Do you understand what&#39;s being said, but when it&#39;s your turn to speak, you feel like
you don&#39;t have the words?</li>
<li> Do you have an early start when speaking, but soon feel exhausted?</li>
<li>  Is the language understandable at first, but then it becomes too fast, and you give
up shortly after? </li>
<li>  Do you struggle reading?</li>
<li>  Do you continue to study grammar and syntax but never remember how to structure
the sentence rhythmically and syntactically when faced with a foreigner? </li>
<li>  Do you have learning disorder certification, but you feel it won&#39;t really help you in
real life? </li>
<li>  Have you tried a full immersion experience abroad, but you couldn&#39;t get into it and
returned home feeling defeated?</li>
<li>  Do you believe it&#39;s too late to start studying a language?</li>
<li>  Do you need to learn a language for work, and any method you&#39;ve tried has
demotivated you?</li>
<li>  Were the middle and high school years useless for learning languages?</li>
<li>  Have you tried attending classes with foreign teachers, who were very patient and
friendly, but you felt out of place and didn&#39;t finish the course?&quot;</li>
    </ul>`,
      accordion_body_eight:`At this point you understood it is no magic, clinical or one-fits-all approach, but rather a
relational and sensorimotor approach that has ancient roots, an approach that we may
have lost in an era of rapid information and results.<br>
It&#39;s a holistic approach that not only reinforces our functions and our calmness but also
focuses our attention on a specific purpose.
We&#39;re talking about a tailor-made training on which we will constantly reassess our
progress.
I&#39;m not offering magic memorization techniques that could fail you in a real-life situation! <br>
For some people, a small push is enough to get back on track, while for others, it takes
more time.
Everyone has different rhythms.

I don&#39;t believe in quick methods, but I&#39;ve observed in my teaching experience that people
can feel stuck and judge themselves while learning. <br>
Thanks to psychomotricity, I&#39;ve realized that each of us has our own timing and strengths.
It&#39;s an approach that also helps us understand our curiosities, making us even more
aware, curious, and critical. <br>
These are characteristics I consider fundamental for learning, in all fields. <br>
Sometimes, these characteristics are set aside in the teaching world because
unfortunately, the goal is to make everyone arrive at the same point. People are different.
To provide you with an answer, since the economic aspect and time parts are crucial for
decision-making, let me tell you that we will plan a six-month program and then assess
what follows.
After each period, we will review together to assess progress, what has been integrated,
and where we are . <br>
To understand if and how to start, I suggest two meetings: an initial video call without
commitment.
After that, if you choose to explore further, we&#39;ll arrange an actual appointment at my
studio, where I will conduct a sensorimotor observation and the necessary listening test for
audio-psycho-phonology. This will help you better understand if I am the right person for
you.`,
      accordion_body_nine:`Every time we learn something new, our brain reorganizes itself.
Working on calmness, regulation, and specific functions can only benefit our attention,
learning ability, and overall well-being.`,
      accordion_body_ten:`English, Spanish, and Italian are the languages I have studied and am authorized to teach.
If these are not the languages you are looking for, I can still help you through audio-
psycho-phonology sessions to integrate other languages.
However, you will need an alternative language training that I won&#39;t be able to teach you.
We can still work together with your teacher to develop a project that suits you.`,
      accordion_body_eleven:`I am a language teacher and a psychomotor educator with certifications in audio-psycho-
phonology and a strong interest in human development, which I continuously research.
My approach is educational, not clinical.

However, during my training I have considered that people struggling with learning in
language or praxis, may have not been detected when they were young, maybe because
their difficulties have not stopped them for &#39;succeeding in life&#39; but have been crucial for
learning a language or achieving their dream goals.
These individuals may have compensated in some way or have been labeled as lazy or
disinterested in studying.
I have a &#39;first observational eye&#39; for those who may have never considered the problem,
and it will be my care to discuss any concerns with you, addressing you to the most
appropriate professional if needed.
I&#39;m talking about vision therapists, otolaryngologists, physiotherapists, and so on.`,
      accordion_body_twelve:`È assolutamente comprensibile, innanzitutto perché ti sto proponendo un approccio a cui forse non avevi mai pensato. 
Inoltre, per certe persone, l’approccio corporeo può essere fonte di disagio all’inizio. 
Il mio mestiere è quello di andare per step, in un approccio rispettoso e che si modelli sui tuoi tempi, non c’è fretta; infatti, spesso la lentezza è il miglior acceleratore!`,
        faq_bottom_text:`Didn't find the answers you were looking for? <span>Contact me!</span>`
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
  one.innerHTML = language.en.one;
  two.innerHTML = language.en.two;
  three.innerHTML = language.en.three;
  four.innerHTML = language.en.four;
  five.innerHTML = language.en.five;
  six.innerHTML = language.en.six;
  seven.innerHTML = language.en.seven;
  eight.innerHTML = language.en.eight;
  nine.innerHTML = language.en.nine;
  ten.innerHTML = language.en.ten;
  eleven.innerHTML = language.en.eleven;
  twelve.innerHTML = language.en.twelve;
  accordion_body_one.innerHTML = language.en.accordion_body_one;
  accordion_body_two.innerHTML = language.en.accordion_body_two;
  accordion_body_three.innerHTML = language.en.accordion_body_three;
  accordion_body_four.innerHTML = language.en.accordion_body_four;
  accordion_body_five.innerHTML = language.en.accordion_body_five;
  accordion_body_six.innerHTML = language.en.accordion_body_six;
  accordion_body_seven.innerHTML = language.en.accordion_body_seven;
  accordion_body_eight.innerHTML = language.en.accordion_body_eight;
  accordion_body_nine.innerHTML = language.en.accordion_body_nine;
  accordion_body_ten.innerHTML = language.en.accordion_body_ten;
  accordion_body_eleven.innerHTML = language.en.accordion_body_eleven;
  accordion_body_twelve.innerHTML = language.en.accordion_body_twelve;
  faq_bottom_text.innerHTML = language.en.faq_bottom_text;
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
      cookies: `<a id="cookies" href=https://www.iubenda.com/privacy-policy/61997036/cookie-policy class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Cookie Policy">Cookie Policy</a>`,
      one: `<span class="number">1</span>Perché non riesco a imparare una lingua straniera se ne ho già imparata una, la mia? <br> Non sono portato? <br> È perché ho provato a impararla troppo tardi?`,
      two:`<span class="number">2</span>Perché parlare una lingua è così complesso? 
                    <br>Può essere frustrante, perché?`,
      three:`<span class="number">3</span>Perché a volte l’apprendimento esperienziale e l’esposizione alla lingua da soli non bastano?`,
      four:`<span class="number">4</span>Perché un approccio sensoriale?`,
      five:`<span class="number">5</span>Perché oltre ai sensi è importante la parte motoria e quella relazionale?`,
      six:`<span class="number">6</span>Non capisco come è strutturato il lavoro, cosa faremo?`,
      seven:`<span class="number">7</span>Funzionerà anche per me? Non sono convinta che sia l’approccio per me, sono preoccupata di perdere soldi e tempo. <br> Non ne ho mai sentito parlare prima d’ora.`,
      eight:`<span class="number">8</span>Quali risultati sono osservabili? In che tempi?`,
      nine:`<span class="number">9</span>Avrò risultati anche su altri fronti?`,
      ten:`<span class="number">10</span>Quali lingue insegni?`,
      eleven:`<span class="number">11</span>Sei insegnante, psicomotricista e audio-psico-fonologa, come fai a occuparti di tante cose?`,
      twelve:`<span class="number">12</span>Mi hai quasi convinta, ma mi sento un po’ a disagio per età, o per carattere, ad entrare in una palestra e a lavorare sul corpo per imparare una lingua, è successo anche ad altri?`,
      accordion_body_one:`Ci possono essere diverse ragioni e situazioni differenti per le quali certe persone non riescono ad imparare una nuova lingua. <br>
Elementi quali: esposizione alla lingua, mentalità, piacere e <em>serenità</em> rispetto all’approccio e ai risultati, motivazione intrinseca, sono alla base di tutti gli apprendimenti, non solo quello linguistico.

Si parla spesso del <em>fattore età</em> per l’apprendimento di una lingua, fattore che personalmente non considero così rilevante. Il bambino non impara più in fretta perché ha un cervello e un sistema nervoso “più giovane”, certo non possiamo non tenere presente che il suo sistema nervoso si sviluppa e si adegua sulla lingua a cui viene esposto, ma di questo ne parleremo al punto 4. 
<br>

Se il fattore età fosse l’unica ragione per cui non riesci ad imparare una nuova lingua, chi si trasferisce all’estero non imparerebbe mai la lingua del paese ospitante dopo i 7 anni di età, vero?
<br>
Se ti fermi a pensare, l’approccio del bambino alle lingue contiene naturalmente tutti quei fattori che ti ho appena elencato: piacere, serenità, motivazione intrinseca, esposizione alla lingua.
<br>

Il bambino impara attraverso il gioco, non soffre del fattore <em>tempo</em> e <em>risultati</em> e, grazie alla sua giovane età e agli adulti che lo sostengono, può permettersi di imparare attraverso un sistema di errori e tentativi senza sentirsi frustrato.
Perché da che mondo e mondo si è imparato a parlare attraverso un sistema di <em>feed-back</em> e <em>feed-forward</em>, dove il senso di tutto arriva dall’esperienza. 
<br>

Logicamente nessuna bambina, nessun bambino ha mai imparato con un libro di grammatica.
Ma ci possono anche essere situazioni dove anche i piccoli faticano ad apprendere una lingua, o faticano ad apprendere in generale.
<br>
Magari è il tuo caso. Hai concluso la scuola, con grande fatica, con la convinzione di non avere voglia di studiare, di avere difficoltà di attenzione, magari di intelligenza. Non capivi perché per te ci voleva più tempo rispetto agli altri, ma poi nella vita te la sei cavata benissimo!
<br>
O magari andavi male a scuola, ma imparavi le lingue senza nemmeno accorgertene perché avevi le caratteristiche di cui ti ho appena parlato, o altre ancora, ma non capivi bene quali, ti dicevano che eri portata per le lingue.
<br>

Si è davvero portati per le lingue, o insieme ai fattori che ti ho appena descritto c’è qualcosa di più?
<br>
Parlare una lingua è molto complesso, è il risultato esterno di più processi nascosti interni a cui non diamo peso. `,
      accordion_body_two:`Cercherò di illustrartelo in maniera semplice.
                    <br>
In qualsiasi processo comunicativo, e di apprendimento, riceviamo informazioni, le organizziamo, le rielaboriamo e restituiamo il nostro messaggio al nostro interlocutore. 
<br>
Tutto ciò implica funzioni e capacità quali calma, raccolta di informazioni, attenzione e presenza, memoria di lavoro, memoria a breve e a lungo termine, capacità visive, musicali ritmiche, tonali e timbriche. <br>

L’attenzione perché dobbiamo discriminare e capire il messaggio che riceviamo dal nostro interlocutore, messaggio che ancor prima delle sue componenti semantiche, avrà componenti ritmiche, di timing, tonali, e timbriche. Dove finisce una parola e ne inizia una nuova? Perché non mi sembra che abbia lo stesso suono di quella ascoltata in quel video? Che cosa vuol dire questa parola? Perché non riesco a ricordarmi che quella parola si legge così? <br>
<br>
In sostanza, un’infinita quantità di <em>variabili</em> e caratteristiche che dipendono anche dal nostro sistema nervoso. Tutto ciò mentre pensiamo ed elaboriamo la nostra risposta, utilizzando la nostra memoria (di lavoro e a lungo termine) e cerchiamo un aggancio emotivo e relazionale con il nostro interlocutore. <br>
È davvero un processo complesso, che prima di diventare automatico, necessita di integrare tante componenti. `,
      accordion_body_three:`Esporre sin da subito la persona nelle condizioni di imparare, nel suono, nella ritmica e nel problem-solving della lingua si è rivelato il miglior modo per approcciare una lingua, ecco perché certe persone decidono di intraprendere viaggi di studio all’estero. 
Ma per certe persone potrebbe non bastare.
Alcune persone provano grande frustrazione e cadono nello <em>sconforto</em> perché non riescono ad accedere ai risultati che hanno visto fiorire in chi, come loro, ha fatto questo tipo di esperienza e potrebbero chiudersi ulteriormente e non capire cos’è che non va, se non arrivare alla conclusione che per loro è un’impresa impossibile, che sono negati per le lingue.`,
      accordion_body_four:` Nel punto 1 ti ho parlato di sviluppo del sistema nervoso che va di pari passo con l’apprendimento linguistico e nel punto 2 ti ho parlato della capacità di raccogliere le informazioni. <br>
Se ti soffermi a pensare attentamente, la prima parte di raccolta delle informazioni è attraverso il nostro corpo, attraverso i sensi. <br>  
I cinque sensi che abbiamo studiato nella classe di scienze: udito, vista, tatto, olfatto, gusto ci forniscono le informazioni sull’ambiente intorno a noi, informazioni che inviamo al cervello per essere elaborate. Oltre a questi cinque sensi, forse non sai che ce ne sono altri: il senso dell’equilibrio, della propriocezione e dell’enterocezione. <br>
L’equilibrio non solo ci permette di contrastare la gravità per mantenerci in posizione eretta, camminare, muoverci in maniera coordinata. È anche l’unico senso che si connette agli altri sensi per farli funzionare al meglio. Per esempio: è un senso che si lega alla visione per leggere correttamente e osservare l’ambiente intorno a noi, si lega all’udito per ascoltare in maniera appropriata e inoltre permette una corretta collaborazione tra gli emisferi del nostro cervello per i processi di apprendimento e per la parte sociale. <br> 
La propriocezione ha a che vedere con le nostre articolazioni, con lo schema corporeo, con la percezione di noi nell’ambiente. Se mi percepisco poco, difficilmente riuscirò a prestare attenzione all’altro, e in un atto comunicativo questo è imprescindibile. <br> 
L’enterocezione è quel senso che ha a che vedere con il nostro interno, con i nostri organi più viscerali e che in generale ci fa capire come stiamo in una determinata situazione, sociale o di apprendimento. Siamo tranquilli? Siamo regolati per aprirci all’altro? <br> 
A volte queste informazioni non giungono in maniera adeguata, non arrivano in maniera discriminata, alcuni sensi non riescono a fornire dati rilevanti, oppure non arrivano insieme, allo stesso tempo, per poter essere rielaborati dal cervello con senso, appunto. 
Hanno bisogno di una spinta in più. Altre volte invece, certi sensi possono sovrastarne altri o non permetterci di essere regolati, prendono la scena in sostanza, e ci troviamo magari agitati senza saperne il perché. <br>
Pensa a una stanza rumorosa, è difficile parlare con il nostro interlocutore, rimanere calmi o mantenere l’attenzione se siamo infastiditi da certi tipi di suoni o dal volume alto. Anche questo può succederci se non distinguiamo bene il suono di ciò che ci viene detto dal nostro interlocutore straniero.`,
      accordion_body_five:`Nel caso delle lingue straniere è evidente sin da subito che sensi come la l’udito e la visione debbano essere affinati, è necessario percepire le frequenze, le tonalità, il timbro della lingua in maniera adeguata prima ancora di far proprie tali caratteristiche. Ed è necessario integrare le nostre capacità visive con la nuova scrittura fonetica della lingua, abbinare certe lettere o gruppi di lettere a suoni specifici senza scordarci nulla, in un <em>continuum</em>. <br>
Ma pensa anche all’equilibrio, al ritmo, al senso del tempo come qualità motorie non solo per una lingua, ma anche per la memoria e l’attenzione sostenuta. Se perdi il ritmo o il tempo di ciò che ti viene detto rimani indietro e non riesci a integrare il messaggio. La lingua ha toni che non conosco e non riesco a fare miei, è troppo veloce? Ritmo e tempo sono fattori corporei. <br> 
Molte cose da tenere insieme insomma. <br>
Queste parti sono fortemente legate al senso dell’equilibrio, al nostro schema corporeo, alla nostra presenza, reazione, e attenzione all’ambiente esterno ed interno (cosa succede dentro di noi mentre l’altro parla?). <br>
Capisci così che l’apprendimento è un atto fortemente sensoriale e motorio, di cui diamo per scontate certe funzioni perché invisibili. <br>
Come una piramide di cui possiamo osservare solo la punta, le funzioni esecutive: memoria, attenzione, rielaborazione, parlato, lettura. <br> 
Pensa solo a quanto ti senti più lucido e attento dopo una sessione di yoga o pilates, o una bella corsa! Il corpo è più integrato, più reattivo e comunque in uno stato di calma. <br>
Certe persone sono più visive, altre più uditive, altre ancora hanno compensato con stratagemmi cognitivi e logici per imparare, ma è faticoso e spesso, nel caso delle lingue straniere, viene da rinunciare se la motivazione intrinseca non è alta perché è difficile utilizzare la logica per avviare un automatismo come il parlato! È possibile utilizzare la logica unitamente alla memoria visiva per certi test di ingresso in lingua, ma difficilmente per sostenere la comunicazione che è veloce e ci chiama ad interagire con <em>l’altro</em>. <br> 
È necessario allora ripartire dal corpo, calmarlo, regolarlo e riattivarlo in una maniera dolce e divertente, proponendogli attività che sostengano l’acquisizione e la rielaborazione delle informazioni, per step e in relazione.`,
      accordion_body_six:`La mia sfida è mantenere la tua curiosità, senza pressioni, lungo tutto il nostro percorso. <br>
Ti propongo un approccio che parta dal corpo e che ti faccia sentire più integrata e presente e che ti permetta, attraverso il movimento e il gioco, di avere un’esperienza linguistica per piccoli step. <br>
Da anni propongo l’audio-psico-fonologia Tomatis per diversi motivi: aiuta a regolare per raggiungere uno stato di calma, promuove l’attenzione, il ritmo, il tempo e la tonalità della lingua di studio aiutando a integrare tutte le funzioni sensoriali che ti ho già elencato. <br> 
Oltre a questo approccio musicale molto particolare, ti propongo un approccio operativo. Lavoreremo e <em>giocheremo</em> su quanto anticipato nei punti 3 e 4 in uno studio attrezzato per il senso-motorio. Palle, altalene, asse e trave di equilibrio, giochi di movimento per farti “sentire” di più, integrare più funzioni alla volta. <br>
Ognuno di noi è diverso e quello che può essere un valido punto di partenza per te non è detto che sia di aiuto per un’altra persona.  <br> 
Oltre all’approccio all’ascolto, trattato dell’audio-psico-fonologia, e al senso-motorio, ti proporrò tecnologie di alto livello da intraprendere in un secondo momento, sia che la tua difficoltà sia certificata (DSA-DSL-BES), sia che tu l’abbia compresa, sia nel caso in cui tu non riesca a capire perché fatichi tanto ad apprendere una lingua straniera. <br>
A un certo punto ci siederemo a un tavolo di lavoro, ma non prima di aver attraversato tutta la parte che ti ho appena descritta, quella senso-motoria.`,
      accordion_body_seven:`Comprendo. <br>
Non credo che tu ne abbia mai sentito parlare perché fino ad oggi non ho mai sentito parlare di colleghi che unissero un approccio psico e senso-motorio all’insegnamento linguistico. 
Se mi sbaglio, siamo comunque in pochi! <br> 
Di sicuro si ricorre alla psicomotricità e all’attività senso-motoria durante lo sviluppo, per aiutare il bambino a crescere e svilupparsi in maniera armoniosa, per la parte sociale e degli apprendimenti. <br>
È certo che molti insegnanti di lingue propongono un approccio ludico che porta con sé alcune di queste componenti, si sa il <em>gioco</em> è la prima forma di apprendimento. 
Ciò che ti propongo è un approccio mirato e rispettoso dei tuoi tempi, che ti coinvolga a livello consapevole. <br> 
Ho approfondito i miei studi in tre campi che poco si conoscono: le lingue straniere, la psicomotricità e il senso-motorio e l’audio-psico-fonologia. <br>
Nel mio percorso di insegnante mi sono sempre posta un quesito: perché certe persone imparano da sole senza alcuno sforzo e per altre è così difficile? Esiste davvero il talento per le lingue? <br> 
Se non ti senti ancora pronta a contattarmi, e se hai bisogno di pensarci un po’ per capire se posso esserti di aiuto, forse rivedersi in queste situazioni potrebbe aiutarti a decidere, ti porrò quindi una serie di domande: <br>
                    <ul class="list">
                      <li>  Ti senti agitata quando devi parlare con stranieri? </li>
                      <li>  Capisci qualche parola nel discorso ma non riesci a seguire il filo in un ritmo e in un flusso acustico, nonostante porti avanti lo studio da tanti anni? </li>
                      <li>  Capisci ciò che ti viene detto, ma quando è il tuo turno di parlare ti sembra di non avere le parole? Di immobilizzarti?</li>
                      <li>  Parti <em>in quarta</em>, ma già dopo poco ti senti stanchissima?</li>
                      <li>  La lingua è comprensibile all’inizio, ma va troppo veloce e dopo poco rinunci? </li>
                      <li>  Fai fatica a leggere in lingua?</li>
                      <li>  Continui a studiare grammatica e sintassi ma non ricordi mai in che ritmo e in che ordine sintattico strutturare la frase bloccandoti in presenza di uno straniero? </li>
                      <li>  Hai una certificazione DSA/DSL o BES, ma senti che una volta uscita da scuola questa non ti aiuterà a comunicare realmente in lingua straniera? </li>
                      <li>  Hai provato con un’esperienza all’estero full immersion, ma non sei riuscita a ingranare e sei tornata a casa affranta? </li>
                      <li>  Sei convinta che sia tardi per intraprendere lo studio di una lingua? </li>
                      <li>  Devi imparare l’inglese per lavoro ed è una vera scocciatura visto che qualsiasi metodo tu abbia provato ti ha demotivato?</li>
                      <li>  Gli anni delle medie e delle superiori sono stati inutili per imparare le lingue?</li>
                      <li>  Hai provato a frequentare classi con insegnanti stranieri, tra l’altro molto pazienti e simpatici, ma ti sei sentita fuori luogo e non hai terminato il corso?</li>`,
      accordion_body_eight:` Mi sembra che a questo punto tu abbia capito che non si tratta di un approccio magico, clinico, o standardizzabile, ma di un approccio psico e senso-motorio che ha basi antiche e che forse abbiamo perso in un’epoca di informazioni e risultati veloci. <br> 
È un approccio globale, che oltre a rinforzare le nostre funzioni e la nostra calma, riporta la nostra attenzione su uno scopo preciso. Stiamo parlando di un percorso fatto su misura e sul quale ci confronteremo costantemente in itinere. Non ti propongo tecniche di memorizzazione magiche che potrebbero tradirti in una situazione reale! <br> 
Per certe persone è sufficiente una piccola spinta per mettersi in carreggiata, per altre ci vuole più di tempo. Ognuno di noi ha tempi diversi. <br>
Non credo nei metodi veloci, ma ho osservato nel corso del mio insegnamento, che le persone possono sentirsi bloccate e giudicarsi mentre imparano. <br> 
Grazie alla psicomotricità ho capito che ognuno di noi ha i propri tempi e i propri punti di forza. È un approccio che inoltre aiuta a comprendere le nostre curiosità, rendendoci ancor più consapevoli, curiosi e critici. <br> 
Caratteristiche che ritengo fondamentali per apprendere, in tutti i campi. <br>
Caratteristiche che ogni tanto vengono messe da parte nel mondo dell’insegnamento perché il punto di arrivo purtroppo è far arrivare tutti e insieme. Ma le persone sono diverse. <br> 
Per fornirti comunque una risposta, visto che la parte economica e il fattore tempo sono importantissimi per poter decidere, ti anticipo che programmeremo il percorso di sei mesi in sei mesi, dopo i quali faremo insieme il punto della situazione per capire dove ci troviamo, cosa è stato integrato e dove ci stiamo dirigendo. <br> 
Per capire se e come partire, ti propongo due incontri: un incontro in videochiamata senza impegno, dopo il quale, se decidi di approfondire, fisseremo un vero appuntamento in studio e potremo conoscerci meglio. In quella sede opererò un’osservazione senso-motoria e il test di ascolto indispensabile per gli ascolti di audio-psico-fonologia e capirai meglio se lavorare insieme fa al caso tuo.`,
accordion_body_nine:`Ogni volta che impariamo qualcosa di nuovo il nostro cervello si riorganizza.
Lavorare su calma e regolazione e funzioni specifiche non può che far bene alla nostra attenzione e alla nostra capacità di imparare e al nostro benessere, sempre.`,
      accordion_body_ten:`Inglese, spagnolo e italiano sono le lingue che ho studiato e che sono autorizzata ad insegnare.
Se non sono le lingue che stai cercando posso comunque esserti di aiuto attraverso gli ascolti di audio-psico-fonologia per integrare altre lingue, ma dovrai seguire un percorso di apprendimento linguistico parallelo e non potrò seguirti dal punto prettamente linguistico in studio, perché è proprio lì che ti farò fare le prime esperienze di lingua viva. <br> 
D’accordo con il tuo insegnante possiamo comunque elaborare un progetto che vada bene per te.`,
      accordion_body_eleven:`Sono un’insegnante di lingue e una psicomotricista con certificazioni di audio-psico-fonologia e uno spiccato interesse per lo sviluppo umano sul quale ricerco continuamente. 
Il mio approccio è educativo e corporeo, inerente al mio ambito, non terapeutico.
Mi sono posta però la questione di persone che faticano negli apprendimenti e le cui difficoltà, magari di linguaggio o prassiche non siano state individuate a tempo debito, magari perché irrilevanti per <em>“farcela nella vita”</em>, ma molto importanti per imparare una lingua o perseguire i propri risultati. <br>
Persone che magari hanno compensato in qualche modo, o sono state definite svogliate e poco portare allo studio.
Ho un <em>“primo occhio osservativo”</em> per chi forse non si è mai posto il problema e sarà mia cura discutere con te riguardo eventuali dubbi indirizzandoti alla figura professionale più idonea nel caso in cui vi fosse la necessità. Sto parlando di terapisti della visione, otorinolaringoiatri, fisio-terapisti…`,
accordion_body_twelve:` È assolutamente comprensibile, innanzitutto perché ti sto proponendo un approccio a cui forse non avevi mai pensato. 
Inoltre, per certe persone, l’approccio corporeo può essere fonte di disagio all’inizio. 
Il mio mestiere è quello di andare per step, in un approccio rispettoso e che si modelli sui tuoi tempi, non c’è fretta; infatti, spesso la lentezza è il miglior acceleratore!`,
faq_bottom_text:`Non hai trovato le risposte che cercavi? <span>Contattami!</span> </p>`

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
 
  form_btn.innerHTML = language.it.form_btn;
  name.innerHTML = language.it.name;
  surname.innerHTML = language.it.surname;
  phone.innerHTML = language.it.phone;
  message.innerHTML = language.it.message;
  privacy_text.innerHTML = language.it.privacy_text;
  privacy.innerHTML = language.it.privacy;
  cookies.innerHTML = language.it.cookies;
  one.innerHTML = language.it.one;
  two.innerHTML = language.it.two;
  three.innerHTML = language.it.three;
  four.innerHTML = language.it.four;
  five.innerHTML = language.it.five;
  six.innerHTML = language.it.six;
  seven.innerHTML = language.it.seven;
  eight.innerHTML = language.it.eight;
  nine.innerHTML = language.it.nine;
  ten.innerHTML = language.it.ten;
  eleven.innerHTML = language.it.eleven;
  twelve.innerHTML = language.it.eleven;
 
  accordion_body_one.innerHTML = language.it.accordion_body_one;
  accordion_body_two.innerHTML = language.it.accordion_body_two;
  accordion_body_three.innerHTML = language.it.accordion_body_three;
  accordion_body_four.innerHTML = language.it.accordion_body_four;
  accordion_body_five.innerHTML = language.it.accordion_body_five;
  accordion_body_six.innerHTML = language.it.accordion_body_six;
  accordion_body_seven.innerHTML = language.it.accordion_body_seven;
  accordion_body_eight.innerHTML = language.it.accordion_body_eight;
  accordion_body_nine.innerHTML = language.it.accordion_body_nine;
  accordion_body_ten.innerHTML = language.it.accordion_body_ten;
  accordion_body_eleven.innerHTML = language.it.accordion_body_eleven;
  accordion_body_twelve.innerHTML = language.it.accordion_body_twelve;
   faq_bottom_text.innerHTML = language.it.faq_bottom_text;
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
   
   
