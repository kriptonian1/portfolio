import { component$ } from "@builder.io/qwik";
import { SOCIALS } from "~/constant/socials";

export const Socials = component$(() => {
  return (
    <div class="mt-10 flex gap-x-6 font-light text-middle md:mt-0">
      {SOCIALS.map(({ name, link }) => {
        return (
          <a key={name} href={link} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        );
      })}
    </div>
  );
});
