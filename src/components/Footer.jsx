    import React from 'react';
    import { Link } from 'react-router-dom'; // Import Link for routing
    import whatsappImage from '../assets/images/whatsapp-image-2024-05-28-at-9-51-1.png';
    import wheatpapd from '../assets/images/wheatpapd.png';  
    import coinpapad from '../assets/images/coinpapad.png';
    import udad from '../assets/images/udad.png';
    import ricepapad from '../assets/images/ricepapad.png';
    import wheatjira from '../assets/images/wheatjira.png';
    import wheatrice from '../assets/images/wheatrice.png';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
    import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
    
    const products = [
      {
        name: "Wheat Papad",
        image: wheatpapd,
        description: "Our Wheat Papad is the perfect blend of nutrition and flavor, offering a healthier alternative to traditional snacks. Made from premium-quality wheat flour, these papads are carefully crafted and seasoned with a medley of spices, creating a light and crispy snack that can complement any meal or be enjoyed on its own. Whether you choose to roast or fry them, wheat papads deliver a delightful crunch and a burst of flavor with every bite. They are low in calories and free from artificial preservatives, making them an ideal choice for health-conscious individuals who don't want to compromise on taste."
      },
      {
        name: "Wheat-Rice Papad",
        image: wheatrice,
        description: "Experience the perfect fusion of health and taste with our Wheat-Rice Papad, crafted from a wholesome blend of wheat and rice flour. These papads offer a delicate, crispy texture with a mild yet flavorful taste, making them an ideal companion to any meal. Made using high-quality, natural ingredients, our papads are not only delicious but also light and easy to digest. Whether you're roasting them for a low-calorie option or frying for an extra-crunchy snack, Wheat-Rice Papad brings versatility to your kitchen. Enjoy them as a snack with dips or chutneys, or pair them with your favorite curries and rice dishes to add a satisfying crunch. Perfect for festive occasions or everyday meals, our papads deliver the authentic taste of tradition with a modern twist."
      },
      {
        name: "Wheat-Jeera Papad",
        image: wheatjira,
        description: "Our Wheat-Jeera Papad offers a perfect blend of wholesome wheat flour and aromatic cumin (jeera) seeds, creating a delicious snack that’s both healthy and satisfying. Made from high-quality wheat, this papad has a light, crispy texture that pairs well with a variety of dishes or can be enjoyed on its own as a snack. The earthy flavor of cumin seeds adds a unique spice, enhancing the overall taste and making it a favorite for papad lovers. Perfect for those who seek a healthier alternative to regular papads, our Wheat-Jeera Papad is made using natural ingredients, free from any artificial additives. Available in various sizes, it's a great accompaniment for Indian meals or a delightful standalone treat."
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

    const Footer = () => {
      return (
        <footer className="bg-gray-100 text-black pt-16 font-arial font-bold border border-gray-300">
          {/* Top Section */}
          <div className="container mx-auto px-6 lg:px-20 xl:px-28 grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6 text-center">
              <div className="flex flex-col items-center text-gray-800  font-poppins  font-medium ">
                <img src={whatsappImage} alt="Divya Drashti Logo" className="h-24 mb-4" />
                <p className="text-sm leading-relaxed">
                  Drashti Foods innovation meets flavor in every bite, offering a delectable array of freshly crafted culinary delights straight from our kitchen to yours.
                </p>
              </div>
              {/* Social Media Links */}
              <div className="flex justify-center space-x-4 text-lg">
    {[
      { Icon: faFacebookF, link: "#", alt: "Facebook" },
      { Icon: faInstagram, link: "https://www.instagram.com/drashti_foods?igsh=YXNvOGFtdm94MGxz", alt: "Instagram" },
      { Icon: faTwitter, link: "#", alt: "Twitter" },
      { Icon: faLinkedinIn, link: "#", alt: "LinkedIn" },
    ].map(({ Icon, link, alt }) => (
      <a key={link} href={link} className="hover:text-yellow-500 transition duration-300" aria-label={alt}>
        <FontAwesomeIcon icon={Icon} className="h-7 w-7" /> {/* Adjust size as needed */}
      </a>
    ))}
  </div>

            </div>

            {/* Quick Links */}
            <div className="space-y-6 ml-16">
              <h3 className="text-xl font-semibold">Quick Links</h3>
              <ul className="space-y-3 ">
                {[
                  { name: "Home", path: "/" },
                  { name: "Products", path: "/product" },
                  { name: "About Us", path: "/about" },
                  { name: "Contact Us", path: "/contact" }
                ].map(({ name, path }) => (
                  <li key={name}>
                    <Link to={path} className="hover:text-yellow-500 transition font-poppins text-gray-800 font-medium duration-300 ">
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Products */}
            <div className="space-y-6">
              <h3 className="text-xl text-black font-semibold">Our Products</h3>
              <ul className="space-y-3">
                {products.map(product => (
                  <li key={product.name}>
                    <Link to={`/product/${product.name.toLowerCase().replace(/ /g, '-')}`} state={{ product }} className="hover:text-yellow-500 transition duration-300 text-gray-800  font-poppins  font-medium ">
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
          {/* Contact Info */}
          <div className="space-y-6">
  <h3 className="text-xl font-semibold">Contact Info</h3>
  <ul className="space-y-4 text-sm leading-relaxed text-gray-800  font-poppins  font-medium ">
    <li className="flex items-center ">
      <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-4 h-5 w-5" /> {/* Adjust size here */}
      Plot No. 81, R.K. Industrial Zone, Raj samadhiyala, Bhavnagar Highway, Rajkot
    </li>
    <li className="flex items-center">
      <FontAwesomeIcon icon={faPhoneAlt} className="mr-4 h-5 w-5" /> {/* Adjust size here */}
      +91 9825184844
    </li>
    <li className="flex items-center">
      <FontAwesomeIcon icon={faEnvelope} className="mr-4 h-5 w-5" /> {/* Adjust size here */}
      drashtifoods2024@gmail.com
    </li>
  </ul>
</div>


          </div>

          {/* Bottom Section */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-4 text-black text-center text-xs mt-5">
            <p>© {new Date().getFullYear()} Drashti Foods. All rights reserved.</p>
          </div>
        </footer>
      );
    };

    export default Footer;
