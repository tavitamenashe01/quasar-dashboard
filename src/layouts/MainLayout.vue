<template>
  <q-layout view="lHh Lpr lFf ">
    <!-- <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>
          Dashboard
        </q-toolbar-title>
      </q-toolbar>
    </q-header> -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
     
      <q-item class="bg-image" />
      <q-list>
        <q-item-label header class="text-grey-1" style="position: relative">
          Navigation
        </q-item-label>

        <q-item clickable to="/">
          <q-item-section>
            <div class="row col items-center">
              <q-icon name="dashboard" color="grey-1" size="24px" />
              <div class="q-pl-md">
                <q-item-label class="link-label">Dashboard</q-item-label>
              </div>
            </div>
          </q-item-section>
        </q-item>

        <q-item clickable to="/tables">
          <q-item-section>
            <div class="row col items-center ">
              <q-icon name="grid_on" color="grey-1" size="24px" />
              <div class="q-pl-md">
                <q-item-label class="link-label">Table</q-item-label>
              </div>
            </div>
          </q-item-section>
        </q-item>

        <q-item clickable to="/userProfile">
          <q-item-section>
            <div class="row col items-center ">
              <q-icon name="person" color="grey-1" size="24px" />
              <div class="q-pl-md">
                <q-item-label class="link-label">User Profile</q-item-label>
              </div>
            </div>
          </q-item-section>
        </q-item>

        <q-item clickable to="/calendar">
          <q-item-section>
            <div class="row col items-center ">
              <q-icon name="event" color="grey-1" size="24px" />
              <div class="q-pl-md">
                <q-item-label class="link-label">Calendar</q-item-label>
              </div>
            </div>
          </q-item-section>
        </q-item>

        <q-item clickable to="/todo">
          <q-item-section>
            <div class="row col items-center ">
              <q-icon name="assignment" color="grey-1" size="24px" />
              <div class="q-pl-md">
                <q-item-label class="link-label">To do list</q-item-label>
              </div>
            </div>
          </q-item-section>
        </q-item>


         <q-item clickable to="/map">
          <q-item-section>
            <div class="row col items-center ">
              <q-icon name="place" color="grey-1" size="24px" />
              <div class="q-pl-md">
                <q-item-label class="link-label">Map</q-item-label>
              </div>
            </div>
          </q-item-section>
        </q-item>


      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",

  data() {
    return {
      leftDrawerOpen: false,
    };
  }
};
</script>

<style scoped>
.link-label {
  font-size: 16px;
  color: white;
}

.bg-image {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/images/mountains.jpeg");
  width: 100%;
  background-size: cover;
  height: 100vh;
  position: absolute;
}
</style>
