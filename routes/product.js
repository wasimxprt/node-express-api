const router = require("express").Router();
const productController = require("../controllers/productController");

router.get("/", productController.getAllProduct);
router.get("/:id", productController.getProductById);
router.post("/",productController.createProduct);
router.put("/:id",productController.updateProduct);
router.delete("/:id", productController.deletProduct);

module.exports = router;