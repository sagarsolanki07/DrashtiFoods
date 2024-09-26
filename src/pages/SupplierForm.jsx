import React, { useState } from 'react';
import { toast } from "sonner"; 
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'; // Import EmailJS
import AnimatedComponent from '../components/AnimatedComponent'; // Assuming you have an AnimatedComponent
import { PhoneIcon, MailIcon } from 'lucide-react'; 

const SupplierForm = () => {
  const [formData, setFormData] = useState({
    supplierCompany: '',
    supplierContactPerson: '',
    supplierEmail: '',
    supplierPhone: '',
    supplierProductType: '',
    supplyCapacity: '',
    leadTime: '',
    supplierAdditionalInfo: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false); 
  const [loading, setLoading] = useState(false); 

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

    setLoading(true); 

    // Sending email using EmailJS
    emailjs.send('drashti_foods', 'template_b07m2kg', formData,'OTiHIGlSMQqreou0s')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success("Supplier form submitted successfully and email sent!");
        setIsSubmitted(true); 
      })
      .catch((error) => {
        console.log('FAILED...', error);
        toast.error("Failed to send email. Please try again.");
      })
      .finally(() => {
        setLoading(false); 
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
                <h1 className="text-4xl font-bold mb-6 text-center text-yellow-600">Supplier Form</h1>
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
                    <span className="text-gray-700">gautamlangar2003@gmail.com</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div variants={inputVariants} whileFocus="focus">
                  <label htmlFor="supplierCompany" className="block text-sm font-medium text-gray-700">Company Name</label>
                  <input
                    type="text"
                    id="supplierCompany"
                    name="supplierCompany"
                    value={formData.supplierCompany}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted || loading}
                    className="mt-1 w-full border border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500 px-3 py-2 rounded-md"
                  />
                </motion.div>
                <motion.div variants={inputVariants} whileFocus="focus">
                  <label htmlFor="supplierContactPerson" className="block text-sm font-medium text-gray-700">Contact Person</label>
                  <input
                    type="text"
                    id="supplierContactPerson"
                    name="supplierContactPerson"
                    value={formData.supplierContactPerson}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted || loading}
                    className="mt-1 w-full border border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500 px-3 py-2 rounded-md"
                  />
                </motion.div>
                <motion.div variants={inputVariants} whileFocus="focus">
                  <label htmlFor="supplierEmail" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    id="supplierEmail"
                    name="supplierEmail"
                    value={formData.supplierEmail}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted || loading}
                    className="mt-1 w-full border border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500 px-3 py-2 rounded-md"
                  />
                </motion.div>
                <motion.div variants={inputVariants} whileFocus="focus">
                  <label htmlFor="supplierPhone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    id="supplierPhone"
                    name="supplierPhone"
                    value={formData.supplierPhone}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted || loading}
                    className="mt-1 w-full border border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500 px-3 py-2 rounded-md"
                  />
                </motion.div>
                <motion.div variants={inputVariants} whileFocus="focus">
                  <label htmlFor="supplierProductType" className="block text-sm font-medium text-gray-700">Product Type</label>
                  <input
                    type="text"
                    id="supplierProductType"
                    name="supplierProductType"
                    value={formData.supplierProductType}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted || loading}
                    className="mt-1 w-full border border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500 px-3 py-2 rounded-md"
                  />
                </motion.div>
                <motion.div variants={inputVariants} whileFocus="focus">
                  <label htmlFor="supplyCapacity" className="block text-sm font-medium text-gray-700">Supply Capacity</label>
                  <input
                    type="text"
                    id="supplyCapacity"
                    name="supplyCapacity"
                    value={formData.supplyCapacity}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted || loading}
                    className="mt-1 w-full border border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500 px-3 py-2 rounded-md"
                  />
                </motion.div>
                <motion.div variants={inputVariants} whileFocus="focus">
                  <label htmlFor="leadTime" className="block text-sm font-medium text-gray-700">Lead Time</label>
                  <input
                    type="text"
                    id="leadTime"
                    name="leadTime"
                    value={formData.leadTime}
                    onChange={handleChange}
                    required
                    disabled={isSubmitted || loading}
                    className="mt-1 w-full border border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500 px-3 py-2 rounded-md"
                  />
                </motion.div>
                <motion.div variants={inputVariants} whileFocus="focus">
                  <label htmlFor="supplierAdditionalInfo" className="block text-sm font-medium text-gray-700">Additional Information</label>
                  <textarea
                    id="supplierAdditionalInfo"
                    name="supplierAdditionalInfo"
                    value={formData.supplierAdditionalInfo}
                    onChange={handleChange}
                    disabled={isSubmitted || loading}
                    className="mt-1 w-full border border-yellow-400 focus:border-yellow-500 focus:ring-yellow-500 px-3 py-2 rounded-md"
                  />
                </motion.div>

                {/* Animated Submit Button */}
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

export default SupplierForm;
