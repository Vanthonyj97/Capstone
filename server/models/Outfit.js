import mongoose from "mongoose";

const outfitSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  hat: {
    type: String,
    required: true
  },
  top: {
    type: String,
    required: true
  },
  bottom: {
    type: String,
    required: true
  },
  shoes: {
    type: String,
    required: true
  }
});

const Outfit = mongoose.model("Outfit", outfitSchema);

export default Outfit;
