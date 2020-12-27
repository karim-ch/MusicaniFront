import React from 'react';

const Layout = ({ children }) => (
  <div>
    <div style={{ border: 'solid 1px', width: '100%', padding: '20px', marginBottom: '5px' }}> Navbar  </div>
    <div>
      {children}
    </div>
  </div>
);

export default Layout;
