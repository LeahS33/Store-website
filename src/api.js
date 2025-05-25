
export const fetchData = async () => {
    try {
        const response = await fetch('https://dummyjson.com/products/category/kitchen-accessories');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result.products;
    } catch (error) {
        throw error;
           }
};


// This function fetches data from the API and returns the products.
// If there is an error, it throws the error to be handled by the calling function.