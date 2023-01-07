import SComponent from "~/svelte/Component.svelte";
import { createSignal, onMount } from "solid-js";
import { onCleanup, Show, type Component } from "solid-js";
import { bind } from "svelte/internal";

const App: Component = () => {
  const [show, setShow] = createSignal(true);

  return (
    <div class="h-full w-full">
      <button onClick={() => setShow(!show())}>Toggle</button>

      <Show when={show()}>
        <S />
      </Show>
    </div>
  );
};

const [count, setCount] = createSignal(0);
const S: Component = () => {
  const [div, setDiv] = createSignal<HTMLDivElement>(null!);

  onMount(() => {
    const app = new SComponent({
      target: div(),
      props: { count: count() },
    });

    bind(app, "count", setCount, undefined);

    onCleanup(() => {
      app.$destroy();
      console.log("destroyed");
    });
  });

  return (
    <>
      <div>Ext: {count()}</div>
      <div class="bg-orange-600/50" ref={setDiv} />
    </>
  );
};

export default App;
