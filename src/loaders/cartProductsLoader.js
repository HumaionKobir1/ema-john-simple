import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loaddedProducts = await fetch('products.json');
    const products = await loaddedProducts.json();
    
    const storedCart = getShoppingCart();
    const savedCart = [];

    for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    // if you need to return two thinks
    
    // retun [product, saveCart]

    // Another options
    // return {product, saveCart}

    return savedCart;
}
export default cartProductsLoader;