import Product from "../models/product.js";

export async function createProduct(req, res) {
  try {
    const newProduct = await Product.create(req.body);
    console.log(newProduct);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function getProduct(req, res) {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    console.log(product);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: `product with ${id} is not found` });
  }
}

export async function updateProduct(req, res) {
  try {
    const id = req.params.id;
    const options = { new: true };
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      req.body,
      options,
    );
    console.log(updatedProduct);
    res.status(201).json(updatedProduct);
  } catch (error) {
    res.status(404).json({ message: `product with ${id} is not found` });
  }
}

export async function deleteProduct(req, res) {
  try {
    const id = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      res.status(404).json({ message: `product with ${id} is not found` });
    } else {
      console.log(deletedProduct);
      res.status(201).json(deletedProduct);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function getProducts(req, res) {
  try {
    const { category, minPrice, maxPrice, sortBy } = req.query;
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const products = await Product.find({
      $or: [
        { category: category },
        { price: {$gte: minPrice}  },
        { price: {$lte: maxPrice} },
      ],
    })
      .sort({ price: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: `product with ${id} is not found` });
  }
}
