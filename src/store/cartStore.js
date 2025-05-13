import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      
// ... existing code ...
addItem: (item) => set((state) => {
    const existingItem = state.items.find((i) => i.id === item.id && 
    i.size === item.size && 
    i.color === item.color)
    
    if (existingItem) {
      return {
        items: state.items.map((i) =>
          i.id === item.id && 
          i.size === item.size && 
          i.color === item.color
            ? { ...i, quantity: i.quantity + item.quantity } // Add the selected quantity
            : i
        ),
      }
    }
    
    return {
      items: [...state.items, { ...item }], // Use the item's quantity directly
    }
  }),

      removeItem: (itemId, itemSize, itemColor) => set((state) => ({
        items: state.items.filter((item) => 
          !(item.id === itemId && item.size === itemSize && item.color === itemColor)
        ),
      })),

      updateQuantity: (itemId, itemSize, itemColor, quantity) => set((state) => ({
        items: state.items.map((item) =>
          item.id === itemId && 
          item.size === itemSize && 
          item.color === itemColor
            ? { ...item, quantity: Math.max(0, quantity) }
            : item
        ),
      })),

      clearCart: () => set({ items: [] }),

      getTotalItems: () => {
        const state = get()
        return state.items.reduce((total, item) => total + item.quantity, 0)
      },

      getTotalPrice: () => {
        const state = get()
        return state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
      },
    }),
    {
      name: 'cart-storage', // unique name for localStorage
    }
  )
)

export default useCartStore
