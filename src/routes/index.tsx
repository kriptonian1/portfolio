import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import SawanImage from "~/media/sawan.png?jsx";
import TzkImage from "~/media/truezk.png?jsx";
import MapImage from "~/media/map.png?jsx";

export default component$(() => {
  return (
    <div class="flex flex-col font-serif pt-20 text-xl md:text-4xl antialiased">
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
      <div class="flex items-center gap-2">
        <span
          class="text-dark"
          // style={{
          //   background:
          //     "linear-gradient(90deg, #5CABD6 0%, #806FD9 12.5%, #D963E1 25%, #F06195 37.5%, #F0A655 50%, #91E77B 63.5%, #61E8BA 76.5%, #5CABD6 88.5%)",
          // }}
        >
          a full-stack
        </span>
        <span class="text-light">at</span>
        <TzkImage
          alt="TrueZk's Logo"
          draggable={false}
          class="aspect-square w-12 -translate-x-2 md:w-24"
        />
        <span class="text-dark -translate-x-4">TrueZK</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-light">based in</span>
        <span class="text-dark">Kolkata,</span>
        <MapImage
          alt="Kolkata's Map"
          draggable={false}
          class="w-10 -translate-x-2 translate-y-3 md:w-24"
        />
        <span class="text-dark -translate-x-4">IN</span>
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
