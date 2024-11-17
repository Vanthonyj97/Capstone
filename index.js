import { header, nav, main, footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { camelCase } from "lodash";
import axios from "axios";


const router = new Navigo("/");

function render(state = store.home) {
  document.querySelector("#root").innerHTML = `
      ${header(state)}
      ${nav(store.nav)}
      ${main(state)}
      ${footer()}
    `;
  router.updatePageLinks();
}

// router.hooks({

//   before: (done, match) => {
//     const view = match?.data?.view ? camelCase(match.data.view) : "home";
//     switch (view) {
//       case "home":
//         axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`)
//         .then(response => {
//           store.home.weather = {
//             city: response.data.name,
//             temp: response.data.temp,
//             feelsLike: response.data.feels_like,
//             description: response.data.weather[0].main
//           };
//           console.log(response.data);
//           done();
//         })
//         .catch(error => {
//           console.log("Didnt Work!", error);
//           done();
//         });
//         break;
//         case "pizza":
//             // New Axios get request utilizing already made environment variable
//             axios
//               .get(`${process.env.PIZZA_PLACE_API_URL}/pizzas`)
//               .then(response => {
//                 // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
//                 console.log("response", response);
//                 store.pizza.pizzas = response.data;
    
//                 done();
//               })
//               .catch(error => {
//                 console.log("It puked", error);
//                 done();
//               });
//             break;
//       default :
//         // We must call done for all views so we include default for the views that don't have cases above.
//         done();
//         // break is not needed since it is the last condition, if you move default higher in the stack then you should add the break statement.
//     }
//   },
//   already: (match) => {
//     const view = match?.data?.view ? camelCase(match.data.view) : "home";

//     render(store[view]);
//   },
//   after: (match) => {
//     router.updatePageLinks();

//     // add menu toggle to bars icon in nav bar
//     document.querySelector(".fa-bars").addEventListener("click", () => {
//         document.querySelector("nav > ul").classList.toggle("hidden--mobile");
//     });
//   }
// });


router.on("/", () => render(store.home)).resolve();

router.on({
  "/": () => render(), 

  ":view": match => {

    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    if(view in store) {
      render(store[view]);

    } else {
      render(store.viewNotFound);
      console.log(`view Not Found ${view}`);
  }
}})
.resolve();
// // add menu toggle to bars icon in nav bar
// document.querySelector(".fa-bars").addEventListener("click", () => {
//   document.querySelector("nav > ul").classList.toggle("hidden--mobile");
// });
