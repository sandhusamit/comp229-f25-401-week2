import mongoose from "mongoose";

const ProjectModel= new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
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
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    completeDate: {
        type: Date,
    },
});

export default mongoose.model("Project", ProjectModel, "projects");