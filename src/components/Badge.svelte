<script>
  export let text = "";
  export let colors = "";

  $: classes = `inline-flex items-center rounded-md bg-zinc-800/50 mt-4 px-2 py-1 text-xs font-medium ring-1 ring-inset ${colors}`;
</script>

<span class={classes}>{text}</span>
