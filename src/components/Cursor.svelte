<script>
  import { onMount } from "svelte";

  let x = 0;
  let y = 0;

  onMount(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  function handleMouseMove(event) {
    x = event.clientX;
    y = event.clientY;
  }
</script>

<div class="circle" style="top: {y}px; left: {x}px;" />

<style>
  .circle {
    position: fixed;
    z-index: 9999;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 60rem;
    height: 60rem;
    border-radius: 50%;
    background-color: rgba(92, 228, 208, 0.13);
    transform: translate(-50%, -50%);
    filter: blur(100px);
    opacity: 0.5;
  }
</style>
