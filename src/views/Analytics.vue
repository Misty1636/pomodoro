<template lang="pug">
  .analytics
    .analytics__time
      button.dropdown(@click="toogledropdown = !toogledropdown") focus time
        .dropdown__icon(:class="{hide : toogledropdown}")
      .analytics__time__content(:class="{hide : toogledropdown}")
        .analytics__time__today
          .analytics__time__title today
          span.analytics__time__num 20
          span.analytics__time__unit /tomato
        .analytics__time__week
          .analytics__time__title week
          span.analytics__time__num 108
          span.analytics__time__unit /tomato
    .analytics__data
      button.dropdown chart
        span.analytics__data__time 2019.7.15 - 2019.7.21
      ve-histogram(:data="chartData" :settings="chartSettings" :extend="chartExtend")
</template>

<script>
import VeHistogram from 'v-charts/lib/histogram.common';

export default {
  name: 'analytics',
  data() {
    this.chartSettings = {
      metrics: ['時數'],
      dimension: ['日期'],
      showLine: [true, false],
    };
    return {
      toogledropdown: false,
      chartData: {
        columns: ['日期', '時數'],
        rows: [
          {
            日期: '7/15', 時數: 16,
          },
          {
            日期: '7/16', 時數: 13,
          },
          {
            日期: '7/17', 時數: 16,
          },
          {
            日期: '7/18', 時數: 8,
          },
          {
            日期: '7/19', 時數: 13,
          },
          {
            日期: '7/20', 時數: 4,
          },
          {
            日期: '7/21', 時數: 20,
          },
        ],
      },
      chartExtend: {
        series: {
          barWidth: 50,
          color(params) {
            const colorList = ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#FF4384'];
            return colorList[params.dataIndex];
          },
        },
        legend: {
          data: [''],
        },
        textStyle: {
          color: '#ffffff',
          fontWeight: 'bold',
          fontFamily: 'Roboto',
        },
        grid: {
          containerLabel: true,
        },
        yAxis: {
          splitLine: { show: false },
          max: 24,
          axisLine: {
            show: true,
            lineStyle: {
              color: '#ffffff',
            },
          },
          position: 'left',
          axisLabel: {
            fontSize: 16,
          },
          maxInterval: 4,
        },
        xAxis: {
          axisLine: {
            show: true,
            lineStyle: {
              color: '#ffffff',
            },
          },
          axisLabel: {
            fontSize: 16,
          },
        },
        animationDuration: 2000,
        animationDelay: 1000,
      },
    };
  },
  components: {
    VeHistogram,
  },
};
</script>
