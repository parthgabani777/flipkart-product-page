export const filterBySize = (products, size) => {
    if (size.length === 0) return products;
    return products.filter((product) => {
        const productSize = product.size;
        let flag = false;
        size.forEach((item) => {
            if (productSize.includes(item)) {
                flag = true;
            }
        });
        return flag;
    });
};

export const filterByBrand = (products, brand) => {
    if (brand.length === 0) return products;
    return products.filter((product) => brand.includes(product.brand));
};

export const filterByIdealFor = (products, idealFor) => {
    if (idealFor.length === 0) return products;
    return products.filter((product) => idealFor.includes(product.idealFor));
};

export const sortProducts = (product, sort) => {
    if (sort === "lowToHigh") {
        return product.sort((a, b) => a.price - b.price);
    }
    return product.sort((a, b) => b.price - a.price);
};
