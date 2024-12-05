import html from "html-literal";

export default state => html`
  <body>
    <header>
      <h1>WEAREVER</h1>
    </header>
    <main>
      <section class="hero">
        <h2>Welcome to WEAREVER – Your Digital Closet Companion</h2>
        <p>
          WEAREVER transforms how you style yourself by giving you the tools to
          create stunning outfits effortlessly. Upload your garments, categorize
          them, and mix and match on the go! Whether you're planning for a
          casual day out, a formal event, or just experimenting with your
          wardrobe, WEAREVER keeps your style organized and accessible.
        </p>
        <p>
          Start creating your looks today and unlock the potential of your
          wardrobe!
        </p>
      </section>
    </main>
    <h2>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}F, and it feels like
      ${state.weather.feelsLike}F.
      <p></p>
    </h2>
    <body></body>
  </body>
`;
