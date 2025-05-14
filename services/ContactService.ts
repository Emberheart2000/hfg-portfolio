// Contact service for handling form submissions
// Path: services/ContactService.ts

interface ContactFormData {
    name: string;
    email: string;
    message: string;
  }
  
  interface ContactResponse {
    status: 'success' | 'error';
    message: string;
  }
  
  export const ContactService = {
    /**
     * Send a contact form submission to the API
     * @param formData The contact form data
     * @returns Promise with the response
     */
    async sendContactForm(formData: ContactFormData): Promise<ContactResponse> {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        return await response.json();
      } catch (error) {
        console.error('Error sending contact form:', error);
        return {
          status: 'error',
          message: 'Failed to connect to the server. Please try again later.',
        };
      }
    }
  };