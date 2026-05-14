const fetchProducts = async () => {
    try {
        const response = await fetch('/data/products.json')
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
        console.log('Fetched data:', data);
    }catch(e){
        return `Hubo un error al cargar los productos. Vuelve a intentarlo`
    }
}


export default fetchProducts;