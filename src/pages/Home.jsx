// src/pages/Home.js
import React from 'react';
import ProductList from '../components/ProductList';
import Slider from '../components/Slider';
import Title from '../components/Title';
import { Helmet } from 'react-helmet';
import ProductDescription from '../components/ProductDescription';

import group from '../assets/images/Group.png';
import FutureProducts from '../components/FutureProducts';
import { Link } from 'react-router-dom';
import { products } from '../data/products'; // Import the products array

const Home = () => {
	const firstFourProducts = products.slice(0, 4);
	return (
		<div className="min-h-screen flex flex-col mt-12 sm:mt-6 ">
			<Helmet>
				<title>Drashti Foods - Home</title>
				<meta name="description" content="Discover a variety of delicious papads made from high-quality ingredients at Drashti Foods. Explore our products and learn about our manufacturing process." />
				<meta name="keywords" content="Papad, Drashti Foods, Wheat Papad, Coin Papad, Udad Papad, Rice Papad" />
			</Helmet>
			<section className="bg-gray-100">

			<Slider />
			</section>

			<ProductDescription />

			<section className="bg-gray-100 py-5">
				<Title title="Featured Products" />

				<div className="max-w-6xl mx-auto mb-10">
					<div className="flex justify-center items-center">
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto max-w-6xl px-4">
							<ProductList products={firstFourProducts} /> {/* Use the imported products array */}
						</div>
					</div>
				</div>

				<Link to="/product">
  <div className="flex flex-col items-center">
    <div className="bg-[#ffcb02] rounded-lg flex items-center justify-center px-6 py-3 transition-transform duration-300 hover:bg-[#f9b300] hover:shadow-lg cursor-pointer">
      <span className="text-black text-[20px] font-semibold font-poppins text-center">
        View Our Products
      </span>
    </div>
  </div>
</Link>

			</section>

			<section className="py-2 bg-gray-100">
				<Title title="Manufacturing Process" />
				<div className="container mx-auto text-center px-4 md:px-40">
					<p className="max-w-auto mx-auto text-gray-800 text-[18px] font-bold font-poppins leading-normal tracking-[0.96px]">
						Papad manufacturing begins with mixing wheat flour, spices, salt, and water, followed by dough preparation and
						feeding it into a papad-making machine. The machine rolls and cuts the dough into thin sheets and shapes them
						into circular papad. They are then dried in a chamber with controlled air circulation and temperature. Finally,
						control measures are applied throughout, and once dried, papads are packaged using automatic machinery.
						Finally, they're distributed to retail or directly to consumers, maintaining freshness and quality.
					</p>
				</div>
			</section>

			<FutureProducts />
			<section className="py-8 bg-gray-100">
				<Title title="Certifications" />
				<div className="container mx-auto">
					<div className="flex justify-center space-x-8">
						<div className="flex justify-center items-center">
							<img 
								src={group} 
								alt="group" 
								className="object-contain w-1/2 md:w-auto" // Responsive width
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
