import { ProductModel } from './../models/product-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: ProductModel[] = [
    {
      id: "1",
      name: 'Martillo',
      description: 'Martillo galponero con cabo de fibra 225grs',
      image: '../../assets/images/Martillo.png',
      price: 888.00,
      quotas: 2,
      stock: 10,
      idSupplier: "1"
    },
    {
      id: "2",
      name: 'Destornillador Plano',
      description: 'Destornillador Plano Standard Chico 5.5mm x 125mm',
      image: '../../assets/images/Destornillador-Plano.png',
      price: 489.00,
      quotas: 0,
      stock: 20,
      idSupplier: "2"
    },
    {
      id: "3",
      name: 'Destornillador Phillips',
      description: 'Destornillador Phillips x 100mm',
      image: '../../assets/images/Destornillador-Phillips.png',
      price: 450.00,
      quotas: 2,
      stock: 1,
      idSupplier: "3"
    },
    {
      id: "4",
      name: 'Caja 100 Tuercas 3/8"',
      description: 'Tuerca Hexagonal 3/8" Cincada x 100 Unidades',
      image: '../../assets/images/Tuerca-3-8.png',
      price: 560.00,
      quotas: 2,
      stock: 5,
      idSupplier: "4"
    },
    {
      id: "5",
      name: 'Caja 100 Bulones 3/8"',
      description: 'Bulon Hexagonal Hierro Zincado 3/8" x 2 3/4" Rosca Whitworth x 100 Unidades',
      image: '../../assets/images/Bulon-3-8.png',
      price: 1975.00,
      quotas: 3,
      stock: 5,
      idSupplier: "5"
    },
    {
      id: "6",
      name: 'Pinza de Punta',
      description: 'Pinza Alicate De Punta, Media Caña, Corte Electricista 160mm de largo',
      image: '../../assets/images/Pinza-Punta.png',
      price: 2296.00,
      quotas: 4,
      stock: 3,
      idSupplier: "2"
    },
    {
      id: "7",
      name: 'Alicate Corte Oblicuo',
      description: 'Alicate Pro 6 Corte Oblicuo',
      image: '../../assets/images/Alicate-Corte-Oblicuo.png',
      price: 1456.00,
      quotas: 2,
      stock: 18,
      idSupplier: "6"
    },
    {
      id: "8",
      name: 'Pinza Universal Profesional',
      description: 'Pinza Universal Profesional Acero 150mm de largo',
      image: '../../assets/images/Pinza-Universal-Profesional.png',
      price: 1458.00,
      quotas: 2,
      stock: 6,
      idSupplier: "7"
    },
    {
      id: "9",
      name: 'Tenaza',
      description: 'Tenaza Carpintero 7" de acero Mango antideslizante',
      image: '../../assets/images/Tenaza.png',
      price: 1090.50,
      quotas: 2,
      stock: 7,
      idSupplier: "2"
    },
    {
      id: "10",
      name: 'Caja 100 Clavos Punta París',
      description: 'Clavos Punta París 2" x 100 unidades largo 50mm',
      image: '../../assets/images/Clavo-Punta-Paris.png',
      price: 650.00,
      quotas: 0,
      stock: 1,
      idSupplier: "8"
    },
    {
      id: "11",
      name: 'Caja 100 Tornillos Autoperforante para Madera',
      description: 'Tornillo Autoperforante Para Madera Negro x 100 Unidades largo 25mm',
      image: '../../assets/images/Tornillo-Autoperforante.png',
      price: 420.00,
      quotas: 0,
      stock: 2,
      idSupplier: "9"
    },
    {
      id: "12",
      name: 'Caja 100 Tornillos Pasante',
      description: 'Tornillo Pasante Metalico largo 50mm x 100 Unidades',
      image: '../../assets/images/Tornillo-Pasante.png',
      price: 989.90,
      quotas: 3,
      stock: 3,
      idSupplier: "10"
    }
  ];

  constructor() { }

  getProducts(): ProductModel[] {
    return this.products;
  };

  getProduct( idProduct: string ): any {
    return this.products.find( objArticulo => objArticulo.id === idProduct );
  };

  searchProducts( text: string ): ProductModel[] {
    let productsArray: ProductModel[] = [];
    text.toLowerCase();
    productsArray = this.products.filter( ( product ) => product.name.toLowerCase().includes( text ));
    return productsArray;
  };
}
