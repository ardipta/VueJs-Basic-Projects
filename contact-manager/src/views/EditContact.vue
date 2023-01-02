<script>
    import Spinner from "../components/Spinner.vue"
    import { ContactService } from '../services/ContactService';
    export default {
        name: "EditContact",
        components:{
          Spinner
        },
        data(){
          return{
            contactId: this.$route.params.contactId,
            errorMsg: "",
            loading: false,
            contact: {
              name: '',
              email: '',
              mobile: '',
              photo: '',
            }
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
        },
        methods:{
          async submitUpdate(){
            try {
              let response = ContactService.updateContact(this.contact, this.contactId);
              if(response){
                return this.$router.push({ path: '/', replace: true });
              }
              else{
                return this.$router.push(`/contact/edit/${this.contactId}`);
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
            Edit Contact
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
    <div class="container mt-3">
      <div class="row">
        <div class="col-md-5">
          <form @submit.prevent="submitUpdate()">
            <div class="mb-2">
              <input required type="text" v-model="contact.name" class="form-control" placeholder="Enter Name">
            </div>
            <div class="mb-2">
              <input required type="text" v-model="contact.photo" class="form-control" placeholder="Enter Image URL">
            </div>
            <div class="mb-2">
              <input required type="email" v-model="contact.email" class="form-control" placeholder="Enter Email">
            </div>
            <div class="mb-2">
              <input required type="tel" v-model="contact.mobile" class="form-control" placeholder="Enter Mobile">
            </div>
            <div class="mb-2">
              <router-link class="btn btn-warning text-white" style="margin-right: 5px" to="/"><i class="fa fa-arrow-alt-circle-left"></i> Back</router-link>
              <input type="submit" class="btn btn-info text-white" value="Update">
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