const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const supriseButton = document.querySelector('.suprise');

const profile = document.querySelector('.profile');
const person = document.querySelector('.name');
const stand = document.querySelector('.stand');
const text = document.querySelector('.text');

const personTab = ['Susan Smith', 'Kenneth Anderson', 'James Boyer', 'Ralph Schulz'];
const standTab = ['web developer', 'secretary', 'Business management consultant', 'EEO representative'];
const imgTab = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
const textTab = ['A professional who designs and develops websites and web applications, coding and maintaining digital platforms for online businesses.',
'An administrative assistant responsible for office tasks, including scheduling, document management, and communication.',
'An expert who provides advice and solutions to improve a companys operations, efficiency, and profitability.',
'A role focused on ensuring workplace fairness, diversity, and compliance with anti-discrimination laws and policies.']

let counter;

const loadPerson = () => {
    profile.style.backgroundImage = `url(img/${imgTab[0]})`;
    person.textContent = personTab[0];
    stand.textContent = standTab[0];
    text.textContent = textTab[0]
    counter = 0;
}

const rightPerson = () => {
    if (counter < 3){
        counter++;
    }
    else{
        counter = 0;
    }
        profile.style.backgroundImage = `url(img/${imgTab[counter]})`;
        person.textContent = personTab[counter];
        stand.textContent = standTab[counter];
        text.textContent = textTab[counter];
}
const leftPerson = () => {
    if (counter > 0){
        counter--;
    }
    else{
        counter = 3;
    }
    profile.style.backgroundImage = `url(img/${imgTab[counter]})`;
    person.textContent = personTab[counter];
    stand.textContent = standTab[counter];
    text.textContent = textTab[counter];
}
