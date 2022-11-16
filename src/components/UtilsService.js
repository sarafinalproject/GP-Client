import axios from 'axios';
export default class UtilsService {
    getItems(url) {
        return axios.get(url).then(res => res.data);
    }
   getItemsById(url,id) {
        return axios.get(`${url}/${id}`).then(res => res.data);
    }
}




    
    