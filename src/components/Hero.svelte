<script>
  import { REDES_SOCIAIS } from "$lib/constants";
</script>

<section
  id="hero"
  class="container mx-auto flex px-5 2xl:px-28 pt-20 md:pt-24 lg:pt-24 2xl:pt-0 2xl:min-h-screen flex-col lg:flex-row items-center"
>
  <div class="lg:flex-grow lg:w-1/2 lg:pr-24 flex flex-col gap-y-8">
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white">
      Me chamo <span class="text-color-primary">Matheus Oliveira</span> e
      transformo{" "} <span class="text-color-primary">ideias</span> em{" "} experiências
      <span class="text-color-primary">visuais</span>
      e <span class="text-color-primary">digitais</span>
    </h1>
    <p class="text-lg md:text-xl leading-relaxed">
      Sou um <span class="text-white font-medium">designer gráfico</span> &
      <span class="text-white font-medium">programador frontend</span>
      que constrói produtos bonitos e acessíveis para a web. Trabalho primariamente
      com <span class="text-white font-medium">React</span> e design de
      <span class="text-white font-medium">UX/UI</span>, e gosto de explorar
      diferentes tecnologias para produzir o melhor para meus clientes.
    </p>
    <div class="inline-flex items-center justify-center lg:justify-start">
      <span class="relative flex h-3 w-3">
        <span
          class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"
        />
        <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500" />
      </span>
      <p class="text-center lg:text-left text-lg md:text-xl text-white ml-3">
        #OpenToWork
      </p>
    </div>
    <div class="flex justify-center lg:justify-start gap-x-3">
      {#each REDES_SOCIAIS as rede}
        <a href={rede.link} target="_blank" title={rede.nome}>
          <svelte:component
            this={rede.icone}
            class="w-8 h-8 hover:text-white transition ease-in-out"
          />
        </a>
      {/each}
    </div>
  </div>
  <a
    href="https://linksta.cc/@mthsoliveira7"
    target="_blank"
    class="lg:w-1/2 mt-10 lg:mt-0"
  >
    <img
      class="object-cover object-center rounded-full shadow-xl shadow-color-primary/10 transition ease-in-out duration-300 hover:shadow-2xl hover:shadow-color-primary/50"
      alt="hero"
      src="hero-img.png"
    />
  </a>
</section>
