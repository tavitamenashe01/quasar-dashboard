<template>
  <div>
    <Header />
    <div class="container">
      <q-item class="calendar-title q-mb-md">
        <q-item-section>
          <q-item-label class="calendar-title" overline
            >Click a date/time to add an event</q-item-label
          >
        </q-item-section>
      </q-item>
      <FullCalendar
        class="demo-app-calendar"
        ref="fullCalendar"
        defaultView="dayGridMonth"
        :header="{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        }"
        :plugins="calendarPlugins"
        :weekends="calendarWeekends"
        :events="calendarEvents"
        @dateClick="handleDateClick"
      />
    </div>
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Header from "../components/Header";

export default {
  components: {
    FullCalendar,
    Header
  },
  data: function() {
    return {
      calendarPlugins: [
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin // needed for dateClick
      ],
      calendarWeekends: true,
      calendarEvents: [
        // initial event data
        { title: "Event Now", start: new Date() }
      ]
    };
  },
  methods: {
    handleDateClick(arg) {
      let newEventAdd = prompt(
        "Would you like to add an event to " + arg.dateStr + " ?"
      );
      if (newEventAdd) {
        this.calendarEvents.push({
          // add new event data
          title: newEventAdd,
          start: arg.date,
          allDay: arg.allDay
        });
      }
    }
  }
};
</script>

<style lang="scss">
@import "src/assets/styles/main.scss";

@import "~@fullcalendar/core/main.css";
@import "~@fullcalendar/daygrid/main.css";
@import "~@fullcalendar/timegrid/main.css";
.calendar-title {
  font-size: 25px;
  padding: 5px 0;
  background: $teal-10;
  color: $white;
  border-radius: 5px;
  text-align: center;
}
</style>
