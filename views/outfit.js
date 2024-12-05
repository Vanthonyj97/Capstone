import html from "html-literal";

export default state => html`
  <body>
    <body>
      <header>
        <h1>WEAREVER</h1>
      </header>
    </body>
    <main>
        <section>
            <h2>Design Your Perfect Look</h2>
            <p>
                Browse through your uploaded garments below. Use the categories (Hats, Tops, Bottoms, Shoes) to mix and match your wardrobe pieces. Drag and drop or select items to visualize your outfit in real time.
</p>
    <h1>Select Garments</h1>
    <div id="garmentGrid">
      <h2>Hats</h2>
      <div id="hatGrid" class="grid"></div>
      <h2>Tops</h2>
      <div id="topGrid" class="grid"></div>
      <h2>Bottoms</h2>
      <div id="bottomGrid" class="grid"></div>
      <h2>Shoes</h2>
      <div id="shoeGrid" class="grid"></div>
    </div>
    <a href="/outfit-generator" data-navigo>Outfit Generator</a>
    <br />
    <br />
    <br />
</main>
  </body>
`;
