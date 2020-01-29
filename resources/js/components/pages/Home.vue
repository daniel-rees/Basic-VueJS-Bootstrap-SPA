<template>
    <div>
        <main-nav></main-nav>


        <!-- Using this example -->
        <!-- https://getbootstrap.com/docs/4.0/examples/product/ -->
        <div class="position-relative overflow-hidden p-3 p-md-5 text-center bg-light">
          <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-4 font-weight-normal">Punny headline</h1>
            <p class="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple's marketing pages.</p>
            <a class="btn btn-outline-secondary" href="https://github.com/daniel-rees/Basic-VueJS-Bootstrap-SPA">More info</a>
          </div>
          <div class="product-device box-shadow d-none d-md-block"></div>
          <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
        </div>


        <!-- content -->
        <div class="container py-5">
            <div class="row">
                <div class="col-md-4">
                  <h2>Heading</h2>
                  <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                  <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
                </div>
                <div class="col-md-4">
                  <h2>Heading</h2>
                  <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                  <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
               </div>
                <div class="col-md-4">
                  <h2>Heading</h2>
                  <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                  <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
                </div>
            </div>
        </div>

        <footer-nav></footer-nav>
    </div>
</template>

<script>
    import mainNav from '../partials/MainNav';
    import footerNav from '../partials/FooterNav';

    export default {
        name: "Home",

        components: {
            mainNav,
            footerNav
        }
    }
</script>
