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
  const description = req.body.description;
  const product = new Product(null, title, imageUrl, description, price);
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
  
  const prodId = req.body.prodId;
  const imageUrl = req.body.imageUrl;
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const updatedProduct = new Product(prodId, title, imageUrl, description, price);
  updatedProduct.save();

  res.redirect('/admin/products');
};


exports.postDeleteProduct = (req, res, next) => {
  
  const prodId = req.body.prodId;

  Product.deleteById(prodId);
  
  res.redirect('/admin/products');
};

exports.postDeleteCartProduct = (req, res, next) => {
  
  const prodId = req.body.prodId;

  // Cart.deleteById(prodId);
  
  res.redirect('/admin/products');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};
