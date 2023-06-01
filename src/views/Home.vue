<script setup>

  import { ref } from 'vue'

  import StepInStone from '../components/StepInStone.vue'

  const stepWxrds = ref([
    {
      wxrdvalue: 'Liber ABA',
      wxrdtype: 'BoK',
      content: 'Magick In Theory And Practice (Book 4) - Liber ABA, by Aleister Crowley',
      related: 'Thelema, Hermeticism, Gnosticism (Pythagorean)',
      uuid: '741a8d5a-a7ce-40c4-a913-12d6eb2acd2b',
      image: 'LIBER_ABA_COVER.png'
    },
    {
      wxrdvalue: 'The Satanic Witch',
      wxrdtype: 'BoK',
      content: 'The Satanic Witch, by Anton Szandor LaVey',
      related: 'Atheistic Satanism, Branded Gnosticism',
      uuid: 'dab7fa7b-800b-417f-9424-ee5d510456ef',
      image: 'THE_SATANIC_WITCH_COVER.png'
    }
  ])

</script>

<template>

  <blockquote>
    In Progess: This is our staging area for what we are working on currently, check the source code on GitHub to see what components are being refined in the below items (this is just a SANDBOX)
  </blockquote>


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
  
  
  