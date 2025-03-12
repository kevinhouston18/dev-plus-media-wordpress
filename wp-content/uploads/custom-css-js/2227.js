<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
document.addEventListener("DOMContentLoaded", function () {
  let recaptchaDivs = document.querySelectorAll('.g-recaptcha > div');
  recaptchaDivs.forEach((div) => {
    div.style.width = "100% !important";
    div.style.maxWidth = "100% !important";
    div.style.overflow = "hidden";
  });
});
</script>
<!-- end Simple Custom CSS and JS -->
