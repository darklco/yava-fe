'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function CombinedSection() {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Wrapper untuk Hero + Footer */}
      <div className="relative">
        {/* Hero Section */}
        <section className="bg-orange-500 text-white px-6 py-12 md:py-0">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between h-full">
              {/* Kolom Kiri: Teks */}
              <div className="w-full md:w-1/2 text-left mb-8 md:mb-0 md:pr-10">
                <h1 className="text-4xl sm:text-5xl font-bold leading-none mb-2">WELCOME</h1>
                <p className="text-4xl sm:text-5xl font-bold leading-none mb-4">TO YAVA</p>
                <div className="text-base sm:text-lg mb-6 space-y-1 max-w-lg">
                  <p>Healthy CAN be delicious.</p>
                  <p>At YAVA, we celebrate food that brings health, joy and freedom.</p>
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                  Learn More
                </button>
              </div>

              {/* Kolom Kanan: Gambar */}
              <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
                <div className="relative w-full max-w-md md:max-w-none md:w-[1200px] md:h-[1000px] aspect-square md:aspect-auto">
                  <Image
                    src="/heroimage/Product-Yava.png"
                    alt="YAVA Granola Chocolate Vanilla"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Store Footer Section */}
        <section className="bg-[#FDF5E6] text-gray-800 px-6 py-9">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            <p className="text-[22px] font-semibold whitespace-nowrap text-center sm:text-left">
              Available in Your Favorite Stores
            </p>
            <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
              <Image src="/heroimage/Blibli.png" alt="Blibli" width={89} height={35} />
              <Image src="/heroimage/Lazada (1).png" alt="Lazada" width={124} height={35} />
              <Image src="/heroimage/Shopee.png" alt="Shopee" width={120} height={35} />
              <Image src="/heroimage/Tiktok (1).png" alt="TikTok Shop" width={153} height={35} />
              <Image src="/heroimage/Tokopedia (1).png" alt="Tokopedia" width={154} height={35} />
            </div>
          </div>
        </section>
      </div>

      {/* Lontar Sugar Section */}
      <section className="bg-[#FDF5E6] px-6">
        <div className="container mx-auto relative pt-10 pb-32">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Side: Text Content */}
            <div className="w-full md:w-1/2 text-left mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-2">
                <span className="text-black">LONTAR</span> <span className="text-red-600">SUGAR</span>
              </h2>
              <p className="text-xl font-medium mb-4">
                Pure • Natural • Sustainable
              </p>
              <p>Lontar Sugar gives you more steady blood sugar and helps</p>
              <p className="text-base mb-6">keep you more healthy (and taste great!).</p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                Learn More
              </button>
            </div>
            {/* Right Side: Images */}
            <div className="w-full md:w-1/2 relative flex flex-col md:flex-row items-center justify-center gap-10">
              {/* Gambar Besar */}
              <div className="relative w-full max-w-sm md:max-w-none md:w-[620px] md:h-[620px] aspect-square md:aspect-auto">
                <Image
                  src="/heroimage/Photo LG.png"
                  alt="Lontar Sugar Big Image"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Gambar Kecil */}
              <div className="relative w-full max-w-xs md:max-w-none md:w-[390px] md:h-[390px] aspect-square md:aspect-auto mt-6 md:mt-0">
                <Image
                  src="/heroimage/Mascot Container.png"
                  alt="Lontar Sugar Small Image"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          {/* Gambar Baru */}
          <div className="absolute right-0 top-[300px] hidden md:block">
            <div className="relative w-[412px] h-[412px]">
              <Image
                src="/heroimage/Gula Ramah.png"
                alt="New Image"
                fill
                className="object-contain"
              />
            </div>
          </div>
          {/* Rotated Images */}
          <div className="absolute right-[500px] top-[-50px] hidden md:block">
            <div className="relative w-[160px] h-[160px] rotate-[-25deg]">
              <Image
                src="/heroimage/Lontar.png"
                alt="Rotated Image"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="absolute right-[100px] top-[100px] hidden md:block">
            <div className="relative w-[142px] h-[142px] rotate-[30deg]">
              <Image
                src="/heroimage/Sharp Red.png"
                alt="Triangle Image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Against Video Section */}
      <section className="bg-white px-6 py-12">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <span className="font-extrabold text-3xl sm:text-5xl text-black">AGAINTS</span>
              <span className="font-extrabold text-3xl sm:text-5xl text-red-600">VIDEO</span>
            </div>
            <div className="flex space-x-2 mt-4 sm:mt-0">
              <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L14 12z" />
                </svg>
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M8.59 16.59L10.5 18.5l6-6-6-6-1.41 1.41L10.5 12z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/heroimage/Video Clip.png"
              alt="Against Video Preview"
              width={1420}
              height={798}
              className="w-full h-auto object-cover rounded-xl"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white bg-opacity-70 rounded-full p-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path d="M10 16.5L16 12 10 7.5V16.5Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Yava Granola Section */}
      <section className="bg-white px-6 py-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left Side: Text Content */}
            <div className="w-full md:w-1/2 text-left mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-2">
                <span className="text-black">WHY</span> <span className="text-red-600">YAVA GRANOLA?</span>
              </h2>
              <p className="text-xl font-medium mb-4">
                Delicious • Convenient • Healthy
              </p>
              <p>YAVA granola features the traditional rolled oats, combined with a Bali-centric combination of puffed red rice, cashews and various dried fruits (even chocolate!). Mixed and baked until perfectly crunchy.</p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 mt-4">
                Learn More
              </button>
            </div>
            {/* Right Side: Bowl Image */}
            <div className="relative w-full max-w-md md:max-w-none md:w-[676px] md:h-[672px] aspect-square md:aspect-auto">
              <Image
                src="/heroimage/Bowl Spin (1).png"
                alt="Yava Granola Bowl Image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Food Section */}
      <section className="bg-white px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 bg-opacity-10 px-4 py-2 rounded-full">
            <span className="text-black text-2xl sm:text-4xl font-bold">OUR FOOD</span>
            <span className="text-red-600 text-2xl sm:text-4xl font-bold">FIND YOUR FAVORITE!</span>
          </h2>
        </div>
        <div className="flex justify-center mb-8">
          <div className="w-full max-w-3xl overflow-x-auto">
            <Image
              src="/heroimage/Auto Layout Horizontal (1).png"
              alt="Product Categories Navigation"
              width={1059}
              height={160}
              className="w-full object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-md">
              <div className="relative w-full h-60">
                <Image
                  src={`/heroimage/IMG (${i}).png`}
                  alt={`Product ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-lg font-semibold uppercase">GRANOLA</p>
                <p className="text-gray-600 mt-2">Flavor {i + 1}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            See More
          </button>
        </div>
      </section>

      {/* Happy Food Notes Section */}
      <section className="bg-white px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 bg-opacity-10 px-4 py-2 rounded-full">
            <span className="text-black text-2xl sm:text-4xl font-bold">HAPPY</span>
            <span className="text-red-600 text-2xl sm:text-4xl font-bold">FOOD NOTES</span>
          </h2>
        </div>
        <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/heroimage/IMG 1 (1).png"
            alt="Woman Eating Granola"
            width={1420}
            height={850}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
        <div className="w-full max-w-5xl mx-auto mt-8 flex overflow-x-auto pb-4 gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex-shrink-0 w-full sm:w-80">
              <Image
                src={`/heroimage/News Card ${i + 2} (2).png`}
                alt={`News ${i + 1}`}
                width={457}
                height={184}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            See More
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FFF6EF] text-[#333333] font-medium text-sm sm:text-lg">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-10">
          <div>
            <Image
              src="/heroimage/Logo - Original.png"
              alt="YAVA"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="text-sm">PT EAST INDO FAIR TRADING</p>
            <p className="text-sm mt-1">Jl. Padang Galak No.20 A, Kesiman Petilan – Denpasar, Indonesia</p>
            <p className="text-sm mt-1">Phone: (+62) 0361-4721486</p>
            <p className="text-sm mt-1">Email: info@yavabali.com</p>
            <div className="flex gap-2 mt-4">
              <img src="/images/instagram.png" alt="Instagram" className="w-5 h-5" />
              <img src="/images/facebook.png" alt="Facebook" className="w-5 h-5" />
              <img src="/images/youtube.png" alt="YouTube" className="w-5 h-5" />
            </div>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Lontar Sugar</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Ingredients</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Company</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">YAVAKataMereka</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">News & Event</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold mb-4">Meet Us</h3>
            <div className="grid grid-cols-1 gap-4">
              {['Blibli', 'Lazada (1)', 'Shopee', 'Tokopedia (1)', 'Tiktok (1)'].map((store) => (
                <div key={store} className="flex items-center gap-2">
                  <img
                    src={`/heroimage/${store}.png`}
                    alt={store}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-orange-500 text-white text-center text-sm h-12 flex items-center justify-center mt-8">
          © 2025 Yava. All rights reserved
        </div>
      </footer>
    </div>
  );
}