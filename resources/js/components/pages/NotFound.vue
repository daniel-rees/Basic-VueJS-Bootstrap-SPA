<template>
    <div>
        <main-nav></main-nav>

        <div class="container p-5">
            <div class="row text-center">
                <div class="col-md-12">
                    <h1>Not found</h1>
                </div>
            </div>
            <div class="row text-center">
                <div class="col-md-12">
                    This page does not exist.
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import mainNav from '../partials/MainNav';

    export default {
        name: "NotFound",

        components: {
            mainNav
        }
    }
</script>

<style scoped>

</style>
