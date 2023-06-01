<script setup>

  import { ref } from 'vue'

  import StepInStone from '../components/StepInStone.vue'

  const stepWxrds = ref([
    {
      wxrdvalue: 'some value',
      wxrdtype: 'some value',
      content: 'some value',
      related: 'some value',
      uuid: '1',
      image: 'LIBER_ABA_COVER.png'
    },
    {
      wxrdvalue: 'some other value',
      wxrdtype: 'some value',
      content: 'some value',
      related: 'some value',
      uuid: '2',
      image: 'THE_SATANIC_WITCH_COVER.png'
    }
  ])

</script>

<template>

  <h1> Home </h1>
  
  <StepInStone
    v-for="wxrd in stepWxrds"
    :uuid="wxrd.uuid"
    :wxrdvalue="wxrd.wxrdvalue"
    :wxrdtype = "wxrd.wxrdtype"
    :content = "wxrd.content"
    :related = "wxrd.related"
    :image = "wxrd.image"
  />

</template>
  
  
  