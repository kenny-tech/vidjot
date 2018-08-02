module.exports = {
  ensureAuthenticated: function(req, res, next){
    if(req.isAuthenticated()){
      return next() // call next function
    }
    req.flash('error_msg', 'Not Authorized');
    res.redirect('/users/login')
  }
}
