import React from 'react';
import ContactForm from '../components/ContactForm';
import AnimatedComponent from '../components/AnimatedComponent';
import { Building2Icon, PhoneIcon, MailIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <section className="min-h-screen   bg-gray-100  mt-14">
      <Helmet>
  <title>Contact Us - Drashti Foods</title>
  <meta name="description" content="Get in touch with Drashti Foods for inquiries, feedback, or support. We are here to help!" />
</Helmet>

     <SectionHeader  title="CONTACT US" />
    <div className="py-6 px-4 sm:px-6 lg:px-8"> {/* Updated to grey background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl shadow-black overflow-hidden" 
      >
        <div className="md:flex">
          {/* Contact Information Section */}
          <div className="md:w-1/2 bg-yellow-400 p-8 text-black">
            <AnimatedComponent>
              <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
            </AnimatedComponent>
            <AnimatedComponent delay={0.2}>
              <p className="mb-6 text-lg">
                We’re excited to hear from you! Fill out the form, and let's start a conversation about how we can help your business grow.
              </p>
            </AnimatedComponent>
            <div className="space-y-4">
              <AnimatedComponent delay={0.4}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center"
                >
                  <Building2Icon className="h-6 w-6 mr-2 text-yellow-600" />
                  <span className="text-black">Plot No. 81, R.K. Industrial Zone, Raj samadhiyala, Bhavnagar Highway, Rajkot</span>
                </motion.div>
              </AnimatedComponent>
              <AnimatedComponent delay={0.5}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center"
                >
                  <PhoneIcon className="h-6 w-6 mr-2 text-yellow-600" />
                  <span className="text-black">+91 9825184844</span>
                </motion.div>
              </AnimatedComponent>
              <AnimatedComponent delay={0.6}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center"
                >
                  <MailIcon className="h-6 w-6 mr-2 text-yellow-600" />
                  <span className="text-black">drashtifoods5818@gmail.com</span>
                </motion.div>
              </AnimatedComponent>
            </div>
          </div>
          
          {/* Contact Form Section */}
          <div className="md:w-1/2 p-8 bg-white">
            <AnimatedComponent delay={0.3}>
              <h2 className="text-3xl font-semibold mb-6 text-black">Contact Us</h2>
              <ContactForm />
            </AnimatedComponent>
          </div>
        </div>
      </motion.div>
    </div>
    </section>
  );
};

export default Contact;
