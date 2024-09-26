// Layout.js
import { Outlet } from 'react-router-dom';
import WhatsAppEnquiry from './components/WhatsAppEnquiry';

const Layout = () => {
  return (
    <div>
      {/* WhatsApp Enquiry Section */}
      <WhatsAppEnquiry show={true} /> {/* Always show it */}

      {/* Main content goes here */}
      <Outlet />
    </div>
  );
};

export default Layout;
