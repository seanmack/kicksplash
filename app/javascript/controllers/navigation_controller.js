import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  // TODO: This is ported over from the original vanilla JS version,
  // but there are no dropdowns in the current implementation. So I'll
  // leave this commented out for now, pending a future update.
  //
  // As of now, the below is an example implementation within the view:
  //
  //   <body data-controller="navigation" data-navigation-target="body">
  //     <!-- Your other HTML code -->
  //     <div id="cs-navigation" data-navigation-target="navbarMenu">
  //         <!-- ... -->
  //         <div class="cs-toggle" data-navigation-target="hamburgerMenu"></div>
  //     </div>
  //     <ul id="cs-expanded" data-navigation-target="expanded">
  //         <li class="cs-dropdown" data-navigation-target="dropdown"></li>
  //         <!-- ... -->
  //     </ul>
  // </body>
  //
  // ..but this might change based on the future implementation.
  // static targets = [
  //   'navbarMenu',
  //   'hamburgerMenu',
  //   'body',
  //   'expanded',
  //   'dropdown',
  // ];
  // connect() {
  //   this.hamburgerMenuTarget.addEventListener('click', this.toggleMenu);
  //   this.dropdownTargets.forEach((dropdown) =>
  //     dropdown.addEventListener('click', this.toggleDropdown)
  //   );
  // }
  // disconnect() {
  //   this.hamburgerMenuTarget.removeEventListener('click', this.toggleMenu);
  //   this.dropdownTargets.forEach((dropdown) =>
  //     dropdown.removeEventListener('click', this.toggleDropdown)
  //   );
  // }
  // toggleMenu = () => {
  //   this.hamburgerMenuTarget.classList.toggle('cs-active');
  //   this.navbarMenuTarget.classList.toggle('cs-active');
  //   this.bodyTarget.classList.toggle('cs-open');
  //   this.ariaExpanded();
  // };
  // ariaExpanded = () => {
  //   const csExpanded = this.expandedTarget.getAttribute('aria-expanded');
  //   this.expandedTarget.setAttribute(
  //     'aria-expanded',
  //     csExpanded === 'false' ? 'true' : 'false'
  //   );
  // };
  // toggleDropdown = (event) => {
  //   event.currentTarget.classList.toggle('cs-active');
  // };
}
