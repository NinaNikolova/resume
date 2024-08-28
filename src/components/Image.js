import React from 'react';


export default function Image({img}) {
  return (
    <header className="image-portfolio">
    <img src={img} alt="ImagePortfolio" />
  </header>
  )
}
