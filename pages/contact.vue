<template>
  <div class="wrapper">
    <div class="contact-container maxwidth">
      <h1 class="neo-title">Get in Contact</h1>
      
      <div class="contact-content">
        <div class="contact-info neo-container">
          <h2 class="contact-subtitle">Let's Connect</h2>
          <p>Feel free to reach out if you're interested in my work or would like to collaborate on a project. I'm always open to new opportunities and discussions.</p>
          
          <div class="contact-details">
            <div class="contact-item">
              <div class="contact-icon">📧</div>
              <div class="contact-text">
                <h3>Email</h3>
                <p>jannik.fauser@hfg.design</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div class="contact-text">
                <h3>Location</h3>
                <p>Schwäbisch Gmünd, Germany</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">🎓</div>
              <div class="contact-text">
                <h3>University</h3>
                <p>HfG Schwäbisch Gmünd</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="contact-form neo-container">
          <h2 class="contact-subtitle">Send Me a Message</h2>
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" class="neo-input" placeholder="Your Name" required>
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" class="neo-input" placeholder="Your Email" required>
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" class="neo-input" rows="5" placeholder="Your Message" required></textarea>
            </div>
            
            <button type="submit" class="neo-button submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const handleSubmit = () => {
  // Form submission logic would go here
  // For now, just a placeholder
  alert('Thank you for your message! This form is not yet connected to a backend.')
}
</script>

<style>
.contact-container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.contact-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--neo-text-color);
}

.contact-details {
  margin-top: 2rem;
}

.contact-item {
  display: flex;
  margin-bottom: 1.5rem;
  align-items: flex-start;
}

.contact-icon {
  font-size: 1.5rem;
  margin-right: 1rem;
  background-color: var(--neo-bg-color);
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 
    5px 5px 10px var(--neo-shadow-dark), 
    -5px -5px 10px var(--neo-shadow-light);
}

.contact-text h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.contact-text p {
  color: #555;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

textarea.neo-input {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  width: 100%;
  margin-top: 1rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
  
  .contact-form {
    order: -1;
  }
}
</style>