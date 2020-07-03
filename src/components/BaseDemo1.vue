

<script>
export default {
  functional: true,
  render(h, context) {
    const { slots } = context;
    return <transition name="slot">{slots().default}</transition>;
  }
};
</script>

<style>
.slot-enter,
.slot-leave-to {
  opacity: 0;
}   
.slot-enter-active,
.slot-leave-active {
  transition: all 3s;
}
.slot-enter-to,
.slot-leave {
  opacity: 1;
}
</style>