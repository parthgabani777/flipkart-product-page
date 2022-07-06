import { useState } from "react";
import "./product-page.css";
import { Filters } from "./Filters";
import { Product } from "./Product";

export const ProductPage = () => {
    const [filters, setFilters] = useState({
        sort: "lowToHigh",
        size: [],
        brand: [],
        idealFor: [],
    });

    return (
        <main className="product-page">
            <Filters filters={filters} setFilters={setFilters} />
            <Product filters={filters} />
        </main>
    );
};
