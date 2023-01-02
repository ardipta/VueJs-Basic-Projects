<script>
import { ContactService } from '../services/ContactService';
import Spinner from "../components/Spinner.vue"
    export default {
        name: "ViewContact",
        components:{
          Spinner
        },
        data(){
          return{
            contactId: this.$route.params.contactId,
            errorMsg: "",
            contact: null,
            loading: false
          }
        },
        async created(){
          try {
            this.loading=true;
            let response = await ContactService.getContact(this.contactId);
            this.contact = response.data;
            this.loading=false;
          } catch (error) {
            this.loading=false;
            this.errorMsg=error;
          }
        }
    }
</script>

<template>
  <div>
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <p class="h3 text-info fw-bold">
            View Contact
          </p>
        </div>
      </div>
    </div>
    <!--Spinner-->
    <div v-if="loading">
        <div class="container">
            <div class="row">
                <div class="col">
                    <Spinner/>
                </div>
            </div>
        </div>
    </div>
    <!--Error Message-->
    <div v-if="!loading && errorMsg">
        <div class="container">
            <div class="row">
                <div class="col">
                    <p class="h3 text-danger fw-bold">
                        {{ errorMsg }}
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="container mt-3" v-if="contact">
      <div class="row align-items-center">
        <div class="col-md-4">
          <img :src="contact.photo" alt="" class="contact-img">
        </div>
        <div class="col-md-6">
          <ul class="list-group">
              <li class="list-group-item">Name : <span class="fw-bold">{{ contact.name }}</span></li>
              <li class="list-group-item">Email : <span class="fw-bold">{{ contact.email }}</span></li>
              <li class="list-group-item">Mobile : <span class="fw-bold">{{contact.mobile}}</span></li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <router-link class="btn btn-info mt-3 text-white" to="/"><i class="fa fa-arrow-alt-circle-left"></i> Back</router-link>
        </div>
      </div>
    </div>
  </div>
  
</template>

<style>

</style>