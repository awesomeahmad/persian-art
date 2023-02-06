
//import 'bootstrap/dist/css/bootstrap.min.css'
import $  from    'jquery'
import axios  from    'axios'

const prodUrl = "http://localhost:8000/api/ProductsApi"

const productSrvr = (function()
{
    productSrvr.get = async() => {
        try
        {
            const prodsFromDb = await  axios.get(prodUrl)   
            return prodsFromDb.data        
        }
        catch(e)
        {
            console.log(e )
        }
    }
    return productSrvr
})()
 
const dispProducts = (products) => {
    console.log(products )   
}

$(function(){
    $('#btnGetProducts').on('click', ()   => {
        productSrvr.get().done(dispProducts)
     
    })
})