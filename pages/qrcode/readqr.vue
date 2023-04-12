<template>
  <div>
    <h1>Scan QR Code</h1>
    <!-- <qrcode-stream @decode="onDecode" /> -->
    <StreamBarcodeReader
      @decode="(a) => onDecode(a)"  
      @loaded="() => onLoaded()"
    ></StreamBarcodeReader>
    {{ text }}
  </div>
</template>

<script>
// import  QrcodeStream  from "vue-qrcode-reader";
import { StreamBarcodeReader } from "vue-barcode-reader";
export default {
    components: {
    StreamBarcodeReader,
    },
  data() {
    return {
        text: "",
      id: null,
    }
  },
    methods: {
        // onDecode(e) {
        // console.log(e);
        // }
    onDecode(a) {
      console.log(a);
            this.text = a;
            const id = a
            if (id) {
        this.$router.push(`/qrcode/${id}`)
      }
    //   if (this.id) clearTimeout(this.id);
    //   this.id = setTimeout(() => {
    //     if (this.text === a) {
    //       this.text = "";
    //     }
    //   }, 5000);
    },
    onLoaded() {
      console.log("load");
    },
  },
};
</script>
