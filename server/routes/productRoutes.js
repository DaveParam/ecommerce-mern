import  express  from "express";
import { createProductController, getProductController, getSingleProductController, productPhotoController, deleteProductController, updateProductController, productFiltersController, productCountController, productListController, searchProductController, braintreeTokenContollrer, braintreePaymentController  } from "../controller/productController.js";
import { requireSignIn, isAdmin } from "../middleware/authMiddleware.js";
import formidable from "express-formidable"

//router object
const router = express.Router();

// create product
router.post("/create-product",requireSignIn, isAdmin, formidable(), createProductController);

// get product 
router.get("/get-product", getProductController);

// single product
router.get("/get-product/:slug", getSingleProductController);

// get photo 
router.get("/product-photo/:pid", productPhotoController);

// delete product 
router.delete("/delete-product/:pid", deleteProductController);

// update product 
router.put("/update-product/:pid",requireSignIn, isAdmin, formidable(), updateProductController);

// filter product
router.post("/product-filters", productFiltersController);

// Product count
router.get("/product-count", productCountController);

// poduct per page
router.get("/product-list/:page", productListController);

// search product 
router.get("/search/:keyword", searchProductController);


// PAYMENT ROUTES 
// token 
router.get("/braintree/token", braintreeTokenContollrer);

// payment 
router.post("/braintree/payment", requireSignIn, braintreePaymentController)







export default router;