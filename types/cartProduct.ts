import type { Product } from './product'

export type CartProduct = Product & { quantity: number }
