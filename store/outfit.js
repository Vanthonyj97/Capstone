import truckerHat from "/assets/hats/kapitalTrucker.png";
import bucketHat from "/assets/hats/kaptalBucket.png";
import blackDenim from "/assets/pants/relaxedBlackDenim.png";
import blueDenim from "/assets/pants/relaxedBlueDenim.png";
import airJordan1 from "/assets/shoes/airJordan.png";
import rickOwens from "/assets/shoes/blackBoots.png";
import blackHoodie from "/assets/tops/blackHoodie.png";
import greyHoodie from "/assets/tops/greyHoodie.png";
import whiteTshirt from "/assets/tops/whiteTshirt.png";

export default {
  header: "Create Your Outfit",
  view: "outfit",
  outfit: {
    hat: [truckerHat, bucketHat],
    top: [whiteTshirt, greyHoodie, blackHoodie],
    bottom: [blackDenim, blueDenim],
    shoes: [airJordan1, rickOwens]
  }
};
