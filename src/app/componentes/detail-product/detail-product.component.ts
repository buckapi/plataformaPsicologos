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

constructor(
  public global: GlobalService,
  public carService: CarService
) {}
/* addToCart() {
  this.carService.addProduct(this.product, this.quantity);
} */
  addToCart() {
    this.carService.addProduct(this.product, this.quantity);
    this.quantity = 1;
    
    Swal.fire({
      icon: 'success',
      title: 'Producto agregado al carrito',
      text: `¡El producto ${this.product.name} ha sido agregado al carrito!`,
      showConfirmButton: true,
      timer: 2000 
    });
  }
  /* addToCart() {
    // Agregar el producto al carrito
    this.carService.addProduct(this.product, this.quantity);
  
    // Reiniciar la cantidad
    this.quantity = 1;
  
    // Mostrar un mensaje usando el alert estándar del navegador
    alert(`¡El producto ${this.product.name} ha sido agregado al carrito!`);
  } */
  
}
