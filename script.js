const tabButtons = document.querySelectorAll('.tabButton');
const tabcontent = document.getElementsByClassName("tabcontent");
const tab1 = document.querySelector('.tab1');
const tab2 = document.querySelector('.tab2');
const tab3 = document.querySelector('.tab3');
const showSpecsToggle = document.querySelector('.showSpecsToggle');
const specsText = document.querySelector('.specsText');
let specsToggle = false;

tabButtons.forEach( btn => {
    btn.addEventListener('click', (event) => {
            tabMenuDisplay(event); 
    })
});

const tabMenuDisplay = (event) => {

    // Hide all elements with class name "tabContent"
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        console.log("tabcontent hidden")
      }

    //Show current tab and add "active" class to it
    if(event.target.classList.contains('tab1Button')) {
        tab1.classList.add('active');
        tab2.classList.remove('active');
        tab3.classList.remove('active');
        console.log('added active class')
    } else if (event.target.classList.contains('tab2Button')) {
        tab1.classList.remove('active');
        tab2.classList.add('active');
        tab3.classList.remove('active');
    } else if (event.target.classList.contains('tab3Button')) {
        tab1.classList.remove('active');
        tab2.classList.remove('active');
        tab3.classList.add('active');
        
    } else {
        console.log("Tab must not be defined");
    }
}


// showSpecsToggle.addEventListener('click', () => {
//     if (specsToggle) {
//         specsText.style.visibility = "visible";
//     } else {
//         specsText.style.visibility = "hidden";
//     }
//     specsToggle = !specsToggle;
// });