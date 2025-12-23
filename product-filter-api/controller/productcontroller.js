import Product from "../models/products.js";

export const getAllProducts = async (req, res) => {
  const products = await Product.find();
  if (products.length === 0)
    return res.json({ message: "No products found" });

  res.json(products);
};

export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product)
    return res.json({ message: "No products found" });

  res.json(product);
};

export const filterProducts = async (req, res) => {
  const {
    productName,
    brand,
    category,
    minPrice,
    maxPrice,
    rating,
    sort,
    page = 1,
    limit = 5,
  } = req.query;

  let query = {};

  if (productName)
    query.productName = { $regex: productName, $options: "i" };

  if (brand) query.brand = brand;
  if (category) query.category = category;

  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) query.price.$gte = Number(minPrice);
    if (maxPrice) query.price.$lte = Number(maxPrice);
  }

  if (rating) query.rating = { $gte: Number(rating) };

  let sortOption = {};
  if (sort === "asc") sortOption.price = 1;
  if (sort === "desc") sortOption.price = -1;

  const skip = (page - 1) * limit;

  const products = await Product.find(query)
    .sort(sortOption)
    .skip(skip)
    .limit(Number(limit));

  const totalProducts = await Product.countDocuments(query);
  const totalPages = Math.ceil(totalProducts / limit);

  if (products.length === 0)
    return res.json({ message: "No products found" });

  res.json({
    totalProducts,
    totalPages,
    currentPage: Number(page),
    products,
  });
};
