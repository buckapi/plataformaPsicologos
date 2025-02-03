import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { GlobalService } from './services/global.service';
import { FooterComponent } from "./componentes/ui/footer/footer.component";
import { HeadComponent } from './componentes/ui/head/head.component';
import { DetailProductComponent } from './componentes/detail-product/detail-product.component';
import { ShopComponent } from './componentes/shop/shop.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { AboutComponent } from './componentes/about/about.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ScriptLoaderService } from './services/script-loader.service';
import { ScriptStoreService } from './services/script-store.service';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import Swiper from 'swiper';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,  // Necesario para las directivas como ngIf y ngFor
    HttpClientModule,
    RouterOutlet,
    DashboardComponent,
    HomeComponent, 
    FooterComponent,
    HeadComponent,
    DetailProductComponent,
    ShopComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'alicompras';
  
  constructor (
    public global: GlobalService,
    private scriptLoader: ScriptLoaderService,
    private scriptStore: ScriptStoreService,
    @Inject(PLATFORM_ID) private platformId: Object
  )
    {}
    ngOnInit(): void {
      this.scriptLoader
      .loadScripts([
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
      ])
      .then((data) => {
        console.log('Todos los scripts se han cargado correctamente', data);
      })
      .catch((error) => console.error('Error al cargar los scripts', error));
  }
     /*  ngOnInit(): void {
        if (typeof document !== 'undefined') {
            this.scriptLoader
            .loadScripts([
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
            ])
            .then((data) => {
                console.log('Todos los scripts se han cargado correctamente', data);
            })
            .catch((error) => console.error('Error al cargar los scripts', error));
        } else {
            console.warn('Document no está disponible en este entorno.');
        }
    } */
    ngAfterViewInit(): void {
      if (isPlatformBrowser(this.platformId)) {
          // Inicializa Swiper aquí
          new Swiper('.swiper', {
              // Configuración de Swiper
          });

          // Acceso a localStorage
          const isLoggedIn = localStorage.getItem('isLoggedin');
          // Lógica adicional
      } else {
          console.error('localStorage o document no están disponibles en este entorno.');
      }
  }
  
      
    isImage(image: string): boolean {
      return /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(image);
    }


  }
