<template>
  <section id="employee-table">
    <p 
      v-if="employees.length < 1" 
      class="empty-table"
    >
      No employees.
    </p>
    <table v-else>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="employee in employees" 
          :key="employee.id"
        >
          <td v-if="editing === employee.id">
            <input type="text" v-model="employee.name" />
          </td>
          <td v-else>
            {{ employee.name }}
          </td>
          <td v-if="editing === employee.id">
            <input type="email" v-model="employee.email" />
          </td>
          <td v-else>
            {{ employee.email }}
          </td>
          <td v-if="editing === employee.id">
            <button @click="editEmployee(employee)">Save</button>
            <button class="muted-button" @click="cancelEdit(employee)">Cancel</button>
          </td>
          <td v-else>
            <button @click="editMode(employee)">Edit</button>
            <button @click="$emit('delete:employee', employee.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
  export default {
    name: 'employee-table',
    props: {
      employees: Array,
    },
    data() {
      return {
        editing: null,
      }
    },
    methods: {
      editMode(employee) {
        this.cachedEmployee = Object.assign({}, employee);
        this.editing = employee.id;
      },
      editEmployee(employee) {
        if (employee.name === '' || employee.email === '') return;
        this.$emit('edit:employee', employee.id, employee);
        this.editing = null;
      },
      cancelEdit(employee) {
        Object.assign(employee, this.cachedEmployee);
        this.editing = null;
      }
    }
  }
</script>

<style scoped>
  table {
    @apply text-left mx-auto w-full;
  }

  th,
  td {
    @apply p-2 w-2/5;
  }

  tr {
    @apply border-b border-b-stone-500;
  }

  thead {
    @apply border-t-2 border-b-2 border-stone-400;
  }

  tbody > tr {
    @apply hover:bg-white;
  }

  button {
    @apply px-1 ml-1 text-sm text-stone-500 font-semibold border-b border-stone-500
      hover:bg-stone-500 hover:text-white 
      focus:bg-stone-400 focus:border-stone-400 focus:text-white;
  }

  button:first-child {
    @apply ml-0;
  }

  input[type="text"],
  input[type="email"] {
    @apply border border-stone-200 focus:ring-0 focus:border-stone-400 focus:bg-stone-50;
  }
</style>