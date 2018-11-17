const landingViewButton = document.querySelector( '.button__landing' );
const progressBar = document.querySelector( '.progressBar' );
const landingView = document.querySelector( '.section__landing' );
const reviewDetailsView = document.querySelector( '.review__details' );
const sectionThanks = document.querySelector( '.section__thanks' );

const questionOneView = document.querySelector( '.section__one' );
const questionTwoView = document.querySelector( '.section__two' );
const questionThreeView = document.querySelector( '.section__three' );
const questionFourView = document.querySelector( '.section__four' );
const questionFiveView = document.querySelector( '.section__five' );
const progressMeter = document.querySelector( '#myBar' );

// Review The answers
const driverLicense = document.querySelector( '.review__labelCheck1 input' );
const bankClient = document.querySelector( '.review__labelCheck2 input' );
const errorMsg__message = document.querySelector( '.errorMsg__message' );
const errorMsg = document.querySelector( '.errorMsg' );

const page1 = document.querySelector( '.page__1' );
const page2 = document.querySelector( '.page__2' );
const page3 = document.querySelector( '.page__3' );
const page4 = document.querySelector( '.page__4' );
const page5 = document.querySelector( '.page__5' );

// Landing Page Eventlisteners and logic.
landingViewButton.addEventListener( 'click', function () {
  questionOneView.classList.toggle( 'show' );
  progressBar.classList.toggle( 'show' );
  landingView.classList.add( 'hide' );
  page1.classList.add( 'active' );
} );

// Question 1 Eventlisteners and logic.
const prevPageButton = document.querySelector( '.btn__question-previous1' );
const nextPageButton = document.querySelector( '.btn__question-next1' );
let emptySum = document.querySelector( '#select_car' );
prevPageButton.addEventListener( 'click', function () {
  questionOneView.classList.toggle( 'show' );
  landingView.classList.remove( 'hide' );
  progressBar.classList.toggle( 'show' );
  progressMeter.style.width = '0%';
} );


nextPageButton.addEventListener( 'click', function () {
  questionOneView.classList.toggle( 'show' );
  questionTwoView.classList.toggle( 'show' );
  progressMeter.style.width = '24%';
  page1.classList.remove( 'active' );
  page2.classList.add( 'active' );
  page1.classList.add( 'passed' );
  document.querySelector( '.reviewCarType' ).innerHTML = emptySum.value; // Add value to review form
} );


// Question 2 Event listeners and logic.
const prevPageButton2 = document.querySelector( '.btn__question-previous2' );
const nextPageButton2 = document.querySelector( '.btn__question-next2' );
const nameError = 'Palun sisesta ees- ja perekonnanimi. Eesnime ja perekonnanime vahel peab olema tühik.';

const fullNameRe = /[A-Za-z]{1,15}\s[A-Za-z]{1,15}/;
const nameField = document.querySelector( '.fullName' );

nextPageButton2.addEventListener( 'click', function () {
  if ( fullNameRe.test( nameField.value ) ) {
    questionThreeView.classList.toggle( 'show' );
    questionTwoView.classList.toggle( 'show' );
    page2.classList.remove( 'active' );
    page2.classList.add( 'passed' );
    page3.classList.add( 'active' );
    document.querySelector( '.reviewName' ).innerHTML = nameField.value;
    progressMeter.style.width = '48%';
    
  }
  else {
    errorMsg.style.display = 'block';
    nameField.classList.add( 'redBorder' );
    errorMsg__message.innerHTML = nameError;
    setTimeout( function () {
      errorMsg.style.display = 'none';
      nameField.classList.remove( 'redBorder' );
    }, 3000 );
  }
} );

prevPageButton2.addEventListener( 'click', function () {
  questionOneView.classList.toggle( 'show' );
  questionTwoView.classList.toggle( 'show' );
  progressMeter.style.width = '0';
  page1.classList.add( 'active' );
  page1.classList.remove( 'passed' );
  page2.classList.remove( 'active' );
} );

// Question 3 Eventlisteners and logic.
const moreInfoError = 'Palun valige vähemalt üks võimalus.';
const prevPageButton3 = document.querySelector( '.btn__question-previous3' );
const nextPageButton3 = document.querySelector( '.btn__question-next3' );
const labelCheck1 = document.querySelector( '.labelCheck1 input' );
const labelCheck2 = document.querySelector( '.labelCheck2 input' );
nextPageButton3.addEventListener( 'click', function () {
  if ( labelCheck1.checked || labelCheck2.checked ) {
    questionThreeView.classList.toggle( 'show' );
    questionFourView.classList.toggle( 'show' );
    progressMeter.style.width = '76%';
    page3.classList.add( 'passed' );
    page3.classList.remove( 'active' );
    page4.classList.add( 'active' );
    if ( ( labelCheck1.checked ) ) {
      driverLicense.click();
      driverLicense.disabled = true;
    }
    else {
      driverLicense.disabled = true;
    }
    if ( ( labelCheck2.checked ) === true ) {
      bankClient.click();
      bankClient.disabled = true;
    }
    else {
      bankClient.disabled = true;
    }
  }
  else {
    errorMsg.style.display = 'block';
    errorMsg__message.innerHTML = moreInfoError;
    
    setTimeout( function () {
      errorMsg.style.display = 'none';
    }, 3000 );
    
  }
  
  
} );

prevPageButton3.addEventListener( 'click', function () {
  questionThreeView.classList.toggle( 'show' );
  questionTwoView.classList.toggle( 'show' );
  progressMeter.style.width = '24%';
  page2.classList.remove( 'passed' );
  page2.classList.add( 'active' );
  page3.classList.remove( 'active' );
} );


// Question 4 Eventlisteners and logic.
const kaskoError = 'Palun vastake, kas te soovite kaskot?';
const prevPageButton4 = document.querySelector( '.btn__question-previous4' );
const nextPageButton4 = document.querySelector( '.btn__question-next4' );
const chooceInsurance = document.querySelector( '.labelRadio1 input' );
const chooceNoInsurance = document.querySelector( '.labelRadio2 input' );
const review__chooceInsurance = document.querySelector( '.review__labelRadio1 input' );
const review__chooceNoInsurance = document.querySelector( '.review__labelRadio2 input' );
nextPageButton4.addEventListener( 'click', function () {
  if ( chooceInsurance.checked || chooceNoInsurance.checked ) {
    progressMeter.style.width = '100%';
    questionFourView.classList.toggle( 'show' );
    questionFiveView.classList.toggle( 'show' );
    page5.classList.add( 'active' );
    page4.classList.remove( 'active' );
    page4.classList.add( 'passed' );
    if ( chooceInsurance.checked ) {
      review__chooceInsurance.click();
      review__chooceInsurance.disabled = true;
      review__chooceNoInsurance.disabled = true;
    }
    else if ( chooceNoInsurance.checked ) {
      review__chooceNoInsurance.click();
      review__chooceInsurance.disabled = true;
      review__chooceNoInsurance.disabled = true;
    }
  }
  else {
    errorMsg.style.display = 'block';
    errorMsg__message.innerHTML = kaskoError;
    
    setTimeout( function () {
      errorMsg.style.display = 'none';
    }, 3000 );
    
  }
  
} );

prevPageButton4.addEventListener( 'click', function () {
  questionFourView.classList.toggle( 'show' );
  questionThreeView.classList.toggle( 'show' );
  progressMeter.style.width = '48%';
  page3.classList.add( 'active' );
  page3.classList.remove( 'passed' );
  page4.classList.remove( 'active' );
  page4.classList.remove( 'passed' );
} );


// Question 5 Eventlisteners and logic.
const noCommentError = 'Palun vastake vähemalt ühe sõnaga, mis te asjast arvate.';
const prevPageButton5 = document.querySelector( '.btn__question-previous5' );
const nextPageButton5 = document.querySelector( '.btn__question-next5' );
const feedBack = document.getElementById( 'feedback' );
const reviewFeedback = document.querySelector( '.reviewFeedback' );
nextPageButton5.addEventListener( 'click', function () {
  if ( feedBack.value !== '' ) {
    questionFiveView.classList.toggle( 'show' );
    reviewDetailsView.classList.toggle( 'show' );
    progressBar.classList.toggle( 'show' );
    reviewFeedback.innerHTML = feedBack.value;
  }
  else {
    errorMsg.style.display = 'block';
    errorMsg__message.innerHTML = noCommentError;
    setTimeout( function () {
      errorMsg.style.display = 'none';
    }, 3000 );
  }
} );

prevPageButton5.addEventListener( 'click', function () {
  questionFourView.classList.toggle( 'show' );
  questionFiveView.classList.toggle( 'show' );
  progressMeter.style.width = '76%';
  page4.classList.add( 'active' );
  page5.classList.remove( 'passed' );
  page5.classList.remove( 'active' );
} );


// Review Details and add Success message.
const lastQuestion = document.querySelector( '.btn__question-previous6' );
const sendQuestionaire = document.querySelector( '.btn__question-send' );
lastQuestion.addEventListener( 'click', function () {
  reviewDetailsView.classList.toggle( 'show' );
  questionFiveView.classList.toggle( 'show' );
  progressBar.classList.toggle( 'show' );
} );

sendQuestionaire.addEventListener( 'click', function () {
  sectionThanks.classList.toggle( 'show' );
  reviewDetailsView.classList.toggle( 'show' );
} );

