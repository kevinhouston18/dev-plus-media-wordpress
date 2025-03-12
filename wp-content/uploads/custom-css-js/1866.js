<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">

jQuery(document).ready(function( $ ){
   document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const header = document.querySelector(".elementor-location-header");

    window.addEventListener("scroll", function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            header.classList.add("hide-header");
        } else {
            // Scrolling up
            header.classList.remove("hide-header");
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});

});



</script>
<!-- end Simple Custom CSS and JS -->
