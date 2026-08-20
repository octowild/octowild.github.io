import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Layout = ({ children }) => {
    return (
        <div className="layout-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />

            {/* The 'children' prop renders whatever is passed inside the Layout tags */}
            <main style={{ flex: 1 }}>
                {children}
            </main>

            {/* Your reusable footer stays at the bottom */}
            <Footer />
        </div>
    );
};


export default Layout;