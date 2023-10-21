<script>
  import { REDES_SOCIAIS, MEU_FONE, GUARDA_NOTAS } from "$lib/constants";
  import Badge from "./Badge.svelte";
  import AkarIconsArrowUpRight from "~icons/akar-icons/arrow-up-right";
  import PhLinkSimpleBold from "~icons/ph/link-simple-bold";
</script>

<section id="projetos" class="container px-5 pt-20 mx-auto">
  <span
    class="inline-block py-1 px-2 mb-5 rounded bg-color-secondary/50 text-color-primary text-xs font-bold tracking-widest"
  >
    PROJETOS
  </span>

  <p class="mb-8 leading-relaxed">
    Além dos projetos abaixo, esse portfólio que você tá acessando no momento
    foi <a
      href="https://media.tenor.com/CmcVmK0EC0kAAAAC/coming-soon-em-breve.gif"
      class="text-white font-medium inline-flex items-center hover:text-color-primary transition-all duration-300 group"
      target="_blank"
    >
      projetado{" "}
      <AkarIconsArrowUpRight
        width="15"
        height="15"
        class="ml-px group-hover:translate-x-px group-hover:-translate-y-px duration-300"
      />
    </a>
    e
    <a
      href="https://github.com/mthsoliveira7/website-portfolio"
      class="text-white font-medium inline-flex items-center hover:text-color-primary transition-all duration-300 group"
      target="_blank"
    >
      codado{" "}
      <AkarIconsArrowUpRight
        width="15"
        height="15"
        class="ml-px group-hover:translate-x-px group-hover:-translate-y-px duration-300"
      />
    </a>
    por mim mesmo. <br class="hidden lg:block" />Optei por criar um site
    simples, visando uma
    <span class="font-medium text-white">rápida performance</span> e uma
    apresentação de <span class="font-medium text-white">conteúdo concisa</span>
    mas sem comprometer a estética.
  </p>

  <!-- Primeiro projeto -->
  <a
    href={MEU_FONE.links.demo}
    target="_blank"
    class="rounded-lg overflow-hidden ring-1 ring-zinc-800/50 ring-inset shadow-md flex flex-col lg:flex-row group mb-10"
  >
    <!-- Right Side (Image) - Display on top for mobile and tablet -->
    <div class="w-full lg:w-1/2 relative overflow-hidden">
      <img
        src={MEU_FONE.thumbnail}
        alt="Thumbnail do projeto"
        class="w-full h-full lg:rounded-l-lg transform transition-transform group-hover:scale-110 group-hover:-rotate-3"
      />
    </div>

    <!-- Left Side (Text) - Display on bottom for mobile and tablet -->
    <div class="w-full lg:w-1/2 p-8 my-auto">
      <h2
        class="text-2xl text-white font-black inline-flex items-center group-hover:text-color-primary transition duration-200"
      >
        {MEU_FONE.nome}
        <AkarIconsArrowUpRight
          width="20"
          height="20"
          class="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-200"
        />
      </h2>
      <p
        class="mt-2 leading-relaxed text-base group-hover:text-white transition duration-200"
      >
        {MEU_FONE.descricao}
      </p>

      <div class="flex mt-6 justify-center lg:justify-start">
        <a
          href={MEU_FONE.links.repo}
          target="_blank"
          class=" inline-flex tracking-widest text-xs font-semibold text-white hover:text-color-primary hover:underline uppercase mr-4"
          ><PhLinkSimpleBold
            width="13"
            height="13"
            class="mr-2 mt-px"
          />Repositório</a
        >
        <a
          href={MEU_FONE.links.design}
          target="_blank"
          class=" inline-flex tracking-widest text-xs font-semibold text-white hover:text-color-primary hover:underline uppercase mr-4"
          ><PhLinkSimpleBold width="13" height="13" class="mr-2 mt-px" />Design
          do figma</a
        >
      </div>
      <div
        class="flex flex-wrap justify-center lg:justify-start my-2 space-x-2"
      >
        {#each MEU_FONE.tech.nome as techName, i}
          <Badge text={techName} colors={MEU_FONE.tech.cores[i]} />
        {/each}
      </div>
    </div>
  </a>

  <!-- Segundo projeto -->
  <a
    href={GUARDA_NOTAS.links.demo}
    target="_blank"
    class="rounded-lg overflow-hidden ring-1 ring-zinc-800/50 ring-inset shadow-md flex flex-col-reverse lg:flex-row group"
  >
    <!-- Left Side (Text) - Display on bottom for mobile and tablet -->
    <div class="w-full lg:w-1/2 p-8 my-auto lg:text-right">
      <h2
        class="text-2xl text-white font-black inline-flex items-center group-hover:text-color-primary transition duration-200"
      >
        {GUARDA_NOTAS.nome}
        <AkarIconsArrowUpRight
          width="20"
          height="20"
          class="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-200"
        />
      </h2>
      <p
        class="mt-2 leading-relaxed text-base group-hover:text-white transition duration-200"
      >
        {GUARDA_NOTAS.descricao}
      </p>

      <div class="flex mt-6 justify-center lg:justify-end">
        <a
          href={GUARDA_NOTAS.links.repo}
          target="_blank"
          class="inline-flex items-center tracking-widest text-xs font-semibold text-white hover:text-color-primary hover:underline uppercase mr-4"
          ><PhLinkSimpleBold
            width="13"
            height="13"
            class="mr-2"
          />Repositório</a
        >
        <a
          href={GUARDA_NOTAS.links.design}
          target="_blank"
          class="inline-flex items-center tracking-widest text-xs font-semibold text-white hover:text-color-primary hover:underline uppercase"
          ><PhLinkSimpleBold width="13" height="13" class="mr-2" />Design do
          figma</a
        >
      </div>

      <div class="flex flex-wrap justify-center lg:justify-end my-2 space-x-2">
        {#each GUARDA_NOTAS.tech.nome as techName, i}
          <Badge text={techName} colors={GUARDA_NOTAS.tech.cores[i]} />
        {/each}
      </div>
    </div>

    <!-- Right Side (Image) - Display on top for mobile and tablet -->
    <div class="w-full lg:w-1/2 relative overflow-hidden">
      <img
        src={GUARDA_NOTAS.thumbnail}
        alt="Thumbnail do projeto"
        class="w-full h-full lg:rounded-r-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3"
      />
    </div>
  </a>

  <!-- minhas redes -->
  <h2
    class="text-base font-medium text-color-primary tracking-widest uppercase text-center my-10"
  >
    Confira esses e mais projetos nos links abaixo
  </h2>

  <div class="flex flex-col md:flex-row mx-auto">
    {#each REDES_SOCIAIS as rede}
      {#if rede.descricao}
        <a href={rede.link} target="_blank" class="p-2 w-full md:w-1/3 group">
          <div
            class="h-full bg-neutral-900/60 group-hover:bg-neutral-900 px-8 py-16 rounded-lg overflow-hidden text-center relative transition ease-in-out"
          >
            <svelte:component
              this={rede.icone}
              class="w-8 h-8 mx-auto mb-3 text-white transition ease-in-out"
            />
            <h1
              class="inline-flex items-center sm:text-2xl text-xl font-medium mb-3 text-white group-hover:underline underline-offset-8"
            >
              <p>{rede.nome}</p>
              <AkarIconsArrowUpRight
                width="16"
                height="16"
                class="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition ease-in-out"
              />
            </h1>
            <p>
              {rede.descricao}
            </p>
          </div>
        </a>
      {/if}
    {/each}
  </div>
</section>
