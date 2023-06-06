import mongoose from "mongoose"

const GeoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      min: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transaction: String,
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin"
    }
  },
  {timestamps: true}
)

const Geo = mongoose.model("Geo", GeoSchema);
export default Geo;