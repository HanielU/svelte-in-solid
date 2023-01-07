<script lang="ts">
  export let count: number;
  console.log("ran");
</script>

<button
  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
  focus:outline-none focus:shadow-outline"
  on:click={() => count++}
>
  Clicked {count}
  {count === 1 ? "time" : "times"}
</button>
