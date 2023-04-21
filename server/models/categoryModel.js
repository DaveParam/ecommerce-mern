import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
    // unique: true,
  },
  slug: {             //  in url convert white space into (-)
    type: String,    
    lowercase: true,
  },
});

export default mongoose.model("Category", categorySchema);