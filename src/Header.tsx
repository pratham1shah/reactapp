import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="header">
      <h1>Welcome To TrendLens</h1>
      <div className="navigation">
        <button 
        style={{
            position: "fixed",
            top: 15,
            right: 15,
          }}
        >About</button>
        
        <button>Explore</button>
      </div>
    </div>
  );
};

export default Header;
