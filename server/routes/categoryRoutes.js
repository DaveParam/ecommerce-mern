import  express  from "express";
import { createCategoryController, updateCategoryController, categoryController, singleCategoryController, deleteCategoryController } from "../controller/categoryController.js";
import { requireSignIn, isAdmin } from "../middleware/authMiddleware.js";



//router object
const router = express.Router();

// create category
router.post(
    "/create-category",
    requireSignIn,
    isAdmin,
    createCategoryController
  );

  //update category

  router.put("/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController );

  // get all caterogy 
  router.get("/get-category", categoryController );

  // single category
  router.get("/single-category/:slug", singleCategoryController );


  // delete category 
  router.delete("/delete-category/:id", requireSignIn, isAdmin, deleteCategoryController  );





export default router;