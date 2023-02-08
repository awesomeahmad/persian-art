
//import 'bootstrap/dist/css/bootstrap.min.css'
import $  from    'jquery'
import axios  from    'axios'

const prodUrl = "http://localhost:8000/api/ProductsApi"

const productSrvr = (function()
{
    const productSrvrApi = {}

    productSrvrApi.get = async() => {
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
    productSrvrApi.getById = async (id) => {
        const prodUrlById = `${prodUrl}/${id}`
        try
        {
            const prodsFromDb = await  axios.get(prodUrlById)   
            return prodsFromDb.data        
        }
        catch(e)
        {
            console.log(e )
        }
    }

    return productSrvrApi
})()

 
const dispProducts = (products) => {
    console.log(products )   
}

$(function(){
    $('#btnGetProducts').on('click', ()   => {
        productSrvr.get().then(dispProducts)
     
    })
})