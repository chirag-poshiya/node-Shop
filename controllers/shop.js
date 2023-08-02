const Products = require('../models/product');

exports.getProducts =  (req, res, next) => {
  Products.fetchAll(products => {
    
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Shop',
      path: '/products'
    }); 
  });
  
};

exports.getIndex = (req, res, next) => {
  Products.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    }); 
  });
}

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
      
      pageTitle: 'Your Cart',
      path: '/cart'
  })
}
exports.getOrders = (req, res, next) => {
  res.render('shop/order', {
      
      pageTitle: 'Your Orders',
      path: '/orders'
  })
}

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  })
}