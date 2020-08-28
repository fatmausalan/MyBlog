angular.module("HelloBlog").
  component('myNavbar', {
    template:
    '<nav class="navbar navbar-expand-lg navbar-dark bg-dark"  style="margin-top: 30px;">' +
  
    '<div class="collapse navbar-collapse" id="navbarColor02"  >' +
      '<ul class="navbar-nav mr-auto" style="margin-right : auto; margin-left: auto;">' +
        '<li class="nav-item active" style="padding:0px 70px 0px 70px;">' +
          '<a class="nav-link" href="#">Anasayfa <span class="sr-only">(current)</span></a>' +
        '</li>'+
        '<li class="nav-item" style="padding:0px 70px 0px 70px;">' +
          '<a class="nav-link" href="#">Yazılar</a>' +
        '</li>' +
        '<li class="nav-item" style="padding:0px 70px 0px 70px;">'+
          '<a class="nav-link" href="#">Linkler</a>' +
        '</li>' +
        '<li class="nav-item" style="padding:0px 70px 0px 70px;">'+
          '<a class="nav-link" href="#">Hakkımda</a>'+
        '</li>'+
      '</ul>' +
    '</div>' +
  '</nav>',
   

  });