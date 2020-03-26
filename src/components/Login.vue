<template>
    <div class="row">
        <div>
            <div>
                <p>Logged in as: <br> {{ currentUser }} </p>
            </div>
            <form action="">
                <div class="form-group row">
                    <label>Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="user.email">
                </div>
                <div class="form-group row">
                    <label>Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter password" v-model="user.password">
                </div>
                <button class="btn btn-primary" type="button" @click.prevent="signIn">Sign in</button>
                <button class="btn btn-danger" type="button" @click.prevent="signOut">Sign out</button>
            </form>
        </div>
    </div>
</template>

<script>
    import {firebaseApp} from '../firebaseConfig';
    import 'firebase/auth';
    import 'firebase/database';
    import { store } from '../store/store';

    firebaseApp.auth().onAuthStateChanged((user) => {
        if(user){
            store.dispatch('setUser', user);
        } else {
            store.dispatch('setUser', null);
        }
    });

    export default {
        data() {
            return {
                user: {
                    email: "",
                    password: ""
                }
            }
        },
        methods: {
            signIn() {
                let email = this.user.email;
                let password = this.user.password;
                firebaseApp.auth().signInWithEmailAndPassword(email, password).catch(function(error){
                    let errorCode = error.code;
                    let errMessage = error.message;
                    if(errorCode === 'auth/wrong-password'){
                        alert("Wrong password");
                    } else {
                        alert(errMessage);
                    }
                })
            },
            signOut(){
                firebaseApp.auth().signOut().then(()=>{
                    alert("Log out");
                }).catch(() => {
                    alert("error.");
                })
            }
        },
        computed: {
            currentUser() {
                return this.$store.getters.currentUser;
            }
        },
    }
</script>