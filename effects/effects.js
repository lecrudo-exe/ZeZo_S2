

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		const href = this.getAttribute('href');
		if (href && href !== '#' && href.startsWith('#')) {
			const target = document.querySelector(href);
			if (target) {
				e.preventDefault();
				const yOffset = -70; 
				const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
				window.scrollTo({ top: y, behavior: 'smooth' });
			}
		}
	});
});


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
	let current = '';
	sections.forEach(section => {
		const sectionTop = section.offsetTop - 80;
		if (window.scrollY >= sectionTop) {
			current = section.getAttribute('id');
		}
	});
	navLinks.forEach(link => {
		link.classList.remove('active');
		if (link.getAttribute('href') === '#' + current) {
			link.classList.add('active');
		}
	});
});
