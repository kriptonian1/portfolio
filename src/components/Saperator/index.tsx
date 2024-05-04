import { component$ } from "@builder.io/qwik";

export const Saperator = component$(() => {
  return (
    <div class="my-20 flex gap-2 px-2">
      <div class="bg-middle aspect-square w-[2px] rounded-full" />
      <div class="bg-middle aspect-square w-[2px] rounded-full" />
      <div class="bg-middle aspect-square w-[2px] rounded-full" />
    </div>
  );
});
