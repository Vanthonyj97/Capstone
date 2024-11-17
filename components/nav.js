import html from "html-literal";
import navItem from "./navItem";

export default navItems => html`
  <nav id="hamburger-nav-container" class="header-bar-item">
    <ul class="hidden--mobile nav-links">
      ${navItems.map(item => navItem(item)).join("")}
    </ul>
  </nav>
`;
