<template lang="pug">
  .optionBg
    .optionMenu
      ul.optionMenu__menu
        li
          router-link(to="/page/list").optionMenu__menu__item
            i.material-icons list
            span to-do list
        li
          router-link(to="/page/analytics").optionMenu__menu__item
            i.material-icons insert_chart
            span analytics
        li
          router-link(to="/page/ringtones").optionMenu__menu__item
            i.material-icons library_music
            span ringtones
      .optionMenu__player
        .optionMenu__player__circleBox
          .optionMenu__player__btn
        .optionMenu__player__time 25:00
        .optionMenu__player__title the First thing to do today
    .optionList
      router-view
    .optionLeave
      router-link(to="/").optionLeave__btn.material-icons close
      span.optionLeave__logoTitle POMODORO
</template>

<script>
export default {
  name: 'layout',
};
</script>
