<template>
  <div class="home">
    <TheNavbar />
    <div class="container">
      <TheHero />
      <div class="row mt-4">
        <div class="col-md-6">
          <h2>Best <strong>Food</strong></h2>
        </div>
        <div class="col-md-6">
          <router-link to="/foods" class="btn btn-success float-right"
            ><b-icon-eye></b-icon-eye> Lihat Semua</router-link
          >
        </div>
      </div>
      <div class="row mb-4">
        <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import TheNavbar from "@/components/TheNavbar.vue";
import TheHero from "@/components/TheHero.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    TheNavbar,
    TheHero,
    CardProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("https://my-json-server.typicode.com/labibs30/dbjson/best-products")
      .then((response) =>
        // handle success
        // console.log("Berhasil", response);
        this.setProduct(response.data)
      )
      .catch((error) =>
        // handle error
        console.log("Gagal : ", error)
      );
  },
};
</script>
