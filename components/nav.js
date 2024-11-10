import html from "html-literal";
import navItems from "./navItems";

export default navItems => html`
    <nav id="hamburger-nav-container" class="header-bar-item">
        <ul class="hidden--mobile nav-links">
            ${navItems.map(item => navItems(item)).join("")}
        </ul>
    </nav>
`;
