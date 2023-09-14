import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  connect() {
    this.detectColorScheme();
    this.element.addEventListener('click', this.toggleDarkMode.bind(this));
  }

  toggleDarkMode() {
    localStorage.getItem('theme') === 'light'
      ? this.enableDarkMode()
      : this.disableDarkMode();
  }

  enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  }

  disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }

  detectColorScheme() {
    let theme = 'light';

    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      theme = 'dark';
    }

    theme === 'dark' ? this.enableDarkMode() : this.disableDarkMode();
  }
}
