import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import SawanImage from "~/media/sawan.png?jsx";
import TzkImage from "~/media/truezk.png?jsx";
import MapImage from "~/media/map.png?jsx";

export default component$(() => {
  return (
    <div class="md:w-[30rem]">
      {" "}
      <h1 class="flex flex-col pt-20 font-serif text-2xl antialiased md:text-4xl">
        <div class="flex items-center gap-2">
          <span class="text-light">Hey,</span>
          <span class="text-dark">I’m</span>
          <SawanImage
            alt="sawan's image"
            draggable={false}
            class="w-10 md:w-20"
          />
          <span class="text-dark">Sawan</span>
        </div>
        <div class="flex items-center gap-2 md:-translate-y-4">
          <span class="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
            a full-stack
          </span>
          <span class="text-light">at</span>
          <TzkImage
            alt="TrueZk's Logo"
            draggable={false}
            class="aspect-square w-10 -translate-x-2 md:w-24"
          />
          <span class="-translate-x-4 text-dark">TrueZK</span>
        </div>
        <div class="flex items-center gap-2 md:-translate-y-8">
          <span class="text-light">based in</span>
          <span class="text-dark">Kolkata,</span>
          <MapImage
            alt="Kolkata's Map"
            draggable={false}
            class="w-10 -translate-x-2 translate-y-3 md:w-24"
          />
          <span class="-translate-x-4 text-dark">IN</span>
        </div>
      </h1>
      <div class="text-middle mt-10 flex gap-x-6 font-light md:mt-0">
        <a
          href="https://twitter.com/kriptonian8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/sawan-bhattacharya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/kriptonian1"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://dev.to/kriptonian"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dev.to
        </a>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Kriptonian | Full-Stack Developer",
  meta: [
    {
      name: "description",
      content:
        "I'm a full-stack developer with a passion for building web applications.",
    },
  ],
};
