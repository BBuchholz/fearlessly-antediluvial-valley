<template>
  <div>
    <nav>
      <router-link to="/"> Home </router-link> |
      <router-link to="/feed"> Feed </router-link> |
      <router-link to="/history"> History </router-link> |
      <router-link to="/sign-in"> Login </router-link> |
      <router-link to="/0"> AWLWA </router-link>
    </nav>
    <router-view />
  </div>
</template>
