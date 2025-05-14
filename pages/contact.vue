<template>
  <div class="wrapper">
    <div class="contact-container maxwidth">
      <h1 class="neo-title">Get in Contact</h1>
      
      <div class="contact-content">
        <div class="contact-info neo-container">
          <h2 class="contact-subtitle teal-accent">Let's Connect</h2>
          <p>Feel free to reach out if you're interested in my work or would like to collaborate on a project. I'm always open to new opportunities and discussions.</p>
          
          <div class="contact-details">
            <div class="contact-item">
              <div class="contact-icon">📧</div>
              <div class="contact-text">
                <h3 class="teal-text">Email</h3>
                <p>jannik.fauser@hfg.design</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div class="contact-text">
                <h3 class="teal-text">Location</h3>
                <p>Schwäbisch Gmünd, Germany</p>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">🎓</div>
              <div class="contact-text">
                <h3 class="teal-text">University</h3>
                <p>HfG Schwäbisch Gmünd</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="contact-form neo-container">
          <h2 class="contact-subtitle teal-accent">Send Me a Message</h2>
          
          <!-- Form Success Message -->
          <div v-if="formSubmitted && !formError" class="form-success neo-card">
            <div class="success-icon">✓</div>
            <h3>Message Sent!</h3>
            <p>{{ formMessage }}</p>
            <button @click="resetForm" class="neo-button">Send Another Message</button>
          </div>
          
          <!-- Form Error Message -->
          <div v-if="formError" class="form-error neo-card">
            <div class="error-icon">!</div>
            <h3>Something Went Wrong</h3>
            <p>{{ formMessage }}</p>
            <button @click="resetForm" class="neo-button">Try Again</button>
          </div>
          
          <!-- Contact Form -->
          <form v-if="!formSubmitted" @submit.prevent="handleSubmit" class="contact-form-fields">
            <div class="form-group">
              <label for="name">Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name"
                class="neo-input" 
                placeholder="Your Name" 
                required
                :disabled="isSubmitting"
              >
              <p v-if="formErrors.name" class="error-text">{{ formErrors.name }}</p>
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email"
                class="neo-input" 
                placeholder="Your Email" 
                required
                :disabled="isSubmitting"
              >
              <p v-if="formErrors.email" class="error-text">{{ formErrors.email }}</p>
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea 
                id="message" 
                v-model="formData.message"
                class="neo-input" 
                rows="5" 
                placeholder="Your Message" 
                required
                :disabled="isSubmitting"
              ></textarea>
              <p v-if="formErrors.message" class="error-text">{{ formErrors.message }}</p>
            </div>
            
            <button 
              type="submit" 
              class="neo-button submit-btn"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting">Sending...</span>
              <span v-else>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { ContactService } from '~/services/ContactService';

// Form data
const formData = reactive({
  name: '',
  email: '',
  message: ''
});

// Form state
const isSubmitting = ref(false);
const formSubmitted = ref(false);
const formError = ref(false);
const formMessage = ref('');
const formErrors = reactive({
  name: '',
  email: '',
  message: ''
});

// Validate form
const validateForm = () => {
  let isValid = true;
  
  // Reset errors
  formErrors.name = '';
  formErrors.email = '';
  formErrors.message = '';
  
  // Validate name
  if (!formData.name.trim()) {
    formErrors.name = 'Name is required';
    isValid = false;
  }
  
  // Validate email
  if (!formData.email.trim()) {
    formErrors.email = 'Email is required';
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    formErrors.email = 'Please enter a valid email address';
    isValid = false;
  }
  
  // Validate message
  if (!formData.message.trim()) {
    formErrors.message = 'Message is required';
    isValid = false;
  } else if (formData.message.length < 10) {
    formErrors.message = 'Message must be at least 10 characters';
    isValid = false;
  }
  
  return isValid;
};

// Handle form submission
const handleSubmit = async () => {
  if (!validateForm()) {
    return;
  }
  
  isSubmitting.value = true;
  
  try {
    const response = await ContactService.sendContactForm(formData);
    
    formMessage.value = response.message;
    formError.value = response.status === 'error';
    formSubmitted.value = true;
  } catch (error) {
    console.error('Error submitting form:', error);
    formError.value = true;
    formMessage.value = 'An unexpected error occurred. Please try again later.';
    formSubmitted.value = true;
  } finally {
    isSubmitting.value = false;
  }
};

// Reset form
const resetForm = () => {
  formData.name = '';
  formData.email = '';
  formData.message = '';
  formSubmitted.value = false;
  formError.value = false;
  formMessage.value = '';
};
</script>

<style>
.teal-text {
  color: var(--neo-accent-color) !important;
}

.teal-accent {
  color: var(--neo-accent-color);
  font-weight: 600;
}

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

/* Form styles */
.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--neo-text-color);
}

.neo-input {
  background-color: var(--neo-bg-color);
  border-radius: 0.8rem;
  padding: 1rem 1.5rem;
  box-shadow: 
    inset 4px 4px 8px var(--neo-shadow-dark), 
    inset -4px -4px 8px var(--neo-shadow-light);
  border: none;
  outline: none;
  color: var(--neo-text-color);
  width: 100%;
  transition: all 0.3s ease;
}

.neo-input:focus {
  box-shadow: 
    inset 6px 6px 12px var(--neo-shadow-dark), 
    inset -6px -6px 12px var(--neo-shadow-light);
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

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.error-text {
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: 0.5rem;
}

/* Success and error message styles */
.form-success,
.form-error {
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form-success {
  box-shadow: 
    8px 8px 16px var(--neo-shadow-dark), 
    -8px -8px 16px var(--neo-shadow-light);
}

.form-error {
  box-shadow: 
    8px 8px 16px rgba(231, 76, 60, 0.2), 
    -8px -8px 16px var(--neo-shadow-light);
}

.success-icon,
.error-icon {
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  font-size: 2rem;
}

.success-icon {
  background-color: #2ecc71;
  color: white;
}

.error-icon {
  background-color: #e74c3c;
  color: white;
}

.form-success h3,
.form-error h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.form-success p,
.form-error p {
  margin-bottom: 1.5rem;
  color: #555;
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