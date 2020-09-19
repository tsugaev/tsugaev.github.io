const uniqueLink = document.getElementById('unique-link');
const themeLink  = document.getElementById('theme-link');
const eventLink  = document.getElementById('event-link');
const photoLink  = document.getElementById('photo-link');
const translationLink = document.getElementById('translation-link');

const unique = document.getElementById('unique');
const theme = document.getElementById('theme');
const event = document.getElementById('event');
const photo = document.getElementById('photo');
const translation = document.getElementById('translation');

const linkTab1 = document.getElementById('link-tab1');
const linkTab2 = document.getElementById('link-tab2');
const linkTab3 = document.getElementById('link-tab3');
const linkTab4 = document.getElementById('link-tab4');
const linkTab5 = document.getElementById('link-tab5');

const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
const tab3 = document.getElementById('tab3');
const tab4 = document.getElementById('tab4');
const tab5 = document.getElementById('tab5');

uniqueLink.addEventListener('click', activator);
uniqueLink.addEventListener('click', show);

themeLink.addEventListener('click', activator);
themeLink.addEventListener('click', show);

eventLink.addEventListener('click', activator);
eventLink.addEventListener('click', show);

photoLink.addEventListener('click', activator);
photoLink.addEventListener('click', show);

translationLink.addEventListener('click', activator);
translationLink.addEventListener('click', show);

linkTab1.addEventListener('click', activator2);
linkTab1.addEventListener('click', show2);

linkTab2.addEventListener('click', activator2);
linkTab2.addEventListener('click', show2);

linkTab3.addEventListener('click', activator2);
linkTab3.addEventListener('click', show2);

linkTab4.addEventListener('click', activator2);
linkTab4.addEventListener('click', show2);

linkTab5.addEventListener('click', activator2);
linkTab5.addEventListener('click', show2);


function activator() {
	uniqueLink.classList.remove('active');
	themeLink.classList.remove('active');
	eventLink.classList.remove('active');
	photoLink.classList.remove('active');
	translationLink.classList.remove('active');
    this.className = "active";
}

function activator2() {
	linkTab1.classList.remove('active');
	linkTab2.classList.remove('active');
	linkTab3.classList.remove('active');
	linkTab4.classList.remove('active');
	linkTab5.classList.remove('active');
    this.classList.add("active");
}

function show() {
	unique.className = 'hidden';
	theme.className = 'hidden';
	event.className = 'hidden';
	photo.className = 'hidden';
	translation.className = 'hidden';

	const currentId = this.getAttribute('data-value');
	const blocks = document.getElementById(currentId);
	blocks.className = 'animated fadeInDown';
}

function show2() {
	tab1.className = 'hidden';
	tab2.className = 'hidden';
	tab3.className = 'hidden';
	tab4.className = 'hidden';
	tab5.className = 'hidden';

	const currentId = this.getAttribute('data-value');
	const blocks = document.getElementById(currentId);
	blocks.className = 'animated fadeInUp';

}

