<template>
  <div class="contact-form">
    <h2>Kontaktujte nás</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Meno</label>
        <input
            type="text"
            id="name"
            v-model="form.name"
            placeholder="Vaše meno"
        />
        <p v-if="errors.name" class="error">{{ errors.name }}</p>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
            type="email"
            id="email"
            v-model="form.email"
            placeholder="Váš email"
        />
        <p v-if="errors.email" class="error">{{ errors.email }}</p>
      </div>
      <div class="form-group">
        <label for="message">Správa</label>
        <textarea
            id="message"
            v-model="form.message"
            rows="5"
            placeholder="Napíšte svoju správu"
        ></textarea>
        <p v-if="errors.message" class="error">{{ errors.message }}</p>
      </div>
      <button type="submit">Odoslať správu</button>
    </form>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      errors: {},
      successMessage: "",
    };
  },
  methods: {
    validateForm() {
      this.errors = {};
      if (!this.form.name) {
        this.errors.name = "Meno je povinné.";
      }
      if (!this.form.email) {
        this.errors.email = "Email je povinný.";
      } else if (!this.validEmail(this.form.email)) {
        this.errors.email = "Zadajte platný email.";
      }
      if (!this.form.message) {
        this.errors.message = "Správa je povinná.";
      }
      return Object.keys(this.errors).length === 0;
    },
    validEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(email);
    },
    submitForm() {
      if (this.validateForm()) {
        // Simulácia odoslania dát
        console.log("Formulár odoslaný:", this.form);
        this.successMessage = "Vaša správa bola úspešne odoslaná.";
        this.form = {
          name: "",
          email: "",
          message: "",
        };
      }
    },
  },
};
</script>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f5cba7;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ffffff;
  border-radius: 4px;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: #050202;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #45a049;
}

.error {
  color: red;
  font-size: 0.9em;
}

.success {
  color: green;
  font-size: 1em;
  text-align: center;
  margin-top: 10px;
}
</style>
