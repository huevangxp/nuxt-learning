<template>
    <v-container>
        <v-card max-width="400" class="mx-auto">
            <v-img :src="image" alt="iamge"></v-img>
            <v-card-text class="d-none">
                <v-file-input id="picture" v-model="images" @change="uploadImage"></v-file-input>
            </v-card-text>
            <v-card-text>
                <v-btn color="teal" dark @click="getImage"> Choose Image </v-btn>
                <v-btn color="green" dark @click="uploadDB"> Choose Image </v-btn>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            image: '',
            images:''
        }
    },
    methods: {
        uploadImage(e) {
            this.url = URL.createObjectURL(e)
            this.image = this.url
        },
        getImage() {
            document.getElementById('picture').click()
        },
        uploadDB() {
            console.log(this.images);
        }
    }
}
</script>