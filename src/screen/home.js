import React, { useState } from 'react'
import Header from '../layout/header'
import Slideshow from "../layout/home/slider";
import Product from "../layout/home/product";


function Home() {
    const [condition, setCondition] = useState(true)


    return <>
        <Header />
        <Slideshow />
        {condition ? <Product /> : null}
    </>
}
export default Home