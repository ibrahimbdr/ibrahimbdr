
//Create global variables
//Storing the section in an HTML collection
const secs = document.querySelectorAll('section');

//Getting the UL and store it in a variable
const Menu = document.getElementById('navbar__list');

//Function for adding the list items with anchor links to the navigation bar
function createMenuItems() {
    for (let sec of secs) {
        Menu.insertAdjacentHTML(
            'beforeend', `<li><a class="menu__link" href="#${sec.id}" data-nav="${sec.id}">${sec.dataset.nav}</a></li>`
            );
    }
}

//Calling the function to establish the navigation bar
createMenuItems();


//Showing the effect when the item is viewed while scrolling through the page
// Using IntersectionObserver to detect the location on the screen
let observer = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        //Determine the link for the active section only.
        let Currentlink = Menu.querySelector(`[data-nav=${entry.target.id}]`);
        
        //Checking if the window is intersectecting with the element
        if (entry.isIntersecting === true) {
            //Adding active effect class to the active section
            entry.target.classList.add('your-active-class');
            //Adding a new class 'active' to apply the effect on the link button
            Currentlink.classList.add('active');
        
        } else {
            //Removing active effect class from the active section
            entry.target.classList.remove('your-active-class');
            //Removing the the effect from the non-active link button
            Currentlink.classList.remove('active');

        }
    })
 }, 
    {
        //The percentage of how much the observer will sense before turning true
        threshold: 0.6,
});
    

//looping all over the sections to add the intersectionObserver effect
secs.forEach(sec => {
    observer.observe(sec);
})    

//Select all the links on the navigation menu to applly the smoothing behavior when navigating to the link destination 
const ButtonClick = document.querySelectorAll('#navbar__list li a');

//scrolling behavior after click by adding an event listener on the link of anchor element then using scrollTo method
ButtonClick.forEach(Button => Button.addEventListener('click', function(moving) {
    moving.preventDefault();
    window.scrollTo({
    top: document.querySelector(moving.currentTarget.getAttribute('href')).offsetTop,
    behavior: "smooth"
    })
})
);

