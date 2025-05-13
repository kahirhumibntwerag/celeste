import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import { ProductContext } from "./contexts/context";
import ScrollToTop from "./components/ScrollTop";
import {
  StateContent,
  StateMachine,
  StateTrigger,
  useStateMachineContext,
} from "./components/Muti";
import { AnimatePresence, motion } from "motion/react";
import {
  CartPanel,
  CartHeader,
  CartItems,
  CartItem,
  CartFooter,
  CheckoutButton,
} from "./features/Cart/Cart";
import { CounterWrapper, CounterButton, CounterDisplay } from "./features/Cart/Cart";
import useCartStore from './store/cartStore'

const Navbar = lazy(() => import("./features/Navbar/Navbar"));
const Promobar = lazy(() => import("./features/Promobar/Promobar"));
const sidebarVariants = {
  open: {
    right: 0,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  closed: {
    right: "-100%",
    transition: {
      duration: 0.3,
      when: "afterChildren",
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
};

const mockItems = [
  {
    id: 1,
    title: "Classic White Sneakers",
    price: "$89.99",
    color: "Black",
    size: "M",
    image: "//mlameh.com/cdn/shop/files/S5450-S5469_2_5cd4839f-085e-4a04-a618-41bf4ba24d4f.jpg?v=1743931469&width=1500"
  },
  {
    id: 2,
    title: "Denim Jacket",
    price: "$129.99",
    color: "Blue",
    size: "M",
    image: "//mlameh.com/cdn/shop/files/S5450-S5469_2_5cd4839f-085e-4a04-a618-41bf4ba24d4f.jpg?v=1743931469&width=1500"
  },
  {
    id: 3,
    title: "Leather Backpack",
    price: "$159.99",
    color: "Blue",
    size: "M",
    image: "//mlameh.com/cdn/shop/files/S5450-S5469_2_5cd4839f-085e-4a04-a618-41bf4ba24d4f.jpg?v=1743931469&width=1500"
  },
  {
    id: 3,
    title: "Leather Backpack",
    price: "$159.99",
    color: "Blue",
    size: "M",
    image: "//mlameh.com/cdn/shop/files/S5450-S5469_2_5cd4839f-085e-4a04-a618-41bf4ba24d4f.jpg?v=1743931469&width=1500"
  },
  {
    id: 3,
    title: "Leather Backpack",
    price: "$159.99",
    color: "Blue",
    size: "M",
    image: "//mlameh.com/cdn/shop/files/S5450-S5469_2_5cd4839f-085e-4a04-a618-41bf4ba24d4f.jpg?v=1743931469&width=1500"
  },
  {
    id: 3,
    title: "Leather Backpack",
    price: "$159.99",
    color: "Blue",
    size: "M",
    image: "//mlameh.com/cdn/shop/files/S5450-S5469_2_5cd4839f-085e-4a04-a618-41bf4ba24d4f.jpg?v=1743931469&width=1500"
  },
  {
    id: 3,
    title: "Leather Backpack",
    price: "$159.99",
    color: "Blue",
    size: "M",
    image: "//mlameh.com/cdn/shop/files/S5450-S5469_2_5cd4839f-085e-4a04-a618-41bf4ba24d4f.jpg?v=1743931469&width=1500"
  }
];

function AppContent() {
  const { state } = useStateMachineContext();
  console.log(state);
  return (
    <ProductContext.Provider value={{}}>
      <StateContent when="cart" forceMount asChild>
        <AnimatePresence>
          {state === "cart" && (
            <>
              <StateTrigger to='idle' asChild>
                <motion.div
                  key="overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black z-[999]"

                />
              </StateTrigger>
              <motion.div
                key="cart"
                layoutRoot
                layout
                variants={sidebarVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="bg-white w-full sm:w-[50%] fixed z-[1000] top-0 right-0 h-[100vh] overflow-hidden"
              >
                <StateTrigger to="idle" asChild>
                  <div className="flex justify-end p-4 cursor-pointer">
                    {" "}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 17.0757L17.0001 1.07563"
                        stroke="currentColor"
                      />
                      <path
                        d="M1 0.995361L17.0001 16.9954"
                        stroke="currentColor"
                      />
                    </svg>
                  </div>
                </StateTrigger>
                <CartPanel className="w-full h-full pb-24 px-12 border-0 ">
                  <CartHeader className="border-b border-gray-200 pb-8 mb-2">
                    <h2 className="text-4xl font-bold">Your Cart</h2>
                  </CartHeader>

                  <CartItems className="pt-2 flex flex-col gap-8 py-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {useCartStore((state) => state.items).map((item) => (
                      <CartItem key={item.id} className="flex justify-between gap-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-25 h-25 object-contain"
                        />
                        <div className="flex-1 flex justify-between items-center">
                          <div>
                            <h3 className="font-semibold">{item.title}</h3>
                            <h3>Color: {item.color}</h3>
                            <h3>Size: {item.size}</h3>
                            <CounterWrapper className="flex items-center gap-0 border border-gray-300 inline-flex">
                              <CounterButton 
                                className="w-6 h-6 text-lg flex items-center justify-center border-0 text-gray-500 cursor-pointer"
                                onClick={() => useCartStore.getState().updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                              >
                                -
                              </CounterButton>
                              <CounterDisplay className="w-6 h-6 text-lg flex items-center justify-center border-0">
                                {item.quantity}
                              </CounterDisplay>
                              <CounterButton 
                                className="w-6 h-6 text-lg flex items-center justify-center border-0 cursor-pointer"
                                onClick={() => useCartStore.getState().updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                              >
                                +
                              </CounterButton>
                            </CounterWrapper>
                            <div>
                              <button 
                                className="text-gray-500 underline hover:text-black transition-all duration-300 cursor-pointer"
                                onClick={() => useCartStore.getState().removeItem(item.id, item.size, item.color)}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                          <p className="">${item.price}</p>
                        </div>
                      </CartItem>
                    ))}
                  </CartItems>

                  <CartFooter className="border-t border-gray-200 mt-2">
                    <h2 className="text-lg font-bold py-2">
                      Subtotal: ${useCartStore((state) => state.getTotalPrice()).toFixed(2)}
                    </h2>
                    <p className="text-sm text-gray-500 py-2">Shipping and taxes calculated at checkout</p>
                    <CheckoutButton className="bg-[#7d7d7d] text-white text-2xl w-full rounded-full mt-4" onClick={() => console.log("Checkout clicked")}>
                      Checkout
                    </CheckoutButton>
                  </CartFooter>
                </CartPanel>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </StateContent>
      <ScrollToTop />
      <Suspense fallback={<div className="h-[60px]" />}>
        <Promobar />
        <Navbar />
      </Suspense>

      <Suspense fallback={<div className="min-h-[60vh]" />}>
        <Outlet />
      </Suspense>
    </ProductContext.Provider>
  );
}

function App() {
  return (
    <StateMachine defaultValue="idle" asChild>
      <AppContent />
    </StateMachine>
  );
}

export default App;
