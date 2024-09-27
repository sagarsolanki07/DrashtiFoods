import React from 'react';
import papadBgImage1 from '../assets/images/main.png'; 
import ImageDisplay from '../components/ImageDisplay';
import SectionHeader from '../components/SectionHeader';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col pb-16 mt-14">
      <Helmet>
        <title>About Us - Drashti Foods</title>
        <meta name="description" content="Learn more about Drashti Foods, our mission, values, and commitment to quality in papad manufacturing." />
      </Helmet>

      <section className="bg-gray-100">
        <SectionHeader title="ABOUT US" />
        <ImageDisplay />
        <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-8 md:mt-16">
          {/* Content Section */}
          <div className="flex flex-col items-start gap-10 px-4 md:px-8 lg:px-40 font-poppins">
            <div className="space-y-6 w-full">
              {/* Section: Who are We? */}
              <div className="shadow-lg p-6 bg-white rounded-lg">
                <h2 className="text-[#ED1B24] text-left font-bold text-[32px] md:text-[36px] lg:text-[44px] leading-normal tracking-[1.5px] md:tracking-[2.64px]">
                  Who are We?
                </h2>
                <p className="text-[rgba(0,0,0,0.85)] text-left font-semibold text-[18px] md:text-[20px] leading-normal tracking-[1.2px] mt-3">
                  Drashti Foods specializes in manufacturing various types of papads like Wheat Papad, Coin Papad, Udad Papad, Rice Papad, 2D Fryums, and 3D Fryums.
                </p>
                <p className="text-[rgba(0,0,0,0.85)] text-left font-semibold text-[18px] md:text-[20px] leading-normal tracking-[1.2px] mt-2">
                  At Drashti Foods, we are passionate about bringing you the finest, most authentic papads, crafted with love and tradition. Our journey began with a simple idea: to share the delicious, crispy, and flavorful experience of homemade papads with the world.
                </p>
              </div>

              {/* Section: Why Choose Us? */}
              <div className="shadow-lg p-6 bg-white rounded-lg">
                <h2 className="text-[#ED1B24] text-left font-bold text-[32px] md:text-[36px] lg:text-[44px] leading-normal tracking-[1.5px] md:tracking-[2.64px]">
                  Why Choose Us?
                </h2>
                <p className="text-[rgba(0,0,0,0.85)] text-left font-semibold text-[18px] md:text-[20px] leading-normal tracking-[1.2px] mt-3">
                  At Drashti Foods, we are proud to be recognized as global exporters with a strong foothold in the international market.
                </p>
                <p className="text-[rgba(0,0,0,0.85)] text-left font-semibold text-[18px] md:text-[20px] leading-normal tracking-[1.2px] mt-2">
                  Our commitment to delivering superior-quality products has been instrumental in our success and our dedication to providing top-notch packaging solutions tailored to the unique requirements of our global clientele has cemented our position as a trusted leader in the industry.
                </p>
              </div>

              {/* Section: Our Story */}
              <div className="shadow-lg p-6 bg-white rounded-lg">
                <h2 className="text-[#ED1B24] text-left font-bold text-[32px] md:text-[36px] lg:text-[44px] leading-normal tracking-[1.5px] md:tracking-[2.64px]">
                  Our Story
                </h2>
                <p className="text-[rgba(0,0,0,0.85)] text-left font-semibold text-[18px] md:text-[20px] leading-normal tracking-[1.2px] mt-3">
                  Drashti Foods was founded by Ajitbhai Gadhavi, who grew up savoring the delightful papads made by their own family. Ajitbhai decided to turn a beloved family tradition into a business. Our papads are made using age-old recipes passed down through generations, ensuring that every bite brings a taste of home and tradition.
                </p>
              </div>

              {/* Section: Our Papads */}
              <div className="shadow-lg p-6 bg-white rounded-lg">
                <h2 className="text-[#ED1B24] text-left font-bold text-[32px] md:text-[36px] lg:text-[44px] leading-normal tracking-[1.5px] md:tracking-[2.64px]">
                  Our Papads
                </h2>
                <p className="text-[rgba(0,0,0,0.85)] text-left font-semibold text-[18px] md:text-[20px] leading-normal tracking-[1.2px] mt-3">
                  We take pride in offering a diverse range of papads to suit every palate. From the classic Wheat Rice to the more adventurous rice and masala varieties, our selection is crafted to deliver an unparalleled taste experience. We use only the finest ingredients, sourced locally and prepared with the utmost care to maintain authenticity and quality.
                </p>
              </div>

              {/* Section: Our Commitment To Quality */}
              <div className="shadow-lg p-6 bg-white rounded-lg">
                <h2 className="text-[#ED1B24] text-left font-bold text-[32px] md:text-[36px] lg:text-[44px] leading-normal tracking-[1.5px] md:tracking-[2.64px]">
                  Our Commitment To Quality
                </h2>
                <p className="text-[rgba(0,0,0,0.85)] text-left font-semibold text-[18px] md:text-[20px] leading-normal tracking-[1.2px] mt-3">
                  Quality is at the heart of everything we do. We believe in using natural ingredients, free from artificial preservatives and additives. Each papad is carefully sun-dried and hand-rolled to perfection, ensuring a crispy texture and rich flavor. Our commitment to quality extends to our packaging, which is designed to keep our papads fresh and flavorful, ready for you to enjoy.
                </p>
              </div>

              {/* Section: Join Us on Our Journey */}
              <div className="shadow-lg p-6 bg-white rounded-lg">
                <h2 className="text-[#ED1B24] text-left font-bold text-[32px] md:text-[36px] lg:text-[44px] leading-normal tracking-[1.5px] md:tracking-[2.64px]">
                  Join Us on Our Journey
                </h2>
                <p className="text-[rgba(0,0,0,0.85)] text-left font-semibold text-[18px] md:text-[20px] leading-normal tracking-[1.2px] mt-3">
                  Whether you’re a lifelong papad lover or new to this delicious snack, we invite you to join us on our journey. Explore our range of papads, learn about our traditions, and share in the joy of this beloved treat. At Drashti Foods, we are more than just a business; we are a family committed to bringing you the best of our heritage.
                </p>
                <p className="text-[rgba(0,0,0,0.85)] text-left font-semibold text-[18px] md:text-[20px] leading-normal tracking-[1.2px] mt-5">
                  Thank you for being a part of our story.
                </p>
                <p className="text-[rgba(0,0,0,0.85)] text-left font-semibold text-[18px] md:text-[20px] leading-normal tracking-[1.2px] mt-5">
                  Warm regards,
                </p>
                <p className="text-[rgba(0,0,0,0.85)] text-left font-semibold text-[18px] md:text-[20px] leading-normal tracking-[1.2px]">
                  Ajitbhai Gadhavi,
                </p>
                <p className="text-[rgba(0,0,0,0.85)] text-left font-semibold text-[18px] md:text-[20px] leading-normal tracking-[1.2px]">
                  Founder & CEO, Drashti Foods
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
