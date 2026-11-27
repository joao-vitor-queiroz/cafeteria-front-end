import { NextResponse } from 'next/server';
import { parseClient, ParseObjectBase } from '@/lib/parse';
import { Product, ProductCategory } from '@/types';

interface ParseProduct extends ParseObjectBase {
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
 * Consulta a classe Product no Back4App utilizando o Cliente Parse no servidor.
 */
export async function GET() {
  try {
    const results = await parseClient.query<ParseProduct>('Product', {
      order: '-createdAt',
    });

    if (!results || results.length === 0) {
      return NextResponse.json({
        success: true,
        data: DEFAULT_FALLBACK_PRODUCTS,
        isFallback: true,
      });
    }

    const mappedProducts: Product[] = results.map((item) => ({
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
    console.error('[API Products GET Error via parseClient]:', error);

    return NextResponse.json({
      success: true,
      data: DEFAULT_FALLBACK_PRODUCTS,
      isFallback: true,
    });
  }
}

/**
 * POST /api/products
 * Cria um novo produto no Back4App via parseClient.create com sanitização de entrada.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, price, category, imageUrl, preparationTimeMinutes } = body;

    // Validação estrita de entrada
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: 'O nome do produto é obrigatório.' },
        { status: 400 }
      );
    }

    if (typeof price !== 'number' || price <= 0) {
      return NextResponse.json(
        { success: false, message: 'O preço deve ser um valor numérico positivo.' },
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

    const created = await parseClient.create('Product', payload);

    const newProduct: Product = {
      id: created.objectId,
      ...payload,
    };

    return NextResponse.json(
      { success: true, data: newProduct },
      { status: 201 }
    );
  } catch (error) {
    console.error('[API Products POST Error via parseClient]:', error);
    return NextResponse.json(
      { success: false, message: 'Falha ao cadastrar o produto no Back4App.' },
      { status: 500 }
    );
  }
}
