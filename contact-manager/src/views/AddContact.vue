<script>
import { ContactService } from '../services/ContactService'
    export default {
        name: "AddContact",
        data(){
          return{
            contact:{
              name: "",
              photo: "",
              mobile: "",
              email: "",
            },
            errorMsg: ""
          }
        },
        methods:{
          async submitCreate(){
            try {
              let response = ContactService.createContact(this.contact);
              if(response){
                return this.$router.push("/");
              }
              else{
                return this.$router.push("/contact/add");
              }
            } catch (error) {
              this.errorMsg=error;
            }
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
            Add Contact
          </p>
        </div>
      </div>
    </div>
    <!--Error Message-->
    <div v-if="errorMsg">
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
    <div class="container mt-3">
      <div class="row">
        <div class="col-md-5">
          <form @submit.prevent="submitCreate()">
            <div class="mb-2">
              <input required v-model="contact.name" type="text" class="form-control" placeholder="Enter Name">
            </div>
            <div class="mb-2">
              <input required v-model="contact.photo" type="text" class="form-control" placeholder="Enter Image URL">
            </div>
            <div class="mb-2">
              <input required v-model="contact.email" type="email" class="form-control" placeholder="Enter Email">
            </div>
            <div class="mb-2">
              <input required v-model="contact.mobile" type="tel" class="form-control" placeholder="Enter Mobile">
            </div>
            <div class="mb-2">
              <input type="submit" class="btn btn-info text-white" value="Create">
            </div>
          </form>
        </div>
        <div class="col-md-4">
          <img :src="contact.photo" class="contact-img">
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>