<template>
  <div id="employee-table">
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
            <input type="text" v-model="employee.email" />
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
  </div>
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
    @apply border-b border-b-sky-200;
  }

  thead {
    @apply bg-sky-100;
  }

  tbody > tr {
    @apply hover:bg-slate-100;
  }

  button {
    @apply rounded p-1 ml-1 text-sm text-sky-500 font-semibold border-sky-500
      hover:bg-sky-500 hover:text-white;
  }

  button:first-child {
    @apply ml-0;
  }
</style>