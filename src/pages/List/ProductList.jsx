import React from 'react'
import './list.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import ProductDatatable from '../../components/DataTable/ProductDataTable';


const ProductList = () => {
  return (
    
      <div className="list">
        <Sidebar />
        <div className="list-container">
          <Navbar />
          <ProductDatatable />
        </div>
      </div>
  )
}

export default ProductList