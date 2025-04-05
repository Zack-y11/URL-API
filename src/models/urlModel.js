import mongoose, {Schema} from "mongoose";

const urlSchema = new Schema({
    url: {type:String, required: true},
    shortUrl: {type: String, required: true},
    clicks: {type: Number, default: 0},
    createdAt: {type:Date, default: Date.now}
})


const urlModel = mongoose.model("Url", urlSchema);
export default urlModel;