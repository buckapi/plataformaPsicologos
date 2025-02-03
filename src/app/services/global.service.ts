import { Injectable } from '@angular/core';

interface Producto {
  id: number;
  name: string;
  description: string;
  price: number;
  files  : string[];
  category: string;
}
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  activeRoute = 'home';
  previaProducto= { } as Producto;
  categorias: any[] = [];
  productos: any[] = [];
  totalProductos = 0;
  
  constructor() { }
  setRoute(route: string) {
    this.activeRoute = route;
  }
  getCategorias(): any[] {
    return this.categorias;
  }
  setQuick(product: Producto) {
    this.previaProducto = product;
    console.log("producto",+this.previaProducto);
  }
  getProductos(): any[] {
    return this.productos;
  }
  getProductosCount(): number {
    return this.productos.length;
  }
  getProductDetails(): Producto {
    return this.previaProducto;
  }
}
