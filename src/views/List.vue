<template lang="pug">
  .list
    .list__addMisson.addMisson
      input.addMisson__input(type="text" placeholder="add a new mission…")
      button.material-icons add
    .list__todo
      button.dropdown(@click="dropdownClass('todo')") to-do
        .dropdown__icon(:class="{hide : toogledropdown.todo}")
      .list__todo__items(:class="{hide : toogledropdown.todo}")
        .task
          input.task__checkbox.checkboxCircle.checkboxCircle__tick(type="checkbox")
          .task__title the second thing to do today
          .material-icons play_circle_outline
        .task
          input.task__checkbox.checkboxCircle.checkboxCircle__tick(type="checkbox")
          .task__title the second thing to do today
          .material-icons play_circle_outline
        .task
          input.task__checkbox.checkboxCircle.checkboxCircle__tick(type="checkbox")
          .task__title the second thing to do today
          .material-icons play_circle_outline
    .list__done
      button.dropdown(@click="dropdownClass('done')") done
        .dropdown__icon(:class="{hide : toogledropdown.done}")
      .list__done__items(:class="{hide : toogledropdown.done}")
        .task
          input.task__checkbox.checkboxCircle.checkboxCircle__tick(type="checkbox" checked)
          .task__title the second thing to do today
          .task__circles
            .task__circle
            .task__circle
            .task__circle
        .task
          input.task__checkbox.checkboxCircle.checkboxCircle__tick(type="checkbox" checked)
          .task__title the second thing to do today
          .task__circles
            .task__circle
            .task__circle
            .task__circle
        .task
          input.task__checkbox.checkboxCircle.checkboxCircle__tick(type="checkbox" checked)
          .task__title the second thing to do today
          .task__circles
            .task__circle
            .task__circle
            .task__circle
            .task__circle
            .task__circle
</template>

<script>
export default {
  name: 'list',
  data() {
    return {
      toogledropdown: {
        todo: false,
        done: false,
      },
    };
  },
  methods: {
    dropdownClass(str) {
      if (str === 'todo') this.toogledropdown.todo = !this.toogledropdown.todo;
      if (str === 'done') this.toogledropdown.done = !this.toogledropdown.done;
    },
  },
};
</script>
