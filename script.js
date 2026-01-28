const body = document.body
const btnTheme = document.querySelector('.fa-moon')

const setTheme = isDark => {
  body.classList.remove('dark', 'light')
  btnTheme.classList.remove('fa-moon', 'fa-sun')

  if (isDark) {
    body.classList.add('dark')
    btnTheme.classList.add('fa-sun')
  } else {
    body.classList.add('light')
    btnTheme.classList.add('fa-moon')
  }
}

// Apply theme on load
const applySystemTheme = () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  setTheme(prefersDark)
}

// Listen for OS/browser theme changes
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
mediaQuery.addEventListener('change', e => {
  setTheme(e.matches)
})

document.addEventListener('DOMContentLoaded', applySystemTheme)
