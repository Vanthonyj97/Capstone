import html from "html-literal";

export default state => html`
  <h1>Hat</h1>
  <img class="garment" src="${state.outfitSelection.hat}" />
  <h1>Tops</h1>
  <img class="garment" src="${state.outfitSelection.top}" />
  <h1>Bottoms</h1>
  <img class="garment" src="${state.outfitSelection.bottom}" />
  <h1>Shoes</h1>
  <img class="garment" src="${state.outfitSelection.shoes}" />
  <form>
    <input type="hidden" name="hat" value="${state.outfitSelection.hat}" />
    <input type="hidden" name="top" value="${state.outfitSelection.top}" />
    <input
      type="hidden"
      name="bottom"
      value="${state.outfitSelection.bottom}"
    />
    <input type="hidden" name="shoes" value="${state.outfitSelection.shoes}" />
    <p>To save this outfit, give it a name and then click SUBMIT.</p>
    <p>Name: <input type="text" name="outfitName" required /></p>
    <button onClick="submitGarments()" type="button">Submit</button>
  </form>
`;
