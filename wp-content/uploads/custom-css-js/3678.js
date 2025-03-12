<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
jQuery(document).ready(function ($) {
    var header = $(".header-mobile-cus");

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 50) {
            header.addClass("sticky-cus");
        } else {
            header.removeClass("sticky-cus");
        }
    });
});
</script>
<!-- end Simple Custom CSS and JS -->
