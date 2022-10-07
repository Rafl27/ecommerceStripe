import React from 'react'

const Home = () => {
  return (
    <>
      HeroBanner
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Many types of speakers</p>
      </div>
      <div className='products-container'>
        {['Product 1', 'Product 2', 'Product 3'].map((product) => product
        )}
      </div>
    </>
  )
}

export default Home