import { header, nav, main, footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { camelCase, lastIndexOf } from "lodash";
import axios from "axios";


const router = new Navigo("/");

function render(state = store.home) {
  document.querySelector("#root").innerHTML = `
      ${header(state)}
      ${nav(store.links)}
      ${main(state)}
      ${footer()}
    `;
  router.updatePageLinks();
}
console.log(process.env)
router.hooks({

  before: (done, match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";
    switch (view) {
      case "home":
        axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=6085053ea8edeb08052cb4f944db44d7&q=washington%20dc`)
        .then(response => {
          console.log(process.env)
          store.home.weather = {
            city: response.data.name,
            temp: response.data.temp,
            feelsLike: response.data.feels_like,
            description: response.data.weather[0].main
          };
          console.log(response.data);
          done();
        })
        .catch(error => {
          console.log("Didnt Work!", error);
          done();
        });
        break;
        case "pizza":
            // New Axios get request utilizing already made environment variable
            axios
              .get(`${process.env.PIZZA_PLACE_API_URL}/pizzas`)
              .then(response => {
                // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
                console.log("response", response);
                store.pizza.pizzas = response.data;

                done();
              })
              .catch(error => {
                console.log("It puked", error);
                done();
              });
            break;
      default :
        // We must call done for all views so we include default for the views that don't have cases above.
        done();
        // break is not needed since it is the last condition, if you move default higher in the stack then you should add the break statement.
    }
  },
  already: (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    render(store[view]);
  },
  after: (match) => {

    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    if (view === "outfit") {

const hatContainer = document.getElementById("hatGrid")
const topContainer = document.getElementById("topGrid")
const bottomContainer = document.getElementById("bottomGrid")
const shoeContainer = document.getElementById("shoeGrid")
//const highlight_border = "4px solid green";
//const normal_border = "0";

      function createHatGrid(){
        let outfitPics = store.outfit.outfit
        outfitPics.hat.forEach((src, index) =>{
          const img = document.createElement("img")
          img.src=src
          img.classList.add("hat_image")
          hatContainer.appendChild(img)
          img.addEventListener("click", ()=>{
            alert(`You clicked on image${index+1}`)
            store.outfitGenerator.outfitSelection.hat = outfitPics.hat[index]
            // Turn off the colored border for all hats
            // Get all the objects with class hat_image
            let hats = document.querySelectorAll('.hat_image');
            for (let obj of hats) {
              obj.classList.remove("selected");
            }
            // Turn it on for the one that was just clicked
            img.classList.add("selected");
          })
        })
      }
      function createTopGrid(){
        let outfitPics = store.outfit.outfit
        outfitPics.top.forEach((src, index) =>{
          const img = document.createElement("img")
          img.src=src
          img.classList.add("top_image")
          topContainer.appendChild(img)
          img.addEventListener("click", ()=>{
            alert(`You clicked on image${index+1}`)
            store.outfitGenerator.outfitSelection.top = outfitPics.top[index]
            let tops = document.querySelectorAll('.top_image');
            for (let obj of tops) {
              obj.classList.remove("selected");
              img.classList.add("selected");
            }
          })
        })
      }
      function createBottomGrid(){
        let outfitPics = store.outfit.outfit
        outfitPics.bottom.forEach((src, index) =>{
          const img = document.createElement("img")
          img.src=src
          img.classList.add("bottom_image")
          bottomContainer.appendChild(img)
          img.addEventListener("click", ()=>{
            alert(`You clicked on image${index+1}`)
            store.outfitGenerator.outfitSelection.bottom = outfitPics.bottom[index]
            let bottoms = document.querySelectorAll('.bottom_image');
            for (let obj of bottoms) {
              obj.classList.remove("selected");
              img.classList.add("selected");
            }
          })
        })
      }
      function createShoeGrid(){
        let outfitPics = store.outfit.outfit
        outfitPics.shoes.forEach((src, index) =>{
          const img = document.createElement("img")
          img.src=src
          img.classList.add("shoe_image")
          shoeContainer.appendChild(img)
          img.addEventListener("click", ()=>{
            alert(`You clicked on image${index+1}`)
            store.outfitGenerator.outfitSelection.shoes = outfitPics.shoes[index]
            let shoes = document.querySelectorAll('.shoe_image');
            for (let obj of shoes) {
              obj.classList.remove("selected");
              img.classList.add("selected");
            }
          })
        })
      }

      createTopGrid()
      createBottomGrid()
      createShoeGrid()
      createHatGrid()



    }
    if (view === "outfitGenerator") {
      console.log("this ran")
      // Add an event handler for the submit button on the form
      // document.addEventListener("load", event => {
      for(let i = 0; i<4; i++ ) {
        let garment = document.getElementsByClassName("garment")[i].src
        garment = garment.slice(garment.lastIndexOf("/"), garment.lastIndexOf("?"))
        let firstIndex = garment.indexOf(".")
        garment = garment.slice(0, firstIndex)+ garment.slice(firstIndex+ 1)
        console.log(garment)
        let nextIndex = garment.indexOf(".")
        garment = garment.slice(0, firstIndex)+ garment.slice(nextIndex)
        console.log(garment)
      }
      function submitGarments(){
        let submitButton = document.getElementById("submitGarments")
          submitButton.addEventListener("click", ()=> {
            console.log("this works")
          })

      }

    }

    router.updatePageLinks();

  }
});


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
