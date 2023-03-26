<template>
    <div>
        <ArticleForm :initialValues="initialValues" :errors="validationErrors" :isSubmitting="isSubmitting" @articleSubmit="onSubmit"/>
    </div>
</template>

<script>
    import { actionTypes } from '@/store/modules/createArticle';
    import { mapState } from 'vuex';
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
            }
        },
        computed: {
            ...mapState({
                isSubmitting: state => state.createArticle.isSubmitting,
                validationErrors: state => state.createArticle.validationErrors,
            })
        },
        methods: {
            onSubmit(articleInput) {
                this.$store.dispatch(actionTypes.createArticle, {articleInput})
                    .then(article => {
                        this.$router.push({name: 'article', params: {slug: article.slug}})
                    })
            }
        }
    };
</script>