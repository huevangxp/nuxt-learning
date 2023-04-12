<template>
  <v-container>
    <v-carousel cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover>
      <template v-slot:prev="{ on, attrs }">
        <v-btn v-bind="attrs" icon v-on="on"> <v-icon>mdi-skip-backward</v-icon> </v-btn>
      </template>
      <template v-slot:next="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on"> <v-icon>mdi-skip-forward</v-icon> </v-btn>
      </template>
      <v-carousel-item
        v-for="(item, i) in image"
        :key="i"
        :src="item"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <v-card max-width="400" class="mx-auto">
      <v-card-text class="d-none">
        <v-file-input
          id="picture"
          v-model="images"
          @change="uploadImage"
          multiple
        ></v-file-input>
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
  name: "MultipleImagePages",
  data() {
    return {
      image: [],
      images: "",
    };
  },
  methods: {
    uploadImage(e) {
      e.forEach((el) => {
        this.url = URL.createObjectURL(el);
        this.image.push(this.url);
      });
    },
    getImage() {
      document.getElementById("picture").click();
    },
    uploadDB() {
      const form = new FormData();
      this.images.forEach((el) => {
        form.append("image", el);
      });
      console.log(form);
    },
  },
};
</script>
