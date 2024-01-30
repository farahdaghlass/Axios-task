async function getUser() {
    const response = await axios.get('https://dummyjson.com/products');
    const data = response.data
    const products = data.products
    console.log(products)
    const result = products.map(function (products) {
        
       
        return `<div class="box">
<h2> ${products.title}</h2>
<p> ${ products.price}</p>
<img src= ${products.thumbnail} alt ="test"/>
</div>
        `
    }).join('');
document.querySelector(".product .row").innerHTML = result
}


getUser();