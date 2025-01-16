<template>
  <div class="footer-container">
    <div class="left-section">
      <div class="map-container">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10614.194352061477!2d18.079283325934654!3d48.31153271133614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b3ee43b2f6763%3A0x75a567f979f5bed3!2sUniverzita%20Kon%C5%A1tant%C3%ADna%20Filozofa!5e0!3m2!1ssk!2ssk!4v1702210535072!5m2!1ssk!2ssk"
            width="100%"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <div class="right-section">
      <div class="contact-info">
        <h3>Contact Information</h3>
        <div>
          <p>Adresa: Nitra, 951 70</p>
          <p>Email: quickrehab@quick.com</p>
          <p>Telefónne číslo: 0915 456 351</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer-container {
  display: flex;
  justify-content: space-between;
  padding: 40px;
  background-color: #f5cba7;
}

.left-section {
  flex: 1;
  margin-right: 20px;
}

.right-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.contact-info h3 {
  margin-bottom: 10px;
  font-size: 1.5em;
}

.contact-info div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-info p {
  margin: 5px 0;
}

.footer-credits {
  text-align: center;
  margin-top: 20px;
  font-size: 0.9em;
  color: #777;
}

.map-container iframe {
  width: 100%;
  height: 300px;
  border: none;
}
</style>
