import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Injectable({
    providedIn: 'root'
  })
  export class ScriptStoreService {
    private scripts: string[] = [
      'assets/js/jquery.min.js',
      'assets/vendor/wow/wow.min.js',
      'assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js',
      'assets/vendor/bootstrap-select/dist/js/bootstrap-select.min.js',
      'assets/vendor/bootstrap-touchspin/bootstrap-touchspin.js',
      'assets/vendor/swiper/swiper-bundle.min.js',
      'assets/vendor/magnific-popup/magnific-popup.js',
      'assets/vendor/imagesloaded/imagesloaded.js',
      'assets/vendor/masonry/masonry-4.2.2.js',
      'assets/vendor/masonry/isotope.pkgd.min.js',
      'assets/vendor/countdown/jquery.countdown.js',
      'assets/vendor/wnumb/wNumb.js',
      'assets/vendor/nouislider/nouislider.min.js',
      'assets/vendor/slick/slick.min.js',
      'assets/vendor/lightgallery/dist/lightgallery.min.js',
      'assets/vendor/lightgallery/dist/plugins/thumbnail/lg-thumbnail.min.js',
      'assets/vendor/lightgallery/dist/plugins/zoom/lg-zoom.min.js',
      'assets/js/dz.carousel.js',
      'assets/js/dz.ajax.js',
      'assets/js/custom.min.js',
      'assets/js/dashbord-account.js'
    ];
  
    getScripts(): string[] {
      return this.scripts;
    }
  }
