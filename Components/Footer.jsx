import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '20px', textAlign: 'center', background: '#f1f1f1' }}>
      <p>&copy; {new Date().getFullYear()} My Static Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;