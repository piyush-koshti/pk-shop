// import React, { useContext, Fragment } from "react";
import { React, Route, Routes } from "react-router-dom";
import "./shop.styles.scss"
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

// import { ProductsContext } from "../../contexts/products.context"

// import HomeHeader from "../home-header/home-header.component";
// import Footer from '../footer/footer.component';
// import ProductCard from "../product-card/product-card"
// import { CategoriesContext } from "../../contexts/categories.context";
// import CategoryPreview from "../category-preview/category-preview.component";

const Shop = () => {
    // const { products } = useContext(CategoriesContext)
    // const { categoriesMap } = useContext(CategoriesContext);

    return(
        // 1
        // <Fragment>
        //     {Object.keys(categoriesMap).map(title => (
        //         <Fragment key={title}>
        //             <h2 className="text-center">{title}</h2>
        //             <div className="products-container pb-5 px-0 text-center container">
        //                 {categoriesMap[title].map((product) => (
        //                     <ProductCard key={product.id} product={product} />
        //                 ))} 
        //             </div>
        //         </Fragment>
        //     ))}
        // </Fragment>
        // 2
        // <div className="shop-container">
        //     {Object.keys(categoriesMap).map(title => {
        //         const products = categoriesMap[title];
        //         return <CategoryPreview key={title} title={title} products={products} />
        //     })}
        // </div>
        // 3
        <Routes>
            <Route 
                index
                element={<CategoriesPreview/>} 
            />
            <Route 
                path=":category"
                element={<Category/>} 
            />
            {/* Add more routes here as needed */}
        </Routes>
    )
}

export default Shop