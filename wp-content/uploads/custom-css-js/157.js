<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
// jQuery(document).ready(function($) {
//     $("#toggleButton-cus").on("click", function() {
// //         alert("Button clicked!");

//         let abcSection = $("#more-service-section");
//         let button = $(this);

//         if (abcSection.is(":visible")) {
//             abcSection.stop(true, true).animate({ opacity: 0 }, 100, function() {
//                 $(this).slideUp(300);
//             });
//         } else {
//             abcSection.stop(true, true).css("opacity", 0).slideDown(300, function() {
//                 $(this).animate({ opacity: 1 }, 100);
//             });
//         }

//         button.toggleClass("active");
//     });
// });

jQuery(document).ready(function($) {
    $("#toggleButton-cus").on("click", function() {
        let abcSection = $("#more-service-section");
        let button = $(this);

        if (abcSection.is(":visible")) {
            abcSection.stop(true, true).animate({ opacity: 0 }, 100, function() {
                $(this).slideUp(300);
            });
        } else {
            abcSection.stop(true, true).css("opacity", 0).slideDown(300, function() {
                $(this).animate({ opacity: 1 }, 100);
            });
        }

        button.toggleClass("active");

        // Remove the button after click
        button.remove(); // This will completely remove the button from the DOM
    });
});

</script>
<!-- end Simple Custom CSS and JS -->
