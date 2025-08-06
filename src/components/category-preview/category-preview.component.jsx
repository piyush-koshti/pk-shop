import React, { useContext } from "react";
import "./category-preview.styles.scss"
import { Link } from 'react-router-dom';

// import { ProductsContext } from "../../contexts/products.context"

// import HomeHeader from "../home-header/home-header.component";
import ProductCard from "../product-card/product-card"
import { CategoriesContext } from "../../contexts/categories.context";

const CategoryPreview = ({title, products}) => {
    // const { categoriesMap } = useContext(CategoriesContext);

    return(
        <div className="category-preview-container">
            <h2>
                {/* to={`/ecom/shop/${title}`} */}
                <Link className="title" to={title}>{title.toUpperCase()}</Link>
                {/* <span className="title" to="">{title.toUpperCase()}</span> */}
            </h2>
            <div className="preview">
                {
                    products
                        .filter((_, idx) => idx < 4)
                        .map((product) => (
                            <ProductCard key={product.id} product={product} />  
                        ))
                }
            </div>
        </div>
    )
}

export default CategoryPreview;