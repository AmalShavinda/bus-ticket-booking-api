import mongoose from "mongoose";

const BusSchema = new mongoose.Schema(
  {
    busId: {
      type: String,
      unique: true,
      required: [true, "Bus ID is required"],
      trim: true,
    },
    registrationNumber: {
      type: String,
      unique: true,
      required: [true, "Registration number is required"],
      trim: true,
    },
    chassisNumber: {
      type: String,
      unique: true,
      required: [true, "Chassis number is required"],
      trim: true,
    },
    model: {
      type: String,
      required: [true, "Model is required"],
      trim: true,
    },
    seatCapacity: {
      type: Number,
      required: [true, "Seat capacity is required"],
      min: [1, "Seat capacity must be at least 1"],
    },
    driver: {
      type: String,
      required: [true, "Driver is required"],
      trim: true,
    },
    conductor: {
      type: String,
      required: [true, "Conductor is required"],
      trim: true,
    },
    owner: {
      type: String,
      required: [true, "Owner is required"],
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Bus", BusSchema);