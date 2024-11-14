// productos.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [RouterModule], // Importa RouterModule aquí
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent {
  products = [
    { imagen: 'https://via.placeholder.com/50', titulo: 'Producto 1' },
    { imagen: 'https://via.placeholder.com/50', titulo: 'Producto 2' }
  ];

  editProduct(product: any) {
    console.log('Editar producto:', product);
  }

  deleteProduct(product: any) {
    console.log('Eliminar producto:', product);
  }
}
