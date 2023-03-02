<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Sign up</h1>
                    <p class="text-xs-center"><router-link to="/login"> Need an account? </router-link></p>
                    <AppValidationErrors v-if="validationErrors" :validationErrors="validationErrors" />
                    <form @submit.prevent="onSubmit">
                        <fieldset class="form-group">
                            <input type="text" class="form-control form-control-lg" placeholder="username" v-model="username">
                        </fieldset>
                        <fieldset class="form-group">
                            <input type="text" class="form-control form-control-lg" placeholder="email" v-model="email">
                        </fieldset>
                        <fieldset class="form-group">
                            <input type="text" class="form-control form-control-lg" placeholder="password" v-model="password">
                        </fieldset>
                        <button class="btn btn-lg btn-primary pull-xs-right" :disabled="isSubmitting">Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AppValidationErrors from '@/components/ValidationErrors';
    import { actionsTypes } from '@/store/modules/auth';

    export default {
        name: "AppRegister",
        components: {
            AppValidationErrors
        },
        data() {
            return {
                email: '',
                password: '',
                username: ''
            }
        },
        computed: {
            isSubmitting() {
                return this.$store.state.auth.isSubmitting
            },
            validationErrors() {
                return this.$store.state.auth.validationErrors
            }
        },
        methods: {
            onSubmit() {
                console.log("submitted form");
                this.$store.dispatch(actionsTypes.register, {
                    email: this.email,
                    password: this.password,
                    username: this.username
                })
                .then(user => {
                    console.log('successfully register user', user);
                    this.$router.push({name: 'home'})
                });
            }
        }
    }
</script>