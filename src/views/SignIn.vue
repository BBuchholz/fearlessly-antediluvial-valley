<template>
    <h1> Login to Your Account </h1>
    <p> <input type='text' placeholder="Email" v-model='email'/> </p>
    <p> <input type='password' placeholder="Password" v-model='password'/> </p>
    <p v-if="errMsg"> {{ errMsg }} </p>
    <p> <button> Submit </button> </p>
</template>

<script setup>
import { ref } from 'vue'

const errMsg = ref() // ERROR MESSAGE

</script>