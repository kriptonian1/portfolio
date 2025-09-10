import { component$ } from "@builder.io/qwik";
import SawanImage from "~/media/sawan.png?jsx";
import MapImage from "~/media/map.png?jsx";
import FalschParkerImage from "~/media/falschparker.png?jsx";
import { HEADING_DETAILS } from "~/constant/heading";

export const Heading = component$(() => {
  const { name, currentCompany, country, city } = HEADING_DETAILS;

  return (
    <h1 class="flex flex-col pt-20 font-serif text-2xl antialiased md:text-4xl">
      <div class="flex items-center gap-2">
        <span class="text-light">Hey,</span>
        <span class="text-dark">I’m</span>
        <SawanImage
          alt="sawan's image"
          draggable={false}
          class="w-10 md:w-20"
        />
        <span class="text-dark">{name}</span>
      </div>
      <div class="flex items-center gap-2 md:-translate-y-4">
        <span class="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text text-transparent">
          a Developer
        </span>
        <span class="text-light">at</span>
        <FalschParkerImage
          alt="Falsch Parker's Logo"
          draggable={false}
          class="aspect-square w-10 -translate-x-2 md:w-24"
        />
        <span class="-translate-x-4 text-dark">{currentCompany}</span>
      </div>
      <div class="flex items-center gap-2 md:-translate-y-8">
        <span class="text-light">based in</span>
        <span class="text-dark">{city},</span>

        <MapImage
          alt="Kolkata's Map"
          draggable={false}
          class="w-10 -translate-x-2 translate-y-3 md:w-24"
        />

        <span class="-translate-x-4 text-dark">{country}</span>
      </div>
    </h1>
  );
});
