import html from "html-literal";

export default state => html`
  <h1>Hat</h1>
  <img src="${state.outfitSelection.hat}" />
  <h1>Tops</h1>
  <img src="${state.outfitSelection.top}" />
  <h1>Bottoms</h1>
  <img src="${state.outfitSelection.bottom}" />
  <h1>Shoes</h1>
  <img src="${state.outfitSelection.shoes}" />
`;
