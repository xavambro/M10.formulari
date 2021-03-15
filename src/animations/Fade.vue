<template>
    <transition name="fade">
    <slot></slot>
    </transition>
</template>
<script>
export default {
    
}
</script>
<style scoped>

.fade-enter, .fade-leave-to{
        opacity: 0;
}

.fade-enter-to, .fade-leave{
    opacity:1;
}
.fade-enter-active, .fade-leave-active {
        transition : opacity 2s;
}


</style>