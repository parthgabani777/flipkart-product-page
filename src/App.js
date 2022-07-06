import "./App.css";
import { ProductPage } from "./pages/product/product-page";

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src="	https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" />
            </div>

            <button className="btn-auth">Login</button>
        </header>
    );
}

function App() {
    return (
        <div className="App">
            <Header />
            <ProductPage />
        </div>
    );
}

export default App;
