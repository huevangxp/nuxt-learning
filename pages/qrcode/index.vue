<template>
    <div>
      <v-text-field
       v-model="text"
       label="QR Code"
        @input="readQrCode" />
      <v-img v-if="images.length > 0" :src="images" width="300" height="300" tag="svg"></v-img> 
      <v-card v-else color="teal">
      </v-card>
      <v-btn color="teal" dark to="/qrcode/readqr">read qr</v-btn>
      <v-btn color="teal" dark to="/qrcode/barcode">generate barcode</v-btn>
    </div>
  </template>
  
<script>
  import QRCode from "qrcode";
  
  export default {
    name: "QrCodeReader",
    data() {
      return {
          text: "",
        images:''
      };
    },
    methods: {
     async readQrCode() {
            if (this.text) {
                const img = await QRCode.toDataURL(this.text);
            this.images = img
            } else {
                console.log('no text');
            }

      },
    },
  };
  </script>
  