import express from "express";
import { insertUser } from "../models/user/UserModel.js";
import { hashPassword } from "../utils/bcryptjs.js";
const router = express.Router();

// User signup
router.post("/", async (req, res, next) => {
  try {
    // get the user obj
    //encrypt the password
    req.body.password = hashPassword(req.body.password);

    // insert the user
    const user = await insertUser(req.body);
    user?._id
      ? res.json({
          status: "success",
          message: "Your account has been created, you may login now",
        })
      : res.json({
          status: "Error",
          message: "Error happened please try later",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});
// User login

// user profile

export default router;
