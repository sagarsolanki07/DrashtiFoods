import React from 'react';
import { Link } from 'react-router-dom';
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
  { name: "Wheat Papad", image: wheatpapd },
  { name: "Wheat-Rice Papad", image: wheatrice },
  { name: "Wheat-Jeera Papad", image: wheatjira },
  { name: "Coin Papad", image: coinpapad },
  { name: "Udad Papad", image: udad },
  { name: "Rice Papad", image: ricepapad }
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black pt-16 font-arial font-bold border border-gray-300">
      {/* Top Section */}
      <div className="container mx-auto px-6 lg:px-20 xl:px-28 grid grid-cols-1 md:grid-cols-4 gap-12 justify-items-center">
        
        {/* Company Info */}
        <div className="space-y-6 text-center">
          <div className="flex flex-col items-center text-gray-800 font-poppins font-medium">
            <img src={whatsappImage} alt="Drashti Foods Logo" className="h-24 mb-4" />
            <p className="text-sm leading-relaxed text-center">
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
                <FontAwesomeIcon icon={Icon} className="h-7 w-7" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6 text-center">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-3">
            {[
              { name: "Home", path: "/" },
              { name: "Products", path: "/product" },
              { name: "About Us", path: "/about" },
              { name: "Contact Us", path: "/contact" }
            ].map(({ name, path }) => (
              <li key={name}>
                <Link to={path} className="hover:text-yellow-500 transition font-poppins text-gray-800 font-medium duration-300">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Products */}
        <div className="space-y-6 text-center">
          <h3 className="text-xl font-semibold">Our Products</h3>
          <ul className="space-y-3">
            {products.map(product => (
              <li key={product.name}>
                <Link to={`/product/${product.name.toLowerCase().replace(/ /g, '-')}`} className="hover:text-yellow-500 transition duration-300 text-gray-800 font-poppins font-medium">
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6 text-center">
          <h3 className="text-xl font-semibold">Contact Info</h3>
          <ul className="space-y-4 text-sm leading-relaxed text-gray-800 font-poppins font-medium">
            <li className="flex justify-center items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-4 h-5 w-5" />
              Plot No. 81, R.K. Industrial Zone, Raj samadhiyala, Bhavnagar Highway, Rajkot
            </li>
            <li className="flex justify-center items-center">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-4 h-5 w-5" />
              +91 9825184844
            </li>
            <li className="flex justify-center items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-4 h-5 w-5" />
              drashtifoods5818@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-4 font-poppins text-black text-center text-xs mt-5">
        <p>© {new Date().getFullYear()} Drashti Foods. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
