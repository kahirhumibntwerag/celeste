import { create } from "zustand";

export const useImageColorStore = create((set, get) => ({
  selectedColor: 'BLACK',
  setSelectedColor: (color) => set(() => ({ selectedColor: color })),
  isColorSelected: (color) => get().selectedColor === color,
  hasSizeInStock: (product, size) => {
    const color = product.colors.find((color) => color.name === get().selectedColor);
    if (!color) return false;
    return color.sizes.some(
      (sizeItem) => sizeItem.size === size && sizeItem.stock > 0
    );
  },
}));

export const useImageSizeStore = create((set, get) => ({
  selectedSize: "L",
  setSelectedSize: (size) => set((state) => ({ selectedSize: size })),
  isSizeSelected: (size) => get().selectedSize === size,
  hasColorInStock: (product, colorCode) => {
    const color = product.colors.find((color) => color.name === colorCode);
    if (!color) return false;
    return color.sizes.some(
      (size) => size.size === get().selectedSize && size.stock > 0
    );
  },
}));

export const useProductStore = create((set, get) => ({
  product: {
    id: "product_001",
    title: "Classic T-Shirt",
    price: 29.99,
    description:
      "Wide scuba dress\nCode: S5563\nMaterial: Scuba\nLength: Long\nCare Instructions: Machine wash at max. 30ºC/86ºF with short spin cycle, Do not use bleach, Iron at a maximum of 110ºC/230ºF, Do not dry clean, Do not tumble dry",
    colors: [
      {
        name: "#000000",
        mainImage:
          "https://mlameh.com/cdn/shop/collections/S5570-S5570-1_2_ac4bf876-6b0c-4890-8ed3-fb437f50ce87.jpg?v=1742164284&width=1100",
        hoverImage:
          "https://mlameh.com/cdn/shop/collections/B094-S5528-S5543_8.jpg?v=1742164210&width=1100",
        sizes: [
          { size: "S", stock: 0 },
          { size: "M", stock: 15 },
          { size: "L", stock: 20 },
          { size: "XL", stock: 8 },
        ],
      },
      {
        name: "#FFFFFF",
        mainImage:
          "https://mlameh.com/cdn/shop/collections/B094-S5528-S5543_2.jpg?v=1742164115&width=1100",
        hoverImage:
          "https://mlameh.com/cdn/shop/collections/S5570-S5570-1_2_ac4bf876-6b0c-4890-8ed3-fb437f50ce87.jpg?v=1742164284&width=1100",
        sizes: [
          { size: "S", stock: 15 },
          { size: "M", stock: 0 },
          { size: "L", stock: 10 },
          { size: "XL", stock: 0 },
        ],
      },
      {
        name: "#0000FF",
        mainImage: "https://mlameh.com/cdn/shop/collections/S5402-S5402-1_5.jpg?v=1742164323&width=1100",
        hoverImage: "https://mlameh.com/cdn/shop/collections/B094-S5528-S5543_8.jpg?v=1742164210&width=1100",
        sizes: [
          { size: "S", stock: 0 },
          { size: "M", stock: 7 },
          { size: "L", stock: 0 },
          { size: "XL", stock: 3 }
        ]
      }
    ],
  },

  // Add this new function to get all images
  getAllProductImages: () => {
    const product = get().product;
    const images = product.colors.reduce((allImages, color) => {
      // Add both mainImage and hoverImage if they exist
      if (color.mainImage) allImages.push(color.mainImage);
      if (color.hoverImage) allImages.push(color.hoverImage);
      return allImages;
    }, []);
    
    // Remove any duplicates
    return [...new Set(images)];
  },

  // Get the current product
  getProduct: () => get().product,

  // Set the current product
  setProduct: (product) => set({ product }),
}));

export const useCartStore = create((set, get) => ({
  items: [],
  
  addToCart: (product, color, size, quantity = 1) => set((state) => {
    // First check if the requested size/color combination has enough stock
    const colorVariant = product.colors.find(c => c.name === color);
    const sizeVariant = colorVariant?.sizes.find(s => s.size === size);
    
    if (!colorVariant || !sizeVariant || sizeVariant.stock === 0) {
      console.warn('Product is out of stock');
      return state; // Return unchanged state if out of stock
    }

    const existingItem = state.items.find(
      item => item.productId === product.id && 
             item.color === color && 
             item.size === size
    );

    // Check if adding quantity would exceed available stock
    if (existingItem) {
      const newQuantity = existingItem.quantity + quantity;
      if (newQuantity > sizeVariant.stock) {
        console.warn('Not enough stock available');
        return state;
      }
      return {
        items: state.items.map(item =>
          item === existingItem
            ? { ...item, quantity: newQuantity }
            : item
        )
      };
    }

    // Check if initial quantity is available
    if (quantity > sizeVariant.stock) {
      console.warn('Not enough stock available');
      return state;
    }

    return {
      items: [...state.items, {
        productId: product.id,
        title: product.title,
        price: product.price,
        color,
        size,
        quantity,
        image: colorVariant.mainImage
      }]
    };
  }),

  removeFromCart: (productId, color, size) => set((state) => ({
    items: state.items.filter(
      item => !(item.productId === productId && 
                item.color === color && 
                item.size === size)
    )
  })),

  updateQuantity: (productId, color, size, quantity) => set((state) => ({
    items: state.items.map(item =>
      item.productId === productId && 
      item.color === color && 
      item.size === size
        ? { ...item, quantity }
        : item
    )
  })),

  clearCart: () => set({ items: [] }),

  getCartTotal: () => {
    const items = get().items;
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  getCartItemsCount: () => {
    const items = get().items;
    return items.reduce((count, item) => count + item.quantity, 0);
  }
}));

export const useAvailableQuantityStore = create((set, get) => ({
  getAvailableQuantity: (product) => {
    const selectedColor = useImageColorStore.getState().selectedColor;
    const selectedSize = useImageSizeStore.getState().selectedSize;

    const colorVariant = product.colors.find(c => c.name === selectedColor);
    const sizeVariant = colorVariant?.sizes.find(s => s.size === selectedSize);

    return sizeVariant?.stock || 0;
  }
}));

export const useQuantityStore = create((set, get) => ({
  selectedQuantity: 1,
  setSelectedQuantity: (quantity) => set(() => ({ selectedQuantity: quantity })),
  isQuantitySelected: (quantity) => get().selectedQuantity === quantity,
  getMaxQuantity: (product) => {
    const selectedColor = useImageColorStore.getState().selectedColor;
    const selectedSize = useImageSizeStore.getState().selectedSize;

    const colorVariant = product.colors.find(c => c.name === selectedColor);
    const sizeVariant = colorVariant?.sizes.find(s => s.size === selectedSize);

    return sizeVariant?.stock || 0;
  }
}));
