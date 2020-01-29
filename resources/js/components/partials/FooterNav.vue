<template>
    <footer class="row p-4 bg-dark text-white">
        <div class="container text-center">
            <div class="col-sm-12">
              <p class="mb-1">{{ new Date() | moment("YYYY") }} © Basic VueJS + Bootstrap SPA</p>
            </div>
        </div>
    </footer>

</template>

<script>

export default {
    name: 'FooterNav'
}
</script>
