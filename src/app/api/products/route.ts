import { NextResponse } from 'next/server';
import { back4appFetch, Back4AppQueryResponse } from '@/lib/back4app';
import { Product, ProductCategory } from '@/types';

interface ParseProduct {
  objectId: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  imageUrl?: string;
  isAvailable?: boolean;
  preparationTimeMinutes?: number;
}

const DEFAULT_FALLBACK_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Espresso Tradicional',
    description: 'Café espresso puro, encorpado e com crema aveludada.',
    price: 7.5,
    category: 'coffee',
    isAvailable: true,
    preparationTimeMinutes: 5,
  },
  {
    id: 'prod-2',
    name: 'Cappuccino Italiano',
    description: 'Espresso com leite vaporizado e uma camada generosa de espuma.',
    price: 12.0,
    category: 'coffee',
    isAvailable: true,
    preparationTimeMinutes: 7,
  },
  {
    id: 'prod-3',
    name: 'Croissant Francês de Manteiga',
    description: 'Massa folhada artesanal, crocante por fora e macia por dentro.',
    price: 14.0,
    category: 'bakery',
    isAvailable: true,
    preparationTimeMinutes: 3,
  },
  {
    id: 'prod-4',
    name: 'Chá Verde com Hortelã',
    description: 'Chá verde premium com folhas frescas de hortelã orgânica.',
    price: 9.0,
    category: 'tea',
    isAvailable: true,
    preparationTimeMinutes: 5,
  },
  {
    id: 'prod-5',
    name: 'Torta de Limão Siciliano',
    description: 'Base crocante com creme de limão e merengue tostado.',
    price: 16.5,
    category: 'desserts',
    isAvailable: true,
    preparationTimeMinutes: 2,
  },
];

/**
 * GET /api/products
 * Busca os produtos no Back4App de forma segura no servidor.
 */
export async function GET() {
  try {
    const data = await back4appFetch<Back4AppQueryResponse<ParseProduct>>(
      '/classes/Product'
    );

    // Se o banco ainda não possuir itens cadastrados, retorna os produtos de demonstração
    if (!data.results || data.results.length === 0) {
      return NextResponse.json({
        success: true,
        data: DEFAULT_FALLBACK_PRODUCTS,
        isFallback: true,
      });
    }

    const mappedProducts: Product[] = data.results.map((item) => ({
      id: item.objectId,
      name: item.name,
      description: item.description,
      price: item.price,
      category: item.category,
      imageUrl: item.imageUrl,
      isAvailable: item.isAvailable ?? true,
      preparationTimeMinutes: item.preparationTimeMinutes,
    }));

    return NextResponse.json({
      success: true,
      data: mappedProducts,
      isFallback: false,
    });
  } catch (error) {
    console.error('[API Products Error]:', error);

    // Fallback defensivo para alta disponibilidade e continuidade da aplicação
    return NextResponse.json({
      success: true,
      data: DEFAULT_FALLBACK_PRODUCTS,
      isFallback: true,
    });
  }
}

/**
 * POST /api/products
 * Cadastra um novo produto no Back4App com validação segura de entrada.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, price, category, imageUrl, preparationTimeMinutes } = body;

    // Validação estrita de entrada (Input Validation)
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: 'O nome do produto é obrigatório.' },
        { status: 400 }
      );
    }

    if (typeof price !== 'number' || price <= 0) {
      return NextResponse.json(
        { success: false, message: 'O preço deve ser um número positivo.' },
        { status: 400 }
      );
    }

    const validCategories: ProductCategory[] = [
      'coffee',
      'tea',
      'bakery',
      'beverages',
      'desserts',
      'combos',
    ];

    if (!validCategories.includes(category)) {
      return NextResponse.json(
        { success: false, message: 'Categoria de produto inválida.' },
        { status: 400 }
      );
    }

    const payload = {
      name: name.trim(),
      description: typeof description === 'string' ? description.trim() : '',
      price,
      category,
      imageUrl: typeof imageUrl === 'string' ? imageUrl.trim() : undefined,
      isAvailable: true,
      preparationTimeMinutes:
        typeof preparationTimeMinutes === 'number'
          ? preparationTimeMinutes
          : undefined,
    };

    const created = await back4appFetch<{ objectId: string; createdAt: string }>(
      '/classes/Product',
      {
        method: 'POST',
        body: JSON.stringify(payload),
      }
    );

    const newProduct: Product = {
      id: created.objectId,
      ...payload,
    };

    return NextResponse.json(
      { success: true, data: newProduct },
      { status: 201 }
    );
  } catch (error) {
    console.error('[API Products POST Error]:', error);
    return NextResponse.json(
      { success: false, message: 'Falha ao cadastrar produto.' },
      { status: 500 }
    );
  }
}
