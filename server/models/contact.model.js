import mongoose from "mongoose";

const ContactModel = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  service: {
    type: String,
    enum: ["mortgage", "real-estate", "techsolutions"],
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  message: {
    type: String,
    required: true,
    maxlength: 1000,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Contact", ContactModel, "contacts");
