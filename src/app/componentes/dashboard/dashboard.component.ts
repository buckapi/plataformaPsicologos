import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Combine Angular forms imports
import { FormBuilder, FormGroup } from '@angular/forms';
import { GlobalService } from '../../services/global.service';
import { AuthPocketbaseService } from '../../services/auth-pocketbase.service';
import { RealtimeProductosService } from '../../services/realtime-productos.service';
import { RealtimeCategoriasService } from '../../services/realtime-categorias.service';
import { ProductsService } from '../../services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] // Corrected from styleUrl to styleUrls
})
export class DashboardComponent {
  product = {
    name: '',
    price: 0, // Change to string
    categorias: '', // Include categorias
    description: '', // Include description
    files: [] , // Include files as an array
    quantity: 0
  };

  totalProductos: number = 0;
  productos: any[] = [];
  userName: string = '';
  showCategories: boolean = false;
  showProducts: boolean = false;
  addProductForm: FormGroup;

  constructor(
    public global: GlobalService,
    public authService: AuthPocketbaseService,
    public realtimeProductosService: RealtimeProductosService,
    public realtimecategorias: RealtimeCategoriasService,
    public productsService: ProductsService,
    public fb: FormBuilder
  ) {
    this.addProductForm = this.fb.group({
      name: [''],
      price: [''],
      stock: [''],
      category: [''],
      description: [''],
      files: [''],
      quantity: ['']
    });
  }

  /* onSubmit() {
    this.productsService.addProduct(this.product).then(response => {
      console.log('Product added:', response);
      this.product = { 
        name: '', 
        price: 0, 
        categorias: '', 
        description: '', 
        files: [],
        quantity: 0
      }; // Reset the product object with all required properties
      this.productos = this.global.getProductos(); // Refresh the product list
    }).catch(error => {
      console.error('Error adding product:', error);
    });
  } */
    onSubmit() {
      this.productsService.addProduct(this.product).then(response => {
        console.log('Product added:', response);
        
        // Show SweetAlert for successful product addition
        Swal.fire({
          title: 'Éxito!',
          text: 'Producto guardado con éxito!',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
    
        // Reset the product object with all required properties
        this.product = { 
          name: '', 
          price: 0, 
          categorias: '', 
          description: '', 
          files: [],
          quantity: 0
        }; 
    
        // Refresh the product list
        this.productos = this.global.getProductos(); 
      }).catch(error => {
        console.error('Error adding product:', error);
        // Show SweetAlert for error
        Swal.fire({
          title: 'Error!',
          text: 'Error al guardar el producto.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      });
    }
  ngOnInit(): void {
    this.productos = this.global.getProductos(); // Obtén la lista de productos
    this.totalProductos = this.global.getProductosCount(); // Obtén el conteo de productos
  } 

  toggleCategories() {
    this.showCategories = !this.showCategories;
  }

  toggleProducts() {
    this.showProducts = !this.showProducts;
  }
}