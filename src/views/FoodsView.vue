<template>
  <div>
    <TheNavbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Daftar <strong>Makanan</strong></h2>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Cari makanan kesukaanmu"
              aria-label="Cari makanan kesukaanmu"
              aria-describedby="basic-addon1"
              @keyup="searchFood"
            />
            <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              <b-icon-search></b-icon-search>
            </span>

            </div>

          </div>
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
import TheNavbar from "@/components/TheNavbar.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";
export default {
  name: "FoodsView",
  components: {
    TheNavbar,
    CardProduct,
  },
  data() {
    return {
      products: [],
      search:''
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
    searchFood(){
      axios
        .get("https://my-json-server.typicode.com/labibs30/dbjson/products?q=" + this.search)
        .then((response) =>this.setProduct(response.data))
        .catch((error) =>console.log("Gagal : ", error));
    }
  },
  mounted() {
    axios
      .get("https://my-json-server.typicode.com/labibs30/dbjson/products")
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

<style>
</style>