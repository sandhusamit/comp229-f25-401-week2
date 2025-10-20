import express from "express";
import {
    getWelcomeMsg,
    getAllContacts,
    getContactById,
    updateContactById,
    deleteContactById,
    deleteAllContacts, 
    createContact,
    getAllProjects,
    createProject,
    getProjectById,
    deleteProjectById,
    updateProjectById,
    deleteAllProjects,
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    loginUser,
    deleteAllUsers,
    getQualificationById,
    getAllQualifications,
    createQualification,
    updateQualificationById,
    deleteQualificationById,
    deleteAllQualifications,

} from '../controllers/controller.js';
import { get } from "mongoose";


const router = express.Router();

// Define routes for collections

// Routes for Welcome Message and Contacts collections
router.get("/", getWelcomeMsg); // Example route for welcome message
router.get("/api/contacts", getAllContacts); // Example route for contacts
router.post("/api/contacts", createContact); // Example route to create a contact
router.get('/api/contacts/:id', getContactById); // Example route to get contact by ID
router.put("/api/contacts/:id", updateContactById); // Example route to update contact by ID
router.delete("/api/contacts/:id", deleteContactById); // Example route to delete contact by ID
router.delete("/api/contacts", deleteAllContacts); // Example route to delete all contacts

import authMiddleware from "../server/middlewares/auth.js";


// Routes for Project collections
router.get("/api/projects", getAllProjects); // Example route for projects
router.post("/api/projects", createProject); // Example route to create a project
router.get("/api/projects/:id", getProjectById); // Example route to get project by ID
router.put("/api/projects/:id", updateProjectById); // Example route to update project by ID
router.delete("/api/projects/:id", authMiddleware, deleteProjectById); // Example route to delete project by ID
router.delete("/api/projects", authMiddleware, deleteAllProjects); // Example route to delete all projects

// Routes for qualifications
router.get("/api/qualifications", getAllQualifications); // Example route for qualifications
router.get("/api/qualifications/:id", getQualificationById); // Example route to get qualification by ID
router.post("/api/qualifications", createQualification); // Example route to create a qualification
router.put("/api/qualifications/:id", updateQualificationById); // Example route to update qualification by ID
router.delete("/api/qualifications/:id", deleteQualificationById); // Example route to delete qualification by ID
router.delete("/api/qualifications", deleteAllQualifications); // Example route to delete all qualifications



// Routes for Users collection
router.get("/api/users/:id", authMiddleware, getUserById); // Example route to get user by ID
router.get("/api/users", authMiddleware, getAllUsers); // Example route for users
router.post("/api/users", createUser); // Example route to create a user
router.put("/api/users/:id", authMiddleware, updateUserById); // Example route to update user by ID
router.delete("/api/users/:id", authMiddleware, deleteUserById); // Example route to delete user by ID
router.delete("/api/users", authMiddleware, deleteAllUsers); // Example route to delete all users
router.post("/api/login", loginUser); // Example route for user login





export default router;
