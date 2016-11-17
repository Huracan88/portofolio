$(document).ready(function(){

  // Write the brand text with typed.js
  $(function(){
      $(".tpd1").typed({
        strings: ["Ingeniero en sistemas de información."],
        typeSpeed: 10,
        startDelay:500,
        showCursor: false,
        callback: function(){
          $(".tpd2").typed({
            strings: ["Desarrollador web desde 2008."],
            typeSpeed: 10,
            startDelay:500,
            showCursor: false,
          });
        }
      });
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
      $(this).closest('.collapse').collapse('toggle');
  });


  //galleria
  $(function() {
      var data_ac = [
        {
          image: 'img/screenshots/ac/md/ac01_tn.jpg',
          thumb: 'img/screenshots/ac/tn/ac01_tn.jpg',
          big:   'img/screenshots/ac/ac01.png',
          //title: 'my first image',
          //description: 'Lorem ipsum caption'
          //link: 'http://domain.com
        },
        {
          image: 'img/screenshots/ac/md/ac02_tn.jpg',
          thumb: 'img/screenshots/ac/tn/ac02_tn.jpg',
          big:   'img/screenshots/ac/ac02.png',
        },
        {
          image: 'img/screenshots/ac/md/ac03_tn.jpg',
          thumb: 'img/screenshots/ac/tn/ac03_tn.jpg',
          big:   'img/screenshots/ac/ac03.png',
        },
        {
          image: 'img/screenshots/ac/md/ac04_tn.jpg',
          thumb: 'img/screenshots/ac/tn/ac04_tn.jpg',
          big:   'img/screenshots/ac/ac04.png',
        },
        {
          image: 'img/screenshots/ac/md/ac05_tn.jpg',
          thumb: 'img/screenshots/ac/tn/ac05_tn.jpg',
          big:   'img/screenshots/ac/ac05.png',
        },
        {
          image: 'img/screenshots/ac/md/ac06_tn.jpg',
          thumb: 'img/screenshots/ac/tn/ac06_tn.jpg',
          big:   'img/screenshots/ac/ac06.png',
        },
        {
          image: 'img/screenshots/ac/md/ac07_tn.jpg',
          thumb: 'img/screenshots/ac/tn/ac07_tn.jpg',
          big:   'img/screenshots/ac/ac07.png',
        },
        {
          image: 'img/screenshots/ac/md/ac08_tn.jpg',
          thumb: 'img/screenshots/ac/tn/ac08_tn.jpg',
          big:   'img/screenshots/ac/ac08.png',
        },
      ];

      var data_gl = [
        {
          image: 'img/screenshots/gl/md/gl01_tn.jpg',
          thumb: 'img/screenshots/gl/tn/gl01_tn.jpg',
          big:   'img/screenshots/gl/gl01.png',
          //title: 'my first image',
          //description: 'Lorem ipsum caption'
          //link: 'http://domain.com
        },
        {
          image: 'img/screenshots/gl/md/gl02_tn.jpg',
          thumb: 'img/screenshots/gl/tn/gl02_tn.jpg',
          big:   'img/screenshots/gl/gl02.png',
        },
        {
          image: 'img/screenshots/gl/md/gl03_tn.jpg',
          thumb: 'img/screenshots/gl/tn/gl03_tn.jpg',
          big:   'img/screenshots/gl/gl03.png',
        },
        {
          image: 'img/screenshots/gl/md/gl04_tn.jpg',
          thumb: 'img/screenshots/gl/tn/gl04_tn.jpg',
          big:   'img/screenshots/gl/gl04.png',
        },
        {
          image: 'img/screenshots/gl/md/gl05_tn.jpg',
          thumb: 'img/screenshots/gl/tn/gl05_tn.jpg',
          big:   'img/screenshots/gl/gl05.png',
        },
        {
          image: 'img/screenshots/gl/md/gl07_tn.jpg',
          thumb: 'img/screenshots/gl/tn/gl07_tn.jpg',
          big:   'img/screenshots/gl/gl07.png',
        },
        {
          image: 'img/screenshots/gl/md/gl08_tn.jpg',
          thumb: 'img/screenshots/gl/tn/gl08_tn.jpg',
          big:   'img/screenshots/gl/gl08.png',
        },
      ];

      Galleria.loadTheme('vendor/galleria/themes/classic/galleria.classic.min.js');
      var galeria = Galleria.run('#ac-gallery',{
        dataSource: data_ac,
        height: 0.65,
        carousel: true,
        showInfo:false,
        autoplay:true,
        wait:true
      });

      $('#ga1').click(function(){
        Galleria.get(0).load(data_ac);
        console.log('cargando proyecto 2');
      });

      $('#ga2').click(function(){
        Galleria.get(0).load(data_gl);
        console.log('cargando proyecto 2');
      });


    }());

});
