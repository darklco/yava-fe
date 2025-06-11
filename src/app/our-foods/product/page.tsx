"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link"; 
import useGlobalCategory from "../../../lib/globalState";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
}

const ProductList = () => {
  const storeIcons = ["blibli", "lazada", "shopee", "tiktokshop", "tokopedia"];

  const products: Product[] = [
    { id: 1, name: 'GO`NOLA Chocolate Vanilla', category: 'Granola', image: '/product/GranolaVanilla.png' },
    { id: 2, name: 'Granola Puffs Chocolate Vanila', category: 'Granola', image: '/product/GranolaPuffts.png' },
    { id: 3, name: 'Granola Chocolate Vanilla', category: 'Granola', image: '/product/GranolaChocolate.png' },
    { id: 4, name: 'Granola Chocolate Banana', category: 'Granola', image: '/product/GranolaCocolateBanana.png' },
    { id: 5, name: 'Granola Coconut Banana', category: 'Granola', image: '/product/GranolaCoconutBanana.png' },
    { id: 6, name: 'Granola Rosella Cinnamon', category: 'Granola', image: '/product/GranolaRosella.png' },
    { id: 7, name: 'Granola Tropical Fruits', category: 'Granola', image: '/product/GranolaTropicalFruits.png' },
    { id: 8, name: 'Granola Chocolate Banana', category: 'Granola', image: '/product/GranolaPuffsChocolateVanila.png' },
    { id: 9, name: 'Popcorn Sea Salt Caramel', category: 'Popcorn', image: '/product/PopcornSeaSaltCaramel.png' },
    { id: 10, name: 'Popcorn Chocolate Peanut', category: 'Popcorn', image: '/product/PopcornChocolatePeanut.png' },
    { id: 11, name: 'Popcorn Cheeze Flavor', category: 'Popcorn', image: '/product/PopcornCheezeFlavor.png' },
    { id: 12, name: 'Krispi Puffs Caocao', category: 'Puffs', image: '/product/KrispiPuffsCaocao.png' },
    { id: 13, name: 'Krispi Sweet Cashews', category: 'Puffs', image: '/product/KrispiSweetCashews.png' },
    { id: 14, name: 'Krispi Sweet & Spicy Balado', category: 'Puffs', image: '/product/KrispiSweet&SpicyBalado.png' },
    { id: 15, name: 'Wild Harvested Cashews Caocao Cashews', category: 'Cashews', image: '/product/CaocaoCashews.png' },
    { id: 16, name: 'Wild Harvested Cashews Chlili Limes', category: 'Cashews', image: '/product/ChliliLimes.png' },
    { id: 17, name: 'Wild Harvested Cashews Roasted', category: 'Cashews', image: '/product/Roasted.png' },
    { id: 18, name: 'Wild Harvested Cashews Raw', category: 'Cashews', image: '/product/Raw.png' },
    { id: 19, name: 'Wild Harvested Cashews Roasted Pieces', category: 'Cashews', image: '/product/RoastedPieces.png' },
    { id: 20, name: 'Wild Harvested Cashews Sweet & Spicy', category: 'Cashews', image: '/product/Sweet&Spicy.png' },
  ];

  const [activeCategory] = useGlobalCategory();

  const renderProductCard = (product: Product) => {
    return (
      <Link href={`/our-foods/product-detail/${product.id}`} key={product.id}>
        <div className="group relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex flex-col cursor-pointer" style={{ width: "100%", maxWidth: "200px", minHeight: "280px" }}>
          {/* Gambar Produk - Tinggi disesuaikan untuk mobile */}
          <div className="relative w-full h-32 sm:h-40 md:h-44 lg:h-56 overflow-hidden rounded-t-lg z-10">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute bottom-0 w-full h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
          </div>

          {/* Nama Produk */}
          <div className="relative z-20 p-3 text-center flex-grow flex items-center justify-center">
            <p
              className="text-[#333333] group-hover:text-white transition-colors duration-300 font-medium text-base text-center"
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "1.4",
              }}
            >
              {product.name}
            </p>
          </div>
        </div>
      </Link>
    );
  };

  const groupedProducts = () => {
    const groups: Record<string, Product[]> = {};
    products.forEach((product) => {
      if (!groups[product.category]) groups[product.category] = [];
      groups[product.category].push(product);
    });
    return groups;
  };

  const renderAllProductsByCategory = () => {
    const groups = groupedProducts();
    return Object.entries(groups).map(([category, productList]) => (
      <React.Fragment key={category}>
        <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-[#333333] capitalize">
          {category}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {productList.map(renderProductCard)}
        </div>
      </React.Fragment>
    ));
  };

  const filteredProducts = activeCategory === "All Products"
    ? renderAllProductsByCategory()
    : products
        .filter((product) => product.category === activeCategory)
        .map(renderProductCard);

  return (
    <section className="bg-white min-h-screen flex flex-col justify-between">
      <div className="container mx-auto px-4 py-8">
        {/* Judul Kategori */}
        {activeCategory === "All Products" ? (
          <>
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-[#333333] capitalize">
              All Products
            </h2>
            {filteredProducts}
          </>
        ) : (
          <>
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-[#333333] capitalize">
              {activeCategory}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
              {filteredProducts}
            </div>
          </>
        )}
      </div>

      {/* Footer Toko */}
      <footer className="bg-white p-6 text-center mt-auto">
        <h2
          style={{
            fontFamily: "'WildWords', cursive",
            fontSize: "2.25rem",
            marginBottom: "2rem",
            fontWeight: "bold",
          }}
        >
          <span style={{ color: "#4B1A1B" }} className="block">
            AVAILABLE
          </span>
          <span
            style={{
              backgroundImage: "linear-gradient(90deg, #FE8301, #FEB519, #F31212)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "block",
            }}
          >
            IN YOUR FAVORITE STORE
          </span>
        </h2>
        <div className="flex justify-center gap-6 flex-wrap">
          {storeIcons.map((icon) => (
            <a
              key={icon}
              href={`https://${icon}.com`} 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={`/images/${icon}.png`} alt={icon} width={50} height={50} />
            </a>
          ))}
        </div>
      </footer>
    </section>
  );
};

export default ProductList;