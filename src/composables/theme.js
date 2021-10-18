export const toggleTheme = () => {

    if (localStorage.getItem('theme') === null) {
        // apabila data kosong beri nilai awal sesuai object emptyData
        localStorage.setItem('theme', 'light');
    }

    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

    if (localStorage.theme === 'dark') {
        localStorage.theme = 'light'
    } else {
        localStorage.theme = 'dark'
    }

    // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem('theme')
}
