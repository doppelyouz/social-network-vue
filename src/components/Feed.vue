<template>
    <div>
        Feed
    </div>
</template>

<script>
    import { actionsTypes } from '@/store/modules/feed';
    export default {
        name: 'AppFeed',
        props: {
            apiUrl: {
                type: String, 
                required: true
            }
        },
        mounted() {
            this.$store.dispatch(actionsTypes.getFeed, {apiUrl: this.apiUrl})
        }
    }
</script>

<style lang="scss" scoped>

</style>