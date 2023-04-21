import  express  from "express";
import { registerController, loginController, forgotPasswordController, updateProfileController,getOrdersController, getAllOrdersController, orderStatusController } from "../controller/authController.js";
import { requireSignIn, isAdmin } from "../middleware/authMiddleware.js";


//router object
const router = express.Router();

// REGISTER ||  POST
router.post("/register", registerController);

// LOGIN // POST 
router.post("/login", loginController);

//forgot password
router.post("/forgot-password", forgotPasswordController);


// admin route 
router.get("/admin-auth",requireSignIn, isAdmin, (req, res)=>{
    res.status(200).send({ ok : true})
} );

// update profile 
router.put("/profile",requireSignIn, updateProfileController);

// order 
router.get("/orders", requireSignIn, getOrdersController);

// all order 
router.get("/all-orders", requireSignIn,isAdmin, getAllOrdersController);

router.put("/order-status/:orderId", requireSignIn, isAdmin, orderStatusController)

export default router;