<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Sign up</h1>
                    <p class="text-xs-center"><router-link to="/login"> Need an account? </router-link></p>
                    VALIDATION ERRORS
                    <form @submit.prevent="onSubmit">
                        <fieldset class="form-group">
                            <input type="text" class="form-control form-control-lg" placeholder="username">
                        </fieldset>
                        <fieldset class="form-group">
                            <input type="text" class="form-control form-control-lg" placeholder="email">
                        </fieldset>
                        <fieldset class="form-group">
                            <input type="text" class="form-control form-control-lg" placeholder="password">
                        </fieldset>
                        <button class="btn btn-lg btn-primary pull-xs-right">Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppRegister",
        methods: {
            onSubmit() {
                console.log("submitted form");
            }
        }
    }
</script>