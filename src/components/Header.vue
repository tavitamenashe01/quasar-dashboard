<template>
  <q-item>
    <q-item-section>
      <div class="row justify-between">
        <q-item text-subtitle6 class="header-title justify-center"
          >Dashboard</q-item
        >
        <div class="row">
          <!-- <q-input
            borderless
            dense
            debounce="300"
            color="primary"
            placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input> -->
          <q-item to="/">
            <q-item-section>
              <q-icon name="dashboard" color="grey-7" size="24px" />
            </q-item-section>
          </q-item>
          <q-item to="/register">
            <q-item-section>
              <q-icon name="account_circle" color="grey-7" size="24px" />
            </q-item-section>
          </q-item>
          <q-item to="/login">
            <q-item-section>
              <q-icon name="lock" color="grey-7" size="24px" />
            </q-item-section>
          </q-item>
        </div>
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  data() {
    return {

      
    };
  }
};
</script>

<style scoped>
.container {
  width: 90%;
  margin: 0 auto;
}

.link-label {
  font-size: 16px;
}

.header-title {
  color: #52585f;
}
</style>
