import html from "html-literal";

export default state => html`
  <h1>${state.outfit.hat}</h1>
  <h2>Hats</h2>
  <select id="hatSelector" name="hat">
    <option>Choose a hat...</option>
    <option value="routeToHat1">Hat 1</option>
    <option value="routeToHat2">Hat 2</option>
  </select>
  <h2>Tops</h2>
  <select id="topSelector" name="top">
    <option>Choose a top...</option>
    <option>Top 1</option>
    <option>Top 2</option>
  </select>
  <h2>Pants</h2>
  <select id="pantsSelector" name="pants">
    <option>Choose pants...</option>
    <option>Pants 1</option>
    <option>Pants 2</option>
  </select>
  <h2>Shoes</h2>
  <select id="shoesSelector" name="shoes">
    <option>Choose shoes...</option>
    <option>Shoes 1</option>
    <option>Shoes 2</option>
  </select>
  <br /><br />
  <button id="updateOutfitButton">
    Update Outfit
  </button>

  <div id="outfitDiv"></div>
`;
