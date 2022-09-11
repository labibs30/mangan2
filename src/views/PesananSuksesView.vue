<template>
  <div class="pesanan-sukses">
    <TheNavbar />
    <div class="container">
        <div class="row justify-content-center mt-5">
            <div class="col text-center">
                <img src="../assets/images/menunggu.png" width="300">
                <h1><strong>Sukses!!</strong></h1>
                <h4>Pesanan Anda segera diproses</h4>
                <h4>Sabar ya, selamat menunggu</h4>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";

export default {
  name: "PesananSuksesView",
  components: {
    TheNavbar,
  },
};
</script>

<style>
</style>