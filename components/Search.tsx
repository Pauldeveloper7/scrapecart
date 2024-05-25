'use client'

import { useState, ChangeEvent, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/types';

interface Props {
  product: Product[];
}

const Search: React.FC<Props> = ({ product }) => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(null);
  const [searchedResults, setSearchedResults] = useState<Product[]>([]);

  useEffect(() => {
    setAllProducts(product);
  }, [product]);

  const filterProducts = (searchText: string): Product[] => {
    const regex = new RegExp(searchText, "i"); // 'i' flag for case-insensitive search
    return product.filter(
      (item) =>
        regex.test(item.title)
    );
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (searchTimeout) clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterProducts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  return (
    <div className='flex flex-col gap-x-8 gap-y-16 min-w-80 ' >
      <form className="flex flex-wrap gap-4 mt-12">
        <input
          type="text"
          value={searchText}
          onChange={handleSearchChange}
          placeholder="Enter product name and price"
          className="searchbar-input"
          id="search-input-bar"
        />

        <button type="button" className="searchbar-btn">
          Search
        </button>
      </form>
<div className=' flex flex-wrap gap-x-8 gap-y-16 '>

      {searchText ? (
        searchedResults.map((item) => (
          <ProductCard
          product={item}
          key={item._id}
          />
        ))
      ) : (
        allProducts.map((item) => (
          <ProductCard
          product={item}
          key={item._id}
          />
        ))
      )}
</div>
    </div>
  );
};

export default Search;
