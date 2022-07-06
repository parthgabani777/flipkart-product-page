export const Filters = ({ filters, setFilters }) => {
    const {
        sort: sortFilter,
        size: sizeFilter,
        brand: brandFilter,
        idealFor: idealForFilter,
    } = filters;

    const sizes = ["S", "M", "L", "XL"];
    const brands = [
        "VAN HEUSEN",
        "LEE",
        "LOUIS PHILIPPE",
        "JACK & JONES",
        "soch",
        "pia",
    ];
    const idealFor = ["Men", "Women"];

    const changeSortFilter = (e) => {
        switch (e.target.id) {
            case "price-high-to-low":
                setFilters({ ...filters, sort: "highToLow" });
                return;
            case "price-low-to-high":
                setFilters({ ...filters, sort: "lowToHigh" });
                return;
        }
    };

    const changeSizeFilter = (e) => {
        const currentSize = e.target.id;

        if (e.target.checked) {
            return setFilters({
                ...filters,
                size: [...sizeFilter, currentSize],
            });
        }
        let updatedSizeFilter = sizeFilter.filter(
            (size) => size !== currentSize
        );

        setFilters({ ...filters, size: updatedSizeFilter });
    };

    const changeBrandFilter = (e) => {
        const currentBrand = e.target.id;

        if (e.target.checked) {
            setFilters({
                ...filters,
                brand: [...brandFilter, currentBrand],
            });
            return;
        }
        let updatedBrandFilter = brandFilter.filter(
            (brand) => brand !== currentBrand
        );

        setFilters({ ...filters, brand: updatedBrandFilter });
    };

    const changeIdealForFilter = (e) => {
        const currentIdealFor = e.target.id;

        if (e.target.checked) {
            setFilters({
                ...filters,
                idealFor: [...idealForFilter, currentIdealFor],
            });
            return;
        }
        let updatedIdealForFilter = idealForFilter.filter(
            (idealFor) => idealFor !== currentIdealFor
        );

        setFilters({ ...filters, idealFor: updatedIdealForFilter });
    };

    const resetFilters = () => {
        setFilters({
            sort: "lowToHigh",
            size: [],
            brand: [],
            idealFor: [],
        });
    };

    return (
        <aside className="filter-sidebar">
            <div className="filter-sidebar-header">
                <h1>Filters</h1>
                <button onClick={resetFilters}>Reset</button>
            </div>

            <div className="filter filter-sort">
                <div className="py-1">
                    <input
                        type="radio"
                        id="price-high-to-low"
                        name="sort"
                        checked={sortFilter === "highToLow"}
                        onChange={changeSortFilter}
                    />
                    <label htmlFor="price-high-to-low">
                        Price - High to Low
                    </label>
                </div>
                <div className="py-1">
                    <input
                        type="radio"
                        id="price-low-to-high"
                        name="sort"
                        checked={sortFilter === "lowToHigh"}
                        onChange={changeSortFilter}
                    />
                    <label htmlFor="price-low-to-high">
                        Price - Low to High
                    </label>
                </div>
            </div>

            <div className="filter filter-size">
                <h3>Size</h3>
                {sizes.map((size) => (
                    <div className="py-1" key={size}>
                        <input
                            type="checkbox"
                            id={size}
                            checked={sizeFilter.includes(size)}
                            onChange={changeSizeFilter}
                        />
                        <label htmlFor={size}>{size}</label>
                    </div>
                ))}
            </div>

            <div className="filter filter-brand">
                <h3>Brand</h3>
                {brands.map((brand) => (
                    <div className="py-1" key={brand}>
                        <input
                            type="checkbox"
                            id={brand}
                            checked={brandFilter.includes(brand)}
                            onChange={changeBrandFilter}
                        />
                        <label htmlFor={brand}>{brand}</label>
                    </div>
                ))}
            </div>

            <div className="filter filter-ideal-for">
                <h3>Ideal htmlFor</h3>
                {idealFor.map((gender) => (
                    <div className="py-1" key={gender}>
                        <input
                            type="checkbox"
                            id={gender}
                            checked={idealForFilter.includes(gender)}
                            onChange={changeIdealForFilter}
                        />
                        <label htmlFor={gender}>{gender}</label>
                    </div>
                ))}
            </div>
        </aside>
    );
};
