import React, { useState } from 'react';
import { toast } from 'sonner'; // For notifications
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'; // Import EmailJS
import AnimatedComponent from '../components/AnimatedComponent'; // Assuming you have an AnimatedComponent
import { Building2Icon, PhoneIcon, MailIcon } from 'lucide-react'; // Icons for contact information

const DistributorInquiry = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    phone: '',
    email: '',
    company: '',
    message: '',
   // Set form type for email template
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission
  const [loading, setLoading] = useState(false); // Track loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitted) {
      toast.error("You have already submitted the form!");
      return;
    }

    setLoading(true); // Set loading state to true

    // Sending email using EmailJS
    emailjs.send('drashti_foods', 'template_b07m2kg', formData,'OTiHIGlSMQqreou0s')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success("Form submitted successfully and email sent!");
        setIsSubmitted(true); // Disable form after submission
      })
      .catch((error) => {
        console.log('FAILED...', error);
        toast.error("Failed to send email. Please try again.");
      })
      .finally(() => {
        setLoading(false); // Reset loading state
      });
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } }
  };

  return (
    <div className="min-h-screen flex flex-col mt-6">
      <section className="bg-gray-100 ">
        <div className="min-h-screen py-6 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl shadow-black overflow-hidden"
          >
            <div className="p-8">
              <AnimatedComponent>
                <h1 className="text-4xl font-bold mb-6 text-center text-yellow-600">Distributor Inquiry</h1>
              </AnimatedComponent>

              {/* Contact Information Section */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4 text-center">We're Here to Help!</h2>
                <div className="flex justify-center space-x-4">
                  <div className="flex items-center">
                    <PhoneIcon className="h-5 w-5 text-yellow-600 mr-1" />
                    <span className="text-gray-700">+91 9825184844</span>
                  </div>
                  <div className="flex items-center">
                    <MailIcon className="h-5 w-5 text-yellow-600 mr-1" />
                    <span className="text-gray-700">drashtifoods5818@gmail.com</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div variants={inputVariants} whileFocus="focus">
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted || loading} // Disable input after submission or while loading
                    className="mt-1 w-full border border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500 px-3 py-2 rounded-md"
                  />
                </motion.div>
                <motion.div variants={inputVariants} whileFocus="focus">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted || loading}
                    className="mt-1 w-full border border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500 px-3 py-2 rounded-md"
                  />
                </motion.div>
                <motion.div variants={inputVariants} whileFocus="focus">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted || loading}
                    className="mt-1 w-full border border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500 px-3 py-2 rounded-md"
                  />
                </motion.div>
                <motion.div variants={inputVariants} whileFocus="focus">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted || loading}
                    className="mt-1 w-full border border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500 px-3 py-2 rounded-md"
                  />
                </motion.div>
                <motion.div variants={inputVariants} whileFocus="focus">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted || loading}
                    className="mt-1 w-full border border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500 px-3 py-2 rounded-md"
                  />
                </motion.div>
                <motion.div variants={inputVariants} whileFocus="focus">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted || loading}
                    className="mt-1 w-full border border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500 px-3 py-2 rounded-md"
                  />
                </motion.div>
                <motion.div variants={inputVariants} whileFocus="focus">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted || loading}
                    className="mt-1 w-full border border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500 px-3 py-2 rounded-md"
                    rows="4"
                  ></textarea>
                </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button 
                      type="submit" 
                      disabled={isSubmitted || loading} // Disable submit button after submission or while loading
                      className={`w-full ${isSubmitted || loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-yellow-400 hover:bg-yellow-500'} text-black font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105`}
                    >
                      {loading ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12c0-4.418 3.582-8 8-8s8 3.582 8 8H4z"></path>
                          </svg>
                          Submitting...
                        </div>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DistributorInquiry;
