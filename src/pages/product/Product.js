import axios from "axios";
import { useEffect, useState } from "react";
import {
    filterBySize,
    filterByBrand,
    filterByIdealFor,
    sortProducts,
} from "./filter-utils";
import { ProductCard } from "../../components/product-card";

export const Product = ({ filters }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get("productData.json");
            setProducts(data);
        })();
    }, []);

    const { sort, size, brand, idealFor } = filters;
    const sizeFilteredProducts = filterBySize(products, size);
    const brandFilteredProducts = filterByBrand(sizeFilteredProducts, brand);
    const idealForFilteredProducts = filterByIdealFor(
        brandFilteredProducts,
        idealFor
    );
    const sortedProducts = sortProducts(idealForFilteredProducts, sort);

    return (
        <section className="product-container">
            {sortedProducts.map((product) => (
                <ProductCard product={product} key={product.title} />
            ))}
        </section>
    );
};
