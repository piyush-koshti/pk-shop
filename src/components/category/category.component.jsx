import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./category.styles.scss";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../product-card/product-card";

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);

    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        const categoryProducts = categoriesMap[category];

        // if (categoryProducts) {
            setProducts(categoryProducts);
        // }
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <h2 className="text-center category-title">
                <span>{category.toUpperCase()}</span>
            </h2>
            <div className="category-css-container">
                {products?.map((product) => (
                    product && <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </Fragment>
    );

};

export default Category;