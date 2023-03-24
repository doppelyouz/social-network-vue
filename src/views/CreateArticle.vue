<template>
    <div>
        Create Article
        <ArticleForm :initialValues="initialValues" :errors="validationErrors" :isSubmitting="isSubmitting" @articleSubmit="onSubmit"/>
    </div>
</template>

<script>
    import ArticleForm from '../components/ArticleForm.vue';
    export default {
        name: 'AppCreateArticle',
        components: {ArticleForm},
        data() {
            return {
                initialValues: {
                    title: '',
                    description: '',
                    body: '',
                    tagList: []
                },
                validationErrors: null,
                isSubmitting: false
            }
        },
        methods: {
            onSubmit(data) {
                console.log(data);
            }
        }
    };
</script>