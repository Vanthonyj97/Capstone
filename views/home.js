import html from "html-literal";

export default state => html`
    <h1>WEAREVER!</h1>
        <p>"WEAREVER is that place you come to for Outfit Ideas no matter the Weather, Occasion, and Style"<p>
  </section>
  <h3>
    The weather in ${state.weather.city} is ${state.weather.description}.
    Temperature is ${state.weather.temp}F, and it feels like
    ${state.weather.feelsLike}F.
  </h3>
`;
