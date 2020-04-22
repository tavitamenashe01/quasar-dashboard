<template>
  <q-card>
    <form @submit.prevent="submitForm">
      <q-card-section class="row">
        <div class="text-h6">Add Task</div>
        <q-space />
        <q-btn dense round flat icon="close" v-close-popup />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="row q-mb-sm">
          <q-input
            outlined
            v-model="taskToSubmit.name"
            label="Write some task"
            class="col"
            ref="name"
            :rules="[val => !!val || 'Field is required']"
          />
        </div>
        <div class="row q-mb-sm">
          <q-input outlined v-model="taskToSubmit.taskDate" label="Task Date">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy>
                  <q-date v-model="taskToSubmit.taskDate" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="row q-mb-sm">
          <q-input outlined v-model="taskToSubmit.taskTime" label="Task Time">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy>
                  <q-time v-model="taskToSubmit.taskTime" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Save" type="submit" color="primary" v-close-popup />
      </q-card-actions>
    </form>
  </q-card>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      taskToSubmit: {
        name: "",
        taskDate: "",
        taskTime: "",
        completed: false
      }
    };
  },
  methods: {
    ...mapActions("tasks", ["addTask"]),
    submitForm() {
      this.$refs.name.validate();
      if (!this.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      this.addTask(this.taskToSubmit);
    }
  }
};
</script>