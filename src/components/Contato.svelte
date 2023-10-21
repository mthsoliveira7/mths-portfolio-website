<script>
  import { REDES_SOCIAIS, CONTATO_INFO } from "$lib/constants";
  import AkarIconsArrowUpRight from "~icons/akar-icons/arrow-up-right";
</script>

<section
  id="contato"
  class="relative h-screen flex items-center justify-center mt-10"
>
  <img
    src="background.png"
    alt="background"
    class="absolute inset-0 object-cover w-full h-full"
    loading="lazy"
  />

  <div
    class="z-10 mx-8 bg-neutral-950 ring-1 ring-neutral-800 ring-inset shadow-xl shadow-black/80 rounded-lg p-10 flex flex-col gap-y-4"
  >
    <span
      class="inline-block py-1 px-2 w-fit rounded bg-color-secondary/50 text-color-primary text-xs font-semibold tracking-widest"
    >
      CONTATO
    </span>
    <p class="leading-relaxed">
      Você pode entrar em contato direto comigo por algum desses meios:
    </p>

    <div class="flex flex-col lg:flex-row gap-x-8">
      {#each CONTATO_INFO as info}
        <div class="mb-3 group">
          <h2 class="tracking-widest text-xs font-medium text-white mb-1">
            {info.nome}
          </h2>
          <h1 class="text-2xl font-black text-white select-all">
            {info.valor}
          </h1>
        </div>
      {/each}
    </div>

    <p
      class="leading-relaxed border-t border-gray-800/50 pt-4 text-center lg:text-left"
    >
      Ou me acompanhar nas redes sociais:
    </p>

    <div
      class="flex flex-row flex-wrap text-center justify-center lg:justify-start gap-x-5 gap-y-3"
    >
      {#each REDES_SOCIAIS as link}
        <a
          href={link.link}
          target="_blank"
          class=" inline-flex items-center font-black text-white group hover:text-color-primary transition ease-in-out"
        >
          {link.nome}
          <AkarIconsArrowUpRight
            width="16"
            height="16"
            class="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition ease-in-out"
          />
        </a>
      {/each}
    </div>
  </div>
</section>
