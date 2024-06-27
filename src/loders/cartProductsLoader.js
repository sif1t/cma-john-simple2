import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader =async () => {
    const loadedProducts = await fetch ('products.json')
    const products = await loadedProducts.json();
    
    // ig cart data is in database, you have to use async await to fetch data from database
    const storedCart = getShoppingCart();
    const savedCart = [];

    console.log(storedCart); 
    for (const id in storedCart) {
        const addedProducts = products.find(pd =>pd.id === id);
        if (addedProducts){
            const quantity = storedCart[id];
            addedProducts.quantity = quantity;
            savedCart.push(addedProducts);
        }
    }
      // if you need to send  two thing 
      //option 1: return an object
        // return [savedCart, products];
        //option 2: return an array
        // return {cart:savedCart, products};
        return savedCart;
}
export default cartProductsLoader;