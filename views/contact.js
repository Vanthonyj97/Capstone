import html from "html-literal";

export default state => html`
  <body>
    <main>
      <section>
        <h2>Get in Touch with WEAREVER</h2>
        <p>
          Have questions, feedback, or ideas to make WEAREVER even better? We're
          here to help! Fill out the form below or reach us through our email.
          We’d love to hear from you.
        </p>
        <form action="https://formspree.io/f/example" method="POST">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label for="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit" class="btn">Send Message</button>
        </form>
      </section>
    </main>
  </body>
`;
