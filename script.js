const body = document.body

const btnTheme = document.querySelector('.fa-moon')

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass)
  btnTheme.classList.add(btnClass)
}

const getBodyTheme = localStorage.getItem('portfolio-theme')
const getBtnTheme = localStorage.getItem('portfolio-btn-theme')

addThemeClass(getBodyTheme, getBtnTheme)

const isDark = () => body.classList.contains('dark')

const setTheme = (bodyClass, btnClass) => {

	body.classList.remove(localStorage.getItem('portfolio-theme'))
	btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))

  addThemeClass(bodyClass, btnClass)

	localStorage.setItem('portfolio-theme', bodyClass)
	localStorage.setItem('portfolio-btn-theme', btnClass)
}

const toggleTheme = () =>
	isDark() ? setTheme('light', 'fa-moon') : setTheme('dark', 'fa-sun')

btnTheme.addEventListener('click', toggleTheme)

// Listen for theme changes in the OS/browser
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  /*
  // Only auto-switch if user hasn't manually set a preference
  if (!localStorage.getItem('theme')) {
    if (event.matches) {
      // Switch to dark mode
      if (!document.body.classList.contains('dark')) {
        toggleTheme();
      }
    } else {
      // Switch to light mode
      if (document.body.classList.contains('dark')) {
        toggleTheme();
      }
    }
  }
  */

  if (event.matches) {
      // Switch to dark mode
      if (!document.body.classList.contains('dark')) {
        toggleTheme();
      }
    } 
});

window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', event => {
  /*
  // Only auto-switch if user hasn't manually set a preference
  if (!localStorage.getItem('theme')) {
    if (event.matches) {
      // Switch to dark mode
      if (!document.body.classList.contains('dark')) {
        toggleTheme();
      }
    } else {
      // Switch to light mode
      if (document.body.classList.contains('dark')) {
        toggleTheme();
      }
    }
  }
  */

  if (event.matches) {
      // Switch to dark mode
      if (!document.body.classList.contains('light')) {
        toggleTheme();
      }
    } 
});

// On page load
document.addEventListener('DOMContentLoaded', function() {
  // Use system preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    if (!document.body.classList.contains('dark')) {
      toggleTheme();
    }
  } else if((window.matchMedia('(prefers-color-scheme: light)').matches)) {
    if (!document.body.classList.contains('light')) {
      toggleTheme();
    }  
  }
  /*
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    // Use saved preference
    if (savedTheme === 'dark' && !document.body.classList.contains('dark')) {
      toggleTheme();
    }
  } else {
    // Use system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      if (!document.body.classList.contains('dark')) {
        toggleTheme();
      }
    }
      

  }
  */
  
  // Add click event to theme toggle button
  //document.getElementById('btn-theme').addEventListener('click', toggleTheme);
});

/*
const displayList = () => {
	const navUl = document.querySelector('.nav__list')

	if (btnHamburger.classList.contains('fa-bars')) {
		btnHamburger.classList.remove('fa-bars')
		btnHamburger.classList.add('fa-times')
		navUl.classList.add('display-nav-list')
	} else {
		btnHamburger.classList.remove('fa-times')
		btnHamburger.classList.add('fa-bars')
		navUl.classList.remove('display-nav-list')
	}
}
*/

//btnHamburger.addEventListener('click', displayList)
/*
const scrollUp = () => {
	const btnScrollTop = document.querySelector('.scroll-top')

	if (
		body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		btnScrollTop.style.display = 'block'
	} else {
		btnScrollTop.style.display = 'none'
	}
}

document.addEventListener('scroll', scrollUp)
*/