import { Component, AfterViewInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [CommonModule],
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
constructor(
  public global: GlobalService
) {}

}
