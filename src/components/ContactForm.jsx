import React, { useState } from 'react';
import { toast } from "sonner";
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'; // Import EmailJS

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    contactNo: '',
    email: '',
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
    emailjs.send('drashti_foods', 'template_78as31d', formData, 'OTiHIGlSMQqreou0s')
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
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          disabled={isSubmitted || loading} // Disable input after submission or while loading
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
          disabled={isSubmitted || loading} // Disable input after submission or while loading
          className="mt-1 w-full border border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500 px-3 py-2 rounded-md"
        />
      </motion.div>
      <motion.div variants={inputVariants} whileFocus="focus">
        <label htmlFor="contactNo" className="block text-sm font-medium text-gray-700">Contact No.</label>
        <input
          type="tel"
          id="contactNo"
          name="contactNo"
          value={formData.contactNo}
          onChange={handleChange}
          required
          disabled={isSubmitted || loading} // Disable input after submission or while loading
          className="mt-1 w-full border border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500 px-3 py-2 rounded-md"
        />
      </motion.div>
      <motion.div variants={inputVariants} whileFocus="focus">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isSubmitted || loading} // Disable input after submission or while loading
          className="mt-1 w-full border border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500 px-3 py-2 rounded-md"
        />
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
            isSubmitted ? "Form Submitted" : "Submit"
          )}
        </button>
      </motion.div>
    </form>
  );
};

export default ContactForm;
