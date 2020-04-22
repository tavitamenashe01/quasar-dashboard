<template>
  <q-layout view="lHh Lpr lFf">
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
      <div class="wrapper">
        <!-- <q-item /> -->
        <q-list>
          <q-item-label
            header
            class="text-grey-1 nav-label"
            style="position: relative"
          >
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

          <q-item-label
            header
            class="text-grey-1 nav-label"
            style="position: relative"
          >
            Me
          </q-item-label>

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
                  <q-menu fit>
                    <q-list style="min-width: 100px; display: block">
                      <q-item clickable v-close-popup>
                        <q-item-section>New tab</q-item-section>
                      </q-item>
                      <q-item clickable v-close-popup>
                        <q-item-section>New incognito tab</q-item-section>
                      </q-item>
                      <q-separator />
                    </q-list>
                  </q-menu>
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

          <q-item clickable to="/newtodo">
            <q-item-section>
              <div class="row col items-center">
                <q-icon name="dashboard" color="grey-1" size="24px" />
                <div class="q-pl-md">
                  <q-item-label class="link-label">New To Do</q-item-label>
                </div>
              </div>
            </q-item-section>
          </q-item>
          <!-- <q-item-label header class="text-grey-1 nav-label">
            Pages
          </q-item-label> -->

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

          <q-item clickable to="/repos">
            <q-item-section>
              <div class="row col items-center ">
                <q-icon name="favorite" color="grey-1" size="24px" />
                <div class="q-pl-md">
                  <q-item-label class="link-label">Repos</q-item-label>
                </div>
              </div>
            </q-item-section>
          </q-item>

          <q-item-label header class="text-grey-1 nav-label">
            Pages
          </q-item-label>

          <q-item clickable to="/login">
            <q-item-section>
              <div class="row col items-center ">
                <q-icon name="lock" color="grey-1" size="24px" />
                <div class="q-pl-md">
                  <q-item-label class="link-label">Login</q-item-label>
                </div>
              </div>
            </q-item-section>
          </q-item>

          <q-item clickable to="/register">
            <q-item-section>
              <div class="row col items-center ">
                <q-icon name="account_circle" color="grey-1" size="24px" />
                <div class="q-pl-md">
                  <q-item-label class="link-label">Register</q-item-label>
                </div>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",

  data() {
    return {
      leftDrawerOpen: false,
      search: ""
    };
  }
};
</script>

<style scoped>
.link-label {
  font-size: 12px;
  color: white;
}

.nav-label {
  background: rgba(0, 0, 0, 0.3);
  font-size: 14px;
}

.nav-label:hover {
  background: rgba(0, 0, 0, 0.6);
  transition: 1s;
}

.wrapper {
  background-color: #222d32;
  height: 100vh;
}

/* .bg-image {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/images/mountains.jpeg");
  width: 100%;
  background-size: cover;
  height: 100vh;
  position: absolute;
} */
</style>
