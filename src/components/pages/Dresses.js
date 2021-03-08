import React from 'react';
import '../../App.css';
import '../Pages.css';

export default function Dresses() {
  return (
    <>
      <div className='accessoriesPage'>
            <div className='customHeader'>
            <img src={process.env.PUBLIC_URL + '/images/b.jpg'} alt='#' />
            </div>
            <div className='featuredProducts'>
                <div>
                  <h1> DRESSES </h1>
                </div>
                <div className='productsGrid'>
                <div className='item1'> 
              <img src={ process.env.PUBLIC_URL + '/images/D1.jpg'} alt='#' className='item1Img'/>
              <h3> Kente fabric</h3>
              <h3> Multi Colored </h3>
              <p> From RMB250</p>
              </div>
              <div className='item2'>
              <img src={ process.env.PUBLIC_URL + '/images/D10.jpg'}alt='#' className='item2Img'/>
              <h3> Kente fabric</h3>
              <h3> Multi Colored </h3>
              <p> From RMB250</p>
              </div>
              <div className='item3'>
              <img src={ process.env.PUBLIC_URL + '/images/D3.jpg'} alt='#' className='item3Img'/>
              <h3> Kente fabric</h3>
              <h3> Multi Colored </h3>
              <p> From RMB250</p>
              </div>
              <div className='item4'>
              <img src={ process.env.PUBLIC_URL + '/images/D4.jpg'} alt='#' className='item4Img'/>
              <h3> Kente fabric</h3>
              <h3> Multi Colored </h3>
              <p> From RMB250</p>
              </div>
              <div className='item5'> 
              <img src={ process.env.PUBLIC_URL + '/images/D5.jpg'} alt='#' className='item5Img'/>
              <h3> Kente fabric</h3>
              <h3> Multi Colored </h3>
              <p> From RMB250</p>
              </div>
              <div className='item6'>
              <img src={ process.env.PUBLIC_URL + '/images/D6.jpg'} alt='#' className='item6Img'/>
              <h3> Kente fabric</h3>
              <h3> Multi Colored </h3>
              <p> From RMB200</p>
              </div>
              <div className='item7'>
              <img src={ process.env.PUBLIC_URL + '/images/D7.jpg'} alt='#' className='item7Img'/>
              <h3> Kente fabric</h3>
              <h3> Multi Colored </h3>
              <p> From RMB250</p>
              </div>
              <div className='item8'>
              <img src={ process.env.PUBLIC_URL + '/images/D8.jpg'} alt='#' className='item8Img'/>
              <h3> Kente fabric</h3>
              <h3> Multi Colored </h3>
              <p> From RMB250</p>
              </div>    
              <div className='item3'>
              <img src={ process.env.PUBLIC_URL + '/images/D9.jpg'} alt='#' className='item7Img'/>
              <h3> Kente fabric</h3>
              <h3> Multi Colored </h3>
              <p> From RMB250</p>
              </div>
              <div className='item4'>
              <img src={ process.env.PUBLIC_URL + '/images/D2.jpg'} alt='#' className='item8Img'/>
              <h3> Kente fabric</h3>
              <h3> Multi Colored </h3>
              <p> From RMB250</p>
              </div>           
                </div>
              </div>

            </div>
    </>
  );
}
