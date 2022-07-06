import "./product-card.css";

export const ProductCard = ({ product }) => {
    const { title, image, price, brand, size } = product;
    return (
        <div className="product-card">
            <img className="product-img" src={image}></img>

            <div className="product-info">
                <p className="product-brand">{brand}</p>
                <p className="product-title">
                    {title.length < 25 ? title : title.slice(0, 25) + "..."}
                </p>
                <p>Size: {size.map((item) => `${item} `)}</p>
                <h3 className="product-price">$ {price}</h3>
            </div>
        </div>
    );
};
