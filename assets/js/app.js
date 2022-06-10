
let allProducts = [];

const filter ={
    searchITem : ""
};

document.addEventListener("DOMContentLoaded" , ()=>{
    axios.get("http://localhost:3000/items").
    then((res) =>{
        allProducts = res.data;
        // render products on Dom 
    }). 
    catch((err) => console.log(err));
});

function renderProducts(products , filter){
    
}