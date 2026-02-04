import express from 'express'
import { updateProfileByAdmin, updateProfileByUser } from '../controller/admincontroller.js';
import { getuserByid, deleteuser, getallusers } from '../controller/userController.js'
const admin_routes = express.Router();

admin_routes.get("/getallusers", getallusers);
admin_routes.get("/getuserbyid", getuserByid);

admin_routes.put("/updateProfileByAdmin", updateProfileByAdmin);
admin_routes.put("/updateProfileByUser", updateProfileByUser);

admin_routes.delete("/deleteuser", deleteuser);


export default admin_routes;