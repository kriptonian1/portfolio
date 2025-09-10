import { component$ } from "@builder.io/qwik";

export const Bio = component$(() => {
  return (
    <div class="w-[20rem] text-xs font-light text-middle md:w-auto md:text-sm">
      I'm a full-stack developer with a passion for building web applications.
      I'm currently working at TrueZK, building the future of modular
      blockchains networks.
      <br />
      <br />
      I love to work with React, TypeScript, and Node.js. I'm also a fan of Rust
      and WebAssembly. I'm always looking for new opportunities to learn and
      grow.
      <br />
      <br />
      I'm also a huge fan of open-source software and I love to contribute to
      them. Me and my friends are working on a project called{" "}
      <span class="underline ">
        {" "}
        <a
          href="https://keyshade.xyz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Keyshade.
        </a>{" "}
      </span>
      Keyshade is a configuration management tool dev teams. It's built with
      Typescript, React, Node.js and Rust and it's open-source. We are gonna
      launch it soon.
    </div>
  );
});
