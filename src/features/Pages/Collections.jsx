import React, { useEffect, useState, useRef, Suspense } from "react";
import FilterDropdown from "../FilterDropdown/FilterDropdown";
import useClickOutside from "../../hooks/useClickOutside";
import Availability from "../Filters/Availability";
import Product from "../Product/Product";
import FilterSidbar from "../Filters/FilterSidbar";
import Price from "../Filters/Price";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../Filters/hooks/getProductsByCategory.js";
import Sidbar from "../../components/Sidbar.jsx";
import Footer from "../Footer/Footer.jsx";

// Skeleton components
const ProductCardSkeleton = () => (
  <div className="w-full p-2 flex flex-col gap-3 animate-pulse">
    <div className="w-full aspect-[3/5] bg-gray-200 rounded-lg" />
    <div className="flex flex-col gap-3">
      <div className="h-6 w-3/4 bg-gray-200 rounded" />
      <div className="h-5 w-1/4 bg-gray-200 rounded" />
      <div className="flex gap-1">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-4 h-4 bg-gray-200 rounded-full" />
        ))}
      </div>
    </div>
  </div>
);

const FiltersSkeleton = () => (
  <div className="w-64 flex-col gap-4 hidden lg:flex flex-shrink-0 animate-pulse">
    <div className="h-40 bg-gray-200 rounded-lg mb-4" />
    <div className="h-40 bg-gray-200 rounded-lg" />
  </div>
);

const TopBarSkeleton = () => (
  <div className="w-[95%] mx-auto border-b-2 border-gray-300 p-2 animate-pulse">
    <div className="flex justify-between items-center">
      <div className="h-6 w-24 bg-gray-200 rounded" />
      <div className="h-6 w-32 bg-gray-200 rounded" />
    </div>
    <div className="h-10 w-full bg-gray-200 rounded-4xl mt-4 block lg:hidden" />
  </div>
);

const ProductGridSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <ProductCardSkeleton key={i} />
    ))}
  </div>
);

const Collections = () => {
  const params = useParams();
  const [showList, setShowList] = useState(false);
  const [showFilter, setShowFilter] = useState('hidden');
  const [products, setProducts] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const dropdownRef = useRef(null);
  const PAGE_SIZE = 20;

  useClickOutside(dropdownRef, () => setShowList(false));

  // Reset page index when category changes
  useEffect(() => {
    setPageIndex(0);
  }, [params.category]);

  const queryData = getProductsByCategory(
    pageIndex,
    PAGE_SIZE,
    params.category
  );

  const { data, isLoading, isError, error } = useQuery({
    queryKey: queryData.queryKey,
    queryFn: queryData.queryFn,
    staleTime: 1000 * 60 * 5,
  });

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pageIndex]);

  // Update products state when data is loaded
  useEffect(() => {
    if (data?.products) {
      setProducts(data.products);
    }
  }, [data]);

  const totalPages = data ? Math.ceil(data.total / PAGE_SIZE) : 1;

  if (isLoading) {
    return (
      <div className="w-full pt-32 md:pt-16">
        <TopBarSkeleton />
        <div className="w-[95%] mx-auto p-2">
          <div className="flex gap-8">
            <FiltersSkeleton />
            <div className="flex-grow">
              <ProductGridSkeleton />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isError) return <p>Error: {error.message}</p>;

  return (
    <>
    <div className="w-full pt-32 md:pt-16 min-h-[]">
      {/* Overlay for mobile filter */}
      <Sidbar showFilter={showFilter} setShowFilter={setShowFilter} >
        <Availability className="w-full" />
        <Price className="w-full" />
        <button className="bg-[#7d7d7d] border-1 border-black mt-4 w-full text-white px-4 py-2 rounded-4xl cursor-pointer">
          Apply Filters
        </button>
      </Sidbar>

      {/* Top filter row */}
      <div
        ref={dropdownRef}
        className="w-[95%] mx-auto border-b-2 border-gray-300 p-2"
      >
        <div className="flex justify-between items-center">
          <div>{data?.total ?? 0} products</div>
          <FilterDropdown showList={showList} setShowList={setShowList} />
        </div>
        <button
          onClick={() => setShowFilter(true)}
          className="bg-white border-1 border-black mt-4 w-full text-black px-4 py-2 rounded-4xl block lg:hidden cursor-pointer"
        >
          Filter
        </button>
      </div>

      {/* Main layout */}
      <div className="w-[95%] mx-auto p-2">
        <div className="flex gap-8">
          {/* Sidebar filters */}
          <div className="w-64 flex-col gap-4 hidden lg:flex flex-shrink-0">
            <Availability />
            <Price />
          </div>

          {/* Product grid */}
          <div className="flex-grow">
            {products && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
                {products.map((product) => (
                  <Product
                    key={product.id}
                    product={product}
                    showColorSwatches={true}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => setPageIndex((prev) => Math.max(prev - 1, 0))}
          disabled={pageIndex === 0}
          className="px-4 py-2 bg-transparent rounded disabled:opacity-50 cursor-pointer"
        >
          {"<< Previous"}
        </button>
        <span className="px-4 py-2 font-semibold">{pageIndex + 1}</span>
        <button
          onClick={() => setPageIndex((prev) => prev + 1)}
          disabled={pageIndex + 1 >= totalPages}
          className="px-4 py-2 bg-transparent rounded disabled:opacity-50 cursor-pointer"
        >
          {"Next >>"}
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Collections;
