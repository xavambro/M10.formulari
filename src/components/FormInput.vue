<template>
    <div class="form-group">
      <label for="'type'" >{{label}}</label>
      <input type="'type'" :class='"form-control "+valid' id="'type'" v-model="inp">
<!--  <input type="'type'" class="form-control" id="'type'" :value="value"  @input="$emit("input",$event.target.value)" v-bind="checkValidity(inp)">
 -->
      <div v-if='error' class="invalid-feedback">{{msg}}</div>
    </div>
</template>

<script src="../scripts/forminput.js">

</script>

<style src="../styles/css/forminput.css" scoped>

</style>