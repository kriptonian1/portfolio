import { component$ } from "@builder.io/qwik";

export const HeadGradBlur = component$(() => {
  return (
    <div class="fixed inset-x-0 top-0 isolate z-10 h-12 w-full">
      <div
        style={{
          maskImage:
            "linear-gradient(to bottom,rgba(0,0,0,1) 0%,transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom,rgba(0,0,0,1) 0%,transparent 100%)",
        }}
        class="gradient absolute inset-0 blur-[1px] backdrop-blur-[1px]"
      />
      <div
        style={{
          maskImage:
            "linear-gradient(to bottom,rgba(0,0,0,1) 0%,transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom,rgba(0,0,0,1) 0%,transparent 100%)",
        }}
        class="gradient absolute inset-0 blur-[2px] backdrop-blur-[2px]"
      />
      <div
        style={{
          maskImage:
            "linear-gradient(to bottom,rgba(0,0,0,1) 0%,transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom,rgba(0,0,0,1) 0%,transparent 100%)",
        }}
        class="gradient absolute inset-0 blur-[3px] backdrop-blur-[3px]"
      />
      <div
        style={{
          maskImage:
            "linear-gradient(to bottom,rgba(0,0,0,1) 0%,transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom,rgba(0,0,0,1) 0%,transparent 100%)",
        }}
        class="gradient absolute inset-0 blur-[6px] backdrop-blur-[6px]"
      />
      <div
        style={{
          maskImage:
            "linear-gradient(to bottom,rgba(0,0,0,1) 0%,transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom,rgba(0,0,0,1) 0%,transparent 100%)",
        }}
        class="gradient absolute inset-0 blur-[12px] backdrop-blur-[12px]"
      />
    </div>
  );
});
