<template>
  <div id="matte-mask" v-show="showMask.showMsg">
    <show-toast v-bind:toast-item="[showMask.msg,showMask.loadstyle]" class="pop-msg" />
  </div>
</template>

<script>
  import ShowToast from "@/components/common/mattemask/childComps/ShowToast";
  export default {
    name: "MatteMask",
    components: {
      ShowToast
    },
    props: {
      showMask: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  #matte-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background:rgba(0, 0, 23, .5);
  }
  .pop-msg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
