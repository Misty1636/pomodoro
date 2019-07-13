<template lang="pug">
  .ringtones
    .ringtones__work
      button.dropdown(@click="dropdownClass('work')") work
        .dropdown__icon(:class="{hide : toogledropdown.work}")
      .ringtones__items(:class="{hide : toogledropdown.work}")
        .ringtones__item(v-for="item in ringtone" :key="item.name")
          input.task__checkbox.checkboxCircle.checkboxCircle__pink(type="radio" :checked="item.work" @click="checkWork(item.name)")
          span {{ item.name }}
    .ringtones__break
      button.dropdown(@click="dropdownClass('break')") break
        .dropdown__icon(:class="{hide : toogledropdown.break}")
      .ringtones__items(:class="{hide : toogledropdown.break}")
        .ringtones__item(v-for="item in ringtone" :key="item.name")
          input.task__checkbox.checkboxCircle.checkboxCircle__pink(type="radio" :checked="item.break" @click="checkBreak(item.name)")
          span {{ item.name }}
</template>

<script>
export default {
  name: 'ringtones',
  data() {
    return {
      toogledropdown: {
        work: false,
        break: false,
      },
      ringtone: [
        { name: 'none', work: false, break: false },
        { name: 'Default', work: true, break: true },
        { name: 'alarm', work: false, break: false },
        { name: 'alert', work: false, break: false },
        { name: 'beep', work: false, break: false },
        { name: 'bell', work: false, break: false },
        { name: 'bird', work: false, break: false },
        { name: 'bugle', work: false, break: false },
        { name: 'digital', work: false, break: false },
        { name: 'drop', work: false, break: false },
        { name: 'horn', work: false, break: false },
        { name: 'music', work: false, break: false },
        { name: 'ring', work: false, break: false },
        { name: 'warning', work: false, break: false },
        { name: 'whistle', work: false, break: false },
      ],
    };
  },
  methods: {
    checkWork(str) {
      const vm = this;
      vm.ringtone.forEach((item) => {
        if (item.name === str) {
          item.work = true;
        } else {
          item.work = false;
        }
      });
    },
    checkBreak(str) {
      const vm = this;
      vm.ringtone.forEach((item) => {
        if (item.name === str) {
          item.break = true;
        } else {
          item.break = false;
        }
      });
    },
    dropdownClass(str) {
      if (str === 'work') this.toogledropdown.work = !this.toogledropdown.work;
      if (str === 'break') this.toogledropdown.break = !this.toogledropdown.break;
    },
  },
};
</script>
