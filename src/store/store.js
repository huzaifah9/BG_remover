import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)


export default new Vuex.Store({
    state:{
            imagedata: '',
    },
    mutations:{
   imageBg : (state, imgData) => {
            state.imagedata = imgData;
        }
    },
    actions:{
        imageBg : (context, imageData) => {
    
            fetch('https://api.remove.bg/v1.0/removebg', {
                method: 'post', /* or POST/PUT/PATCH/DELETE */
                headers: {
                'X-Api-Key': '3jfUdsg6jWNvD9iuGsfvGnKE', 
                'Content-Type': 'application/json'
                }, 
                responeType: 'arrayBuffer',
                body: JSON.stringify({
                    "image_file_b64": imageData,
                })
            })
            .then((res) => res.arrayBuffer())
            .then(res => {
        
                const img_64 = btoa([].reduce.call(new Uint8Array(res),function(p,c){return p+String.fromCharCode(c)},''))
                var imgCon = "data:image/png;base64," + img_64;
                context.commit('imageBg', imgCon);
            });
            }
    }
});