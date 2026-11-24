/**
 * Definições de tipos compartilhados para o sistema da Cafeteria.
 * Segue boas práticas de tipagem estrita e desacoplamento.
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  imageUrl?: string;
  isAvailable: boolean;
  preparationTimeMinutes?: number;
}

export type ProductCategory =
  | 'coffee'
  | 'tea'
  | 'bakery'
  | 'beverages'
  | 'desserts'
  | 'combos';

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string;
  notes?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface ApiError {
  message: string;
  statusCode?: number;
  code?: string;
}
