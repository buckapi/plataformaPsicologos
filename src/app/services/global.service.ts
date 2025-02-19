import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; // Add this line

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
  cart: any[] = [];
  cartQuantity = 0;
  cartQuantity$ = new BehaviorSubject<number>(0); 
  cartStatus$ = new BehaviorSubject<boolean>(false);


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
  public updateCartQuantity() {
    const totalItems = this.cart.length; // Cantidad de ítems únicos en el carrito
    this.cartQuantity$.next(totalItems);
  }

  public saveCartToLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
      this.cartStatus$.next(this.cart.length > 0); // Emitir estado inicial
    }
  }

}
