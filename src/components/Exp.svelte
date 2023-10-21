<script>
  import { EMPREGOS } from "$lib/constants";

  import Badge from "./Badge.svelte";
</script>

<section id="exp" class="container px-5 pt-20 mx-auto">
  <span
    class="inline-block py-1 px-2 mb-5 rounded bg-color-secondary/50 text-color-primary text-xs font-bold tracking-widest"
  >
    EXPERIÊNCIA
  </span>

  <div class="flex flex-col lg:flex-row gap-8">
    <p class="lg:w-1/3 leading-relaxed">
      Minha trajetória profissional começou em 2019 depois de me formar na <span
        class="text-white font-medium">Universidade Tiradentes</span
      >. Durante meu curso, já tinha experiência como estagiário, o que me
      proporcionou um conhecimento prático complementar às minhas habilidades
      teóricas. Depois de me formar, trabalhei como diretor de arte em uma
      agência de publicidade, onde aprimorei minhas
      <span class="text-white font-medium">capacidades criativas</span>
      e de <span class="text-white font-medium">comunicação visual</span>.
    </p>
    <p class="lg:w-1/3 leading-relaxed">
      Entretanto, a pandemia trouxe novos desafios, o que me fez explorar outras
      oportunidades em outras áreas. Durante esse período, atuei como <span
        class="text-white font-medium">designer gráfico freelancer</span
      >, ampliando meu portfólio e desenvolvendo
      <span class="text-white font-medium"
        >habilidades de gestão de negócios</span
      >
      e de
      <span class="text-white font-medium">relacionamento com clientes</span>.
      Além disso, assumi um papel de gestor administrativo em uma empresa
      alimentícia local, adquirindo experiência em outra área profissional.
    </p>
    <p class="lg:w-1/3 leading-relaxed">
      Durante a pandemia, comecei a me interessar por <span
        class="text-white font-medium">programação frontend</span
      >. Iniciei meus estudos autodidatas em
      <span class="text-white font-medium">HTML, CSS, JavaScript e React</span>,
      e agora tô em busca de minha primeira oportunidade de trabalho nessa área.
      Eu considero a minha carreira uma jornada de adaptação constante,
      aprendizado contínuo e busca por desafios.
    </p>
  </div>

  <div class="divide-y divide-gray-800/50">
    {#each EMPREGOS as cargo}
      <div class="py-8 lg:py-14 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="text-white text-sm font-bold">{cargo.empresa}</span>
          <span class="mt-1 text-sm">{cargo.data}</span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-bold text-white mb-2">
            {cargo.cargo}
          </h2>
          <p class="leading-relaxed">
            {cargo.descricao}
          </p>
          <div class="flex flex-wrap my-2 gap-x-2">
            {#each cargo.tech[0].nome as tech, index}
              <Badge text={tech} colors={cargo.tech[0].cores[index]} />
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
