<template>
  <div class="wrapper">
    <div class="content-container maxwidth">
      <h1 class="neo-title">Impressum</h1>
      <div class="content-box">
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>Jannik Fauser<br />
        c/o Hochschule für Gestaltung Schwäbisch Gmünd<br />
        Rektor-Klaus-Straße 100<br />
        73525 Schwäbisch Gmünd</p>

        <h2>Kontakt</h2>
        <p>E-Mail: jannik.fauser@hfg.design</p>

        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>Jannik Fauser<br />
        c/o Hochschule für Gestaltung Schwäbisch Gmünd<br />
        Rektor-Klaus-Straße 100<br />
        73525 Schwäbisch Gmünd</p>

        <h2>Hinweis</h2>
        <p>Diese Webseite dient als Portfolio im Rahmen des Studiums an der Hochschule für Gestaltung Schwäbisch Gmünd.</p>
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

.content-box h2:first-child {
  margin-top: 0;
}

.content-box p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}
</style>