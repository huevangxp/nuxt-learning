<template>
    <div>
        <v-text-field v-model="text" label="QR Code" @input="readQrCode"/>
        <v-text-field v-model="barcode" label="QR Code"/>
        <v-btn color="teal" dark @click="generate">generate</v-btn>
        <!-- <vue-barcode value="1234567890" tag="img"></vue-barcode> -->
       <div v-if="show.length > 0">
        <vue-barcode :value="show" tag="svg"></vue-barcode>
       </div>
       <div v-else>
            please input number for generate barcode
       </div>
    </div>
  </template>

<script>
import VueBarcode from '@chenfengyuan/vue-barcode';
// import jsbarcode from 'jsbarcode@3'
export default {
    components: {
        VueBarcode
    },
        data() {
            return {
                show:'',
                barcode:'',
                text:'',
            }
    },
    methods: {
        readQrCode(e) {
            // jsbarcode(e, {fom})
        },
        generate() {
            this.show = this.barcode
        }
        }
    }
</script>