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
  menuSelected = '';

  previaProducto= { } as Producto;
  categorias: any[] = [];
  productos: any[] = [];
  totalProductos = 0;
  
  constructor() { }
  setRoute(route: string) {
    this.activeRoute = route;
  }
  setProduct(route: string,product  : Producto) {
    this.activeRoute = route;
    this.previaProducto = product;

  }
  setMenuOption(option: string) {
    this.menuSelected = option;
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
