<template>
  <section id="employee-form">
    <form @submit.prevent="handleSubmit" >

      <p v-if="error && submitting" class="error-message">
        Please fill out all required fields.
      </p>
      <p v-if="success" class="success-message">
        Employee successfully added!
      </p>

      <label class="block">
        <span>New employee name</span>
        <input 
          ref="first"
          type="text"
          :class="{ 'has-error': submitting && invalidName }"
          v-model="employee.name"
          @focus="clearStatus"
          @keypress="clearStatus"
        />
      </label>

      <label class="block">
        <span>New employee email</span>
        <input 
          type="email"
          :class="{ 'has-error': submitting && invalidEmail }"
          v-model="employee.email"
          @focus="clearStatus"
        />
      </label>

      <button>Add Employee</button>
    </form>
  </section>
</template>

<script>
  export default {
    name: 'employee-form',
    data() {
      return {
        submitting: false,
        error: false,
        success: false,
        employee: {
          name: '',
          email: '',
        }
      }
    },
    methods: {
      handleSubmit() {
        this.submitting = true;
        this.clearStatus();

        if (this.invalidName || this.invalidEmail) {
          this.error = true;
          return;
        }

        this.$emit('add:employee', this.employee);
        this.$refs.first.focus();
        this.employee = {
          name: '',
          email: '',
        };
        this.error = false;
        this.success = true;
        this.submitting = false;
      },
      clearStatus() {
        this.success = false;
        this.error = false;
      }
    },
    computed: {
      invalidName() {
        return this.employee.name === ''
      },
      invalidEmail() {
        return this.employee.email === ''
      },
    },
  }
</script>

<style scoped>
  form {
    @apply grid grid-cols-1 gap-4;
  }

  label > span {
    @apply text-sm uppercase font-bold;
  }

  input[type="text"],
  input[type="email"] {
    @apply mt-0 block w-full px-0.5 border-0 border-b-2 border-stone-200 
      focus:ring-0 focus:border-stone-400 focus:bg-stone-50;
  }

  button {
    @apply py-2 border-2 border-stone-400 font-bold
      focus:bg-stone-400 focus:border-stone-400 focus:text-white
      hover:bg-stone-500 hover:border-stone-500 hover:text-white;
  }

  input.has-error {
    @apply border-b-rose-500;
  }

  [class*='-message'] {
    @apply p-3 font-semibold border-l-4;
  }

  .error-message {
    @apply text-rose-600 border-l-rose-300;
  }

  .success-message {
    @apply text-green-600 border-l-green-200;
  }
</style>