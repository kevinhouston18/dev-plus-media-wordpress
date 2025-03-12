<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
jQuery(document).ready(function($){
    var lastScrollTop = 0;
    var footer = $(".sticky-footer");

    $(window).scroll(function(){
        var st = $(this).scrollTop();
        
        if (st > lastScrollTop) {
            // Scrolling Down
            footer.removeClass("show").addClass("show");
        } else {
            // Scrolling Up
            footer.removeClass("show").addClass("show");
        }
        
        lastScrollTop = st;
    });
});
</script>
<!-- end Simple Custom CSS and JS -->
