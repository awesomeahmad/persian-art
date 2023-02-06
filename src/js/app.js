
//import 'bootstrap/dist/css/bootstrap.min.css'
import $  from    'jquery'
import axios  from    'axios'

const prodUrl = "http://localhost:8000/api/ProductsApi"

const fetchProducts =  () => {
    try
    {
        const prodsFromDb =   axios.get(prodUrl)   
        return prodsFromDb.data        
    }
    catch(e)
    {
        console.log(e )
    }
       
}

$(function(){
    $('#btnGetProducts').on('click', async()   => {
        const prods =   await fetchProducts()
        console.log(prods )
    })
})