import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalService } from '../../services/global.service';
import { RealtimeCategoriasService } from '../../services/realtime-categorias.service';
import { RealtimeProductosService } from '../../services/realtime-productos.service';
import { AuthPocketbaseService } from '../../services/auth-pocketbase.service';

@Component({
  selector: 'app-shop',
  imports: [CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  productos: any[] = [];
  categorias: any[] = [];
constructor(
  public global: GlobalService,
  public realtimecategorias: RealtimeCategoriasService,
  public realtimeproductos: RealtimeProductosService,
  public authService: AuthPocketbaseService
) {
  this.realtimecategorias.categorias$.subscribe((categorias) => {
    this.categorias = categorias;
  });
  this.realtimeproductos.productos$.subscribe((productos) => {
    this.productos = productos;
  });
}
}
