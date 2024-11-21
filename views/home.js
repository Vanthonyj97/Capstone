import html from "html-literal";

export default state => html`
  <h1>WEAREVER!</h1>
  <p>
    "WEAREVER is that place you come to for Outfit Ideas no matter the Weather,
    Occasion, and Style"
  </p>
  <h2>
    The weather in ${state.weather.city}
    <p></p>
  </h2>
`;
