import React, { useState } from 'react';
import Card from '../../components/card'

function Product() {
    const [product, setProduct] = useState([
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1605814220/N41044065A_1.jpg',
            title: 'IPhone 12 pro max',
            description: '256 GB',
            price: '4682 AED'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1606407160/N39843845A_1.jpg',
            title: 'Smart Watch',
            description: '256 GB',
            price: '46 AED'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1610036835/N40633047A_1.jpg',
            title: 'Play Station 5',
            description: '256 GB',
            price: '8 AED'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1620143582/N36633451A_1.jpg',
            title: 'Samsung LED',
            description: '50 inch',
            price: '1999 AED'
        },
    ])



    return <>
        <div className='row p-0 m-0'>
            {product.map((e, i) => {
                return <div key={i} className='col-md-3'>
                    <Card imageSrc={e.imageSrc} title={e.title} description={e.description} price={e.price} />
                </div>
            })}

        </div>
    </>
}
export default Product