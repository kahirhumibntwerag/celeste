import React, { forwardRef } from "react";
import { cn } from "../Test/cn";

// Basic UI components with forwardRef
const CartPanel = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    {...props}
    className={cn("border-2 border-black w-[350px] h-[600px] flex flex-col m-0 p-0", className)}
  />
));
CartPanel.displayName = "CartPanel";

const CartHeader = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    {...props}
    className={cn("border-b-2 border-black m-0 p-0", className)}
  />
));
CartHeader.displayName = "CartHeader";

const CartItems = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    {...props}
    className={cn("flex-1 overflow-y-auto m-0 p-0", className)}
  />
));
CartItems.displayName = "CartItems";

const CartItem = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    {...props}
    className={cn("flex items-center gap-4 m-0 p-0", className)}
  />
));
CartItem.displayName = "CartItem";

const CartFooter = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    {...props}
    className={cn("border-t-2 border-black m-0 p-0", className)}
  />
));
CartFooter.displayName = "CartFooter";

const CheckoutButton = forwardRef(({ className, ...props }, ref) => (
  <button
    ref={ref}
    {...props}
    className={cn("w-full bg-black text-white py-2 px-4 rounded hover:bg-black cursor-pointer transition-all duration-300", className)}
  />
));
CheckoutButton.displayName = "CheckoutButton";

const CounterButton = forwardRef(({ className, ...props }, ref) => (
  <button 
    ref={ref}
    {...props}
    className={cn(
      "w-6 h-6 flex items-center justify-center border border-black m-0 p-0",
      className
    )}
  />
));
CounterButton.displayName = "CounterButton";

const CounterDisplay = forwardRef(({ className, ...props }, ref) => (
  <span
    ref={ref}
    {...props}
    className={cn("w-8 text-center m-0 p-0", className)}
  />
));
CounterDisplay.displayName = "CounterDisplay";

const CounterWrapper = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    {...props}
    className={cn("flex items-center gap-2 m-0 p-0", className)}
  />
));
CounterWrapper.displayName = "CounterWrapper";

// Composed ShoppingCart component
const ShoppingCart = ({ items, onCheckout }) => {
  return (
    <CartPanel>
      <CartHeader>
        <h2 className="text-xl font-bold">Shopping Cart</h2>
      </CartHeader>
      
      <CartItems>
        {items.map((item) => (
          <CartItem key={item.id}>
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-20 h-20 object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.price}</p>
            </div>
          </CartItem>
        ))}
      </CartItems>

      <CartFooter>
        <CheckoutButton onClick={onCheckout}>
          Proceed to Checkout
        </CheckoutButton>
      </CartFooter>
    </CartPanel>
  );
};

// Export all components
export {
  CartPanel,
  CartHeader,
  CartItems,
  CartItem,
  CartFooter,
  CheckoutButton,
  ShoppingCart,
  CounterButton,
  CounterDisplay,
  CounterWrapper,
}; 