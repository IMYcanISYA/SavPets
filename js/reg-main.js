
const burgerBtn = document.querySelector(".burger-btn");
const burgerMenu = document.querySelector("#nav-menu");
const header = document.querySelector("._container-header");



if (burgerBtn && burgerMenu) {
		window.onscroll = () => {
			if (!burgerBtn.classList.contains('_active')) {
				if (window.scrollY >= header.offsetHeight) {
					header.classList.add('_active');
				} else header.classList.remove('_active');
			}	
		}
	burgerBtn.addEventListener("click", () => {
		burgerMenu.classList.toggle("_active");
		burgerBtn.classList.toggle("_active");
		document.querySelector('html').classList.toggle('_lock');
		if (burgerBtn.classList.contains('_active')) {
		header.classList.add('_active');
	} else {
		if (window.scrollY < header.offsetHeight) {
			header.classList.remove('_active');
		}
	}
	})
}