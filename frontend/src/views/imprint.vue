<!-- The imprint page. (Impressum is needed by German Law) -->
<template>
  <div>
    <p><strong>Impressum</strong></p>
    <p>Anbieter:<br />Max Mustermann<br />Musterstraße 1<br />80999 München</p>
    <p>Kontakt:<br />Telefon: 089/1234567-8<br />Telefax: 089/1234567-9<br />E-Mail: mail@mustermann.de<br />Website: www.mustermann.de</p>
    <p> </p>
    <p>Bei redaktionellen Inhalten:</p>
    <p>Verantwortlich nach § 55 Abs.2 RStV<br />Moritz Schreiberling<br />Musterstraße 2<br />80999 München</p>
  </div>
</template>

<script>
import C_btn_routing from "@/components/global/C_btn_routing.vue";
export default {
  name: 'imprint',
  components: {
    C_btn_routing
  },
}
</script>