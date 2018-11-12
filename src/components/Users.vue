<template>
  <div class="users-data">
    <el-button
      type="success"
      @click="getUsers">
      Fetch Data
    </el-button>
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
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'Users',
  computed: {
    ...mapGetters([
      'users'
    ])
  },
  methods: {
    ...mapActions([
      'getUsers'
    ])
  }
}
</script>

<style>
  .users-data {
    margin-left: 20px;
  }
</style>
