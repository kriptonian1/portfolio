import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import { FooterGradBlur } from "~/components/FooterGradBlur";
import { HeadGradBlur } from "~/components/HeadGradBlur";
import { NavDocker } from "~/components/NavDocker";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <>
    <HeadGradBlur />
      <main class="flex flex-col items-center antialiased">
        <Slot />
        <NavDocker />
        <div class="h-[10rem]" />
      </main>
      <FooterGradBlur />
    </>
  );
});
