<script>
    import { ContactService } from '../services/ContactService';
    import Spinner from "../components/Spinner.vue"
    export default {
        name: "ContactManager",
        data: function(){
            return {
                loading: false,
                contacts: [],
                errorMsg : null,
                name : '',
            }
        },
        created: async function(){
            try {
                this.loading=true;
                let response = await ContactService.getAllContacts();
                this.contacts=response.data;
                this.loading=false;
            } catch (error) {
               this.errorMsg = error; 
               this.loading=false;
            }
        },
        components: {
            Spinner
        },
        methods:{
            async getSearchData(){
                try {
                    this.loading=true;
                    let response = await ContactService.getAllContacts();
                    this.contacts=response.data.filter((c) => { return c.name.match(this.name)});;
                    this.loading=false;
                } catch (error) {
                    this.errorMsg = error; 
                    this.loading=false;
                }
            },
            async deleteContactById(deleteId){
                try {
                    this.loading=true;
                    let responseDelete = await ContactService.deleteContact(deleteId);
                    if(responseDelete){
                        let response = await ContactService.getAllContacts();
                        this.contacts=response.data;
                        this.loading=false;
                    }
                } catch (error) {
                    this.errorMsg = error; 
                    this.loading=false;
                }
            }
        }
    }
</script>

<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col">
                    <p class="h3 text-info mt-2 fw-bold">
                        Contacts
                        <router-link class="btn btn-info text-white" to="/contact/add">
                            <i class="fa fa-plus"></i> New
                        </router-link>
                    </p>
                    <p class="fst-italic">This is a simple project of contact management system. Where you can create contact, read contact, edit contact, update contact and delete contact in a single page view. If you want you can search the contact from the text field of the text field below.</p>
                    <form @submit.prevent="getSearchData()">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col">
                                        <input v-model="name" type="text" class="form-control" placeholder="Search Name">
                                    </div>
                                    <div class="col">
                                        <input type="submit" class="btn btn-outline-info">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
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
        <div class="container mt-3" v-if="contacts.length > 0">
            <div class="row">
                <div class="col-md-6" v-for="contact of contacts" :key="contact">
                    <div class="card my-2 list-group-item-info shadow-lg">
                        <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-sm-4">
                                    <img :src="contact.photo" alt="" class="contact-img">
                                </div>
                                <div class="col-sm-7">
                                    <ul class="list-group">
                                        <li class="list-group-item">Name : <span class="fw-bold">{{ contact.name }}</span></li>
                                        <li class="list-group-item">Email : <span class="fw-bold">{{ contact.email }}</span></li>
                                        <li class="list-group-item">Mobile : <span class="fw-bold">{{ contact.mobile }}</span></li>
                                    </ul>
                                </div>
                                <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                                    <router-link :to="`/contact/view/${contact.id}`" class="btn btn-warning my-1"><i class="fa fa-eye"></i></router-link>
                                    <router-link :to="`/contact/edit/${contact.id}`" class="btn btn-success my-1"><i class="fa fa-edit"></i></router-link>
                                    <button @click="deleteContactById(contact.id)" class="btn btn-danger"><i class="fa fa-trash-alt my-1"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>