<template>
  <div class="q-mt-lg">
    <q-splitter v-model="splitterModel" style="height: 450px">
      <template v-slot:before>
        <div class="q-pa-md">
          <q-date
            v-model="date"
            :events="events"
            event-color="orange"
            @click="showAddTask = true"
          />
        </div>
      </template>
        <!-- <q-list v-if="Object.keys(tasksCalendar).length" bordered separator>
      <Task v-for="(taskCal, key) in tasksCalendar" :taskCal="taskCal" :key="key" :id="key" />
    </q-list> -->
      <template v-slot:after>
        <q-tab-panels
          v-model="date"
          animated
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="2019/02/01">
            <div class="text-h4 q-mb-md">2019/02/01</div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              praesentium cumque magnam odio iure quidem, quod illum numquam
              possimus obcaecati commodi minima assumenda consectetur culpa fuga
              nulla ullam. In, libero.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              praesentium cumque magnam odio iure quidem, quod illum numquam
              possimus obcaecati commodi minima assumenda consectetur culpa fuga
              nulla ullam. In, libero.
            </p>
    
     
          </q-tab-panel>

          <q-tab-panel name="2019/02/05">
            <div class="text-h4 q-mb-md">2019/02/05</div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              praesentium cumque magnam odio iure quidem, quod illum numquam
              possimus obcaecati commodi minima assumenda consectetur culpa fuga
              nulla ullam. In, libero.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              praesentium cumque magnam odio iure quidem, quod illum numquam
              possimus obcaecati commodi minima assumenda consectetur culpa fuga
              nulla ullam. In, libero.
            </p>
          </q-tab-panel>

          <q-tab-panel name="2019/02/06">
            <div class="text-h4 q-mb-md">2019/02/06</div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              praesentium cumque magnam odio iure quidem, quod illum numquam
              possimus obcaecati commodi minima assumenda consectetur culpa fuga
              nulla ullam. In, libero.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              praesentium cumque magnam odio iure quidem, quod illum numquam
              possimus obcaecati commodi minima assumenda consectetur culpa fuga
              nulla ullam. In, libero.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
              praesentium cumque magnam odio iure quidem, quod illum numquam
              possimus obcaecati commodi minima assumenda consectetur culpa fuga
              nulla ullam. In, libero.
            </p>
          </q-tab-panel>
        </q-tab-panels>
        <q-dialog v-model="showAddTask">
          <AddTaskCalendar />
        </q-dialog>
      </template>
    </q-splitter>
  </div>
</template>

<script>
import AddTaskCalendar from "../components/AddTaskCalendar";
// import Task from "../components/Task";

export default {
  data() {
    return {
      splitterModel: 50,
      date: "2019/02/01",
      events: ["2019/02/01", "2019/02/05", "2019/02/06"],
      showAddTask: false
    };
  },
  components: {
    AddTaskCalendar,
    // Task
  },
//     computed: {
//     ...mapGetters("tasksCalendar", ["tasksCalendar"])
//   },
};
</script>

<style scoped></style>
