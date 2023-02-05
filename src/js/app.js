
//import 'bootstrap/dist/css/bootstrap.min.css'
import $  from    'jquery'
import axios  from    'axios'

const prodUrl = "http://localhost:8000/api/ProductsApi"

const fetchProducts = async () => {
        const prodsFromDb =  await axios.get(prodUrl)   
        return prodsFromDb.data
}

$(function(){
    $('#btnGetProducts').on('click', async()   => {
        const prods =   await fetchProducts()
        console.log(prods )
    })
})