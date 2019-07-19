
import axios from 'axios';

function login(req) {
    return new Promise(function(res,rej){
        axios.post('user/login',req)
        .then(resp=>{
            res(resp.data);
        });
    })
}

export default loginService = {
    login
};
