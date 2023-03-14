<template>
  <v-container fluid>
    <div id="content" ref="testHtml">
      <h2>Bill Details</h2>
      <p>Bill No: {{ billData.billNumber }}</p>
      <p>Date: {{ billData.date }}</p>
      <p>customer name: {{ billData.customerName }}</p>
      <p>Address: {{ billData.address }}</p>
      <p>Phone: {{ billData.phone }}</p>
      <p>Email: {{ billData.email }}</p>
      <p>Amount: {{ billData.amount }}</p>
      <v-btn class="teal" dark @click="generatePDF">Export to PDF</v-btn>
    </div>
  </v-container>
</template>

<script>
// import jsPDF from "jspdf";
// import autoTable from 'jspdf-autotable'
export default {
  data() {
    return {
      billData: {
        billNumber: 1122,
        date: "11/03/2023",
        customerName: "HUEVANG",
        address: "Kang Mai",
        phone: "02078849378",
        email: "huevang933@gmail.com",
        amount: 5000,
      },
    };
  },
  methods: {
    generatePDF() {
      
    },
  },
};
</script>
