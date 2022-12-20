<template>
    <div>
        <div class="d-flex">
            <div class="image-preview d-flex justify-center align-start pa-2 ma-6" style="width:50vw; border:1px solid black" v-if="imageData.length > 0">
            <img class="preview" :src="imageData">
            </div>
            <div class="image-preview d-flex justify-center align-start pa-2 ma-6" style="width:50vw; border:1px solid black">
                <img class="preview" :src="imgdata">
            </div>
        </div>
        <div class="file-upload-form d-flex justify-start">
            <input class="input-div" type="file" @change="previewImage" accept="image/*">
            <div class="d-flex justify-start align-center">
                <v-btn v-on:click="convertImage"
                color="primary"
                class="ma-2 input-div"
                large
                
                >
                    <v-icon dark>
                        mdi-autorenew
                    </v-icon>
                    Convert
                </v-btn>
            </div>
            <div class="d-flex justify-start align-center">
                <a download :href="imgdata" @click="downloadimg">
                    <v-btn
                    color="primary"
                    class="ma-2 input-div"
                    large
                    >
                        <v-icon dark>
                            mdi-download-circle
                        </v-icon>
                        Download
                    </v-btn>
                </a>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        
    data() {
        return {
            imageData:""
        }
    },
    computed: {
        imgdata() {
            return this.$store.state.imagedata;
        }
    },
    methods: {
        previewImage(event) {
            var input = event.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.imageData = e.target.result;
                    this.loadedimg = true;
                }
                reader.readAsDataURL(input.files[0]);
            }
        },
        convertImage() {
            this.$store.dispatch('imageBg', this.imageData)
        },
        downloadimg(e) {
            if(this.imgdata.length<=0){
                e.preventDefault();
            }
            else{
                this.loadedimg = false;
                this.$store.state.imagedata;
            }
        }
    }
    };
    

</script>

<style>
    .file-upload-form, .image-preview {
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        padding: 20px;
    }
    img.preview {
        box-shadow: 10px inset black;
        width: 250px;
        border-radius: 10px;
        padding: 5px;
    }
    input[type=file]::file-selector-button {
        margin-right: 20px;
        border: none;
        background: #1976D2;
        padding: 10px 20px;
        border-radius: 10px;
        color: #fff;
        cursor: pointer;
        transition: background .2s ease-in-out;
    }

    input[type=file]::file-selector-button:hover {
        background: #1976D2;
    }
    .input-div{
        border: 1px solid black;
        border-radius: 10px;
        padding: 20px;
        margin: 10px;
    }
</style>