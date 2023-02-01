import axios from 'axios';
export default class UtilsService {
    getItems(url) {
        return axios.get(url).then(res => res.data);
    }
   getItemsById(url,id) {
        return axios.get(`${url}/${id}`).then(res => res.data);
    }
    deleteItem(url,id){
        alert("aaaaa");
       
        return axios.delete(`${url}/${id}`).then(res => res.data);
        console.log("the product has been deleted successfully");
    }
   /* additem(obj){
        console.log("obj", obj);
        
    }*/

    additem(url,body){
        console.log("body", body);
        return axios.post(`${url}/${body}`).then(res => res.data);
        console.log("after");
        alert("add");
    
    }
    createItem(url,obj) {
        console.log(obj);
           return  axios.post(`${url}`, obj).then(res => res.data); 
         
       }
   /* createItem = (url,obj) =>
    {
    return axios.post(url,obj).then(res=>res.data);
    }*/
}

    
    