<template>
  <div class="users-data">
    <h1>
      Users Data
    </h1>
    <el-table
      :data="users"
      stripe
      style="width: 100%">
      <el-table-column
        prop="name"
        label="Name">
      </el-table-column>
      <el-table-column
        prop="username"
        label="Username">
      </el-table-column>
      <el-table-column
        prop="email"
        label="Email">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="Phone">
      </el-table-column>
      <el-table-column
        prop="website"
        label="Website">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Users',
  computed: mapState({
    users: state => state.users.all
  }),
  created () {
    this.$store.dispatch('users/getUsers');
  }
}
</script>

<style>
  .users-data {
    margin-left: 20px;
  }
</style>
