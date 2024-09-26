import { useCallback, useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import Slider from '../components/Slider';
import Title from '../components/Title';

import wheatpapd from '../assets/images/wheatpapd.png';  
import coinpapad from '../assets/images/coinpapad.png';
import udad from '../assets/images/udad.png';
import ricepapad from '../assets/images/ricepapad.png';
import group from '../assets/images/Group.png';
import FutureProducts from '../components/FutureProducts';
import ProductDescription from '../components/ProductDescription';
import { Link } from 'react-router-dom';

const Home = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
  
	const products = [
		{
			name: "Wheat Papad",
			image: wheatpapd,
			description: "Our Wheat Papad is the perfect blend of nutrition and flavor, offering a healthier alternative to traditional snacks. Made from premium-quality wheat flour, these papads are carefully crafted and seasoned with a medley of spices, creating a light and crispy snack that can complement any meal or be enjoyed on its own. Whether you choose to roast or fry them, wheat papads deliver a delightful crunch and a burst of flavor with every bite. They are low in calories and free from artificial preservatives, making them an ideal choice for health-conscious individuals who don't want to compromise on taste."
		},
		{
			name: "Coin Papad",
			image: coinpapad,
			description: "Coin Papad is a delightful variation of the traditional Indian snack, shaped into small, coin-sized rounds for an irresistible crunch in every bite. Made from high-quality lentil flour and seasoned with a blend of spices, these mini papads are perfect for serving as an appetizer, snack, or accompaniment to meals. Their crisp texture and flavorful taste make them a hit at any gathering, while their size adds a playful twist to the classic papad experience. Whether you’re hosting a party or simply enjoying a snack with tea, our coin papads are sure to please. Enjoy them roasted or fried for that perfect golden crunch. Plus, they’re easy to store and prepare, making them a convenient, flavorful snack for any occasion."
		},
		{
			name: "Udad Papad",
			image: udad,
			description: "Our Udad Papad is a traditional Indian delicacy made from high-quality urad dal (black gram), known for its unique flavor and crunchy texture. Carefully handcrafted with a blend of aromatic spices, this papad offers a deliciously crispy experience that complements any meal. Whether served as an appetizer or paired with rice and dal, the savory taste of Udad Papad enhances every bite. Perfect for family gatherings, festive occasions, or a quick snack, our Udad Papad is both versatile and irresistibly tasty. Serve it fried or roasted with your favorite chutney or yogurt for a truly authentic experience. Bring home the taste of tradition and enjoy the perfect blend of spice and crunch with every bite of our Udad Papad."
		},
		{
			name: "Rice Papad",
			image: ricepapad,
			description: "Our Rice papads are a delightful and crispy snack made from high-quality rice flour, offering a light and crunchy texture. These traditional papads are carefully sun-dried to achieve the perfect crunch when fried or roasted. Known for their subtle and authentic flavor, rice papads are a versatile treat that can be enjoyed on their own or as an accompaniment to meals. Whether served as a side dish, appetizer, or snack, our rice papads provide a gluten-free, healthy alternative to other fried snacks. They are ideal for those looking to add a crisp, savory touch to any meal. Available in various flavors and sizes, our rice papads bring a traditional yet tasty touch to your dining experience."
		},
	];
  
	return (
		<div className="min-h-screen flex flex-col mt-6">
 				 <Slider />
			


			<ProductDescription />

			<section className="bg-gray-100 py-5">
				<Title title="Featured Products" />

				<div className="max-w-6xl mx-auto mb-10">
					<div className="flex justify-center items-center">
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto max-w-6xl px-4">
							<ProductList products={products} />
						</div>
					</div>
				</div>

				<Link to="/product">
					<div className="flex flex-col items-center">
						<div className="bg-[#ffcb02] rounded-lg flex items-center justify-center w-[200px] h-[43px] transition-transform duration-300 hover:bg-[#f9b300] hover:shadow-lg cursor-pointer">
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
