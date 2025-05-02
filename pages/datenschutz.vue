<template>
  <div class="wrapper">
    <div class="content-container maxwidth">
      <h1 class="neo-title">Datenschutzerklärung</h1>
      <div class="content-box">
        <h2>1. Datenschutz auf einen Blick</h2>
        <h3>Allgemeine Hinweise</h3>
        <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>

        <h3>Datenerfassung auf dieser Website</h3>
        <p>Verantwortlich für die Datenerfassung auf dieser Website ist der Websitebetreiber. Die Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
        
        <p>Diese Webseite dient ausschließlich als Portfolio und sammelt keine personenbezogenen Daten der Besucher. Es werden keine Cookies gesetzt und keine Analyse-Tools verwendet.</p>

        <h2>2. Hosting</h2>
        <p>Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</p>

        <h2>3. Ihre Rechte</h2>
        <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</p>

        <h2>4. Kontakt zum Datenschutzbeauftragten</h2>
        <p>Bei Fragen zum Datenschutz können Sie sich jederzeit an den Betreiber dieser Website wenden:</p>
        <p>Jannik Fauser<br />
        c/o Hochschule für Gestaltung Schwäbisch Gmünd<br />
        Rektor-Klaus-Straße 100<br />
        73525 Schwäbisch Gmünd<br />
        E-Mail: jannik.fauser@hfg.design</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// No additional logic needed
</script>

<style>
.content-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.neo-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  letter-spacing: 0.05em;
}

.content-box {
  background-color: #f0f0f3;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 10px 10px 20px rgba(174, 174, 192, 0.2), 
              -10px -10px 20px rgba(255, 255, 255, 0.7);
}

.content-box h2 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.content-box h3 {
  font-size: 1rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.8rem;
}

.content-box h2:first-child {
  margin-top: 0;
}

.content-box p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}
</style>