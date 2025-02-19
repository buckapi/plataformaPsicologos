import { Component, AfterViewInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { CarService } from '../../services/car.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
  product: any; // Asegúrate de definir el tipo de tu producto
  quantity: number = 1; // Cantidad por defecto
  cartQuantity: number = 0;
  selectedProduct: any;
constructor(
  public global: GlobalService,
  public carService: CarService
) {}

 /*  addToCart() {
    this.carService.addProduct(this.product, this.quantity);
    this.quantity = 1;
    
    Swal.fire({
      icon: 'success',
      title: 'Producto agregado al carrito',
      text: `¡El producto ${this.product.name} ha sido agregado al carrito!`,
      showConfirmButton: true,
      timer: 2000 
    });
  } */
 // In detail-product.component.ts

// Update the addToCart method
/* addToCart(product: any) {
  if (!this.global.cart) {
    this.global.cart = [];
  }

  // Agregar producto al carrito
  const existingProduct = this.global.cart.find(item => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1; // Incrementar la cantidad si ya existe
  } else {
    this.global.cart.push({ ...product, quantity: 1 }); // Agregar nuevo producto
  }

  // Guardar en localStorage
  this.global.saveCartToLocalStorage();
}

// Update the selectService method (renamed to selectProduct)
async selectProduct(product: any) {
  this.selectedProduct = product; // Seleccionar el producto
} */
  addToCart(product: any) {
    console.log('Product being added to cart:', product); // Log the product
  
    if (!product) {
      console.error('No product found!'); // Log an error if product is undefined
      return; // Exit the function if product is not defined
    }
  
    if (!this.global.cart) {
      this.global.cart = [];
    }
  
    // Agregar producto al carrito
    const existingProduct = this.global.cart.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1; // Incrementar la cantidad si ya existe
    } else {
      this.global.cart.push({ ...product, quantity: 1 }); // Agregar nuevo producto
    }
  
    // Guardar en localStorage
    this.global.saveCartToLocalStorage();
  }

// Ensure cart is loaded from localStorage in ngOnInit
/* ngOnInit() {
  this.global.cartQuantity$.subscribe(quantity => {
    this.global.cartQuantity = quantity;
    this.global.updateCartQuantity(); 
  });

  this.device.isMobile().subscribe(isMobile => {
    this.isMobile = isMobile;
  });

  this.global.clinicComments$.subscribe(comments => {
    console.log('Received new comments:', comments);
    this.comments = comments;
    this.cdr.detectChanges();
  });

  // Cargar el carrito desde localStorage si existe
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    this.global.cart = JSON.parse(savedCart);
  }
} */

  ngOnInit() {
    this.global.cartQuantity$.subscribe(quantity => {
        this.global.cartQuantity = quantity;
        this.global.updateCartQuantity(); 
    });

    // Example: Fetch the product from a service or route parameter
    /* this.route.params.subscribe(params => {
        const productId = params['id']; // Assuming you're using route parameters
        this.selectedProduct = this.productService.getProductById(productId); // Replace with actual service call
        console.log('Selected product:', this.selectedProduct); // Log the selected product
    }); */
}
  
}
