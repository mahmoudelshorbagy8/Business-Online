let meunuBar = document.querySelector('#meunbar');
let navbar = document.querySelector('.nav-header');
meunuBar.addEventListener('click',()=>{
  meunuBar.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});
window.onscroll = () =>{
  meunuBar.classList.remove('fa-times');
  navbar.classList.remove('active');
}
////// start counter /////
const counters = document.querySelectorAll('.counter');
const speed = 200; 
counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;
		const inc = target / speed;
		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});
/// anime //

AOS.init({
  offset: 400,
  duration: 1000
});
