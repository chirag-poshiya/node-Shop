const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false,
    
  });
};

exports.postAddProduct = (req, res, next) => {
  const price = req.body.price;
  const imageUrl = req.body.imageUrl;
  const title = req.body.title;
  const product = new Product(null, title, imageUrl, description, price);
  const description = req.body.description;
  product.save();
  res.redirect('/');
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if(!editMode){
    return res.redirect('/')
  }
  const prodId = req.params.productId;

  Product.findById(prodId, product => {
    if(!product){
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      editing: editMode,
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      product: product
    });
  });
  
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;

  const imageUrl = req.body.imageUrl;
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const product = new Product(prodId, title, imageUrl, description, price);
  product.save();

  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      path: '/admin/products'
      pageTitle: 'Admin Products',
    });
  });
};
