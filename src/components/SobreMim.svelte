<script>
  import { TECH_STACK } from "$lib/constants";
  import AkarIconsArrowUpRight from "~icons/akar-icons/arrow-up-right";
  import SolarMapArrowRightBold from "~icons/solar/map-arrow-right-bold";
</script>

<section id="sobre" class="container px-5 pt-20 mx-auto">
  <span
    class="inline-block py-1 px-2 mb-5 rounded bg-color-secondary/50 text-color-primary text-xs font-bold tracking-widest"
  >
    SOBRE MIM
  </span>
  <div class="flex flex-col lg:flex-row gap-8">
    <p class="lg:w-1/3 leading-relaxed">
      Oi! Me chamo <span class="text-white font-medium">Matheus</span> e sou
      formado em Design Gráfico. Minha jornada profissional começou como
      designer freelancer. Com o tempo, meu interesse pelo{" "}
      <span class="text-white font-medium">desenvolvimento frontend</span>{" "}
      cresceu e, durante meu tempo livre, comecei a estudar as tecnologias dessa
      área. Hoje, sou um{" "}
      <span class="text-white font-medium">
        Frontend Developer e Designer UX/UI
      </span>{" "}
      apaixonado por criar interfaces belas, acessíveis e de alto desempenho.
    </p>
    <p class="lg:w-1/3 leading-relaxed">
      <span class="text-white font-medium">
        Minha abordagem abrange todo o ciclo de vida do projeto
      </span>
      , desde a concepção inicial até a implementação final. Atualmente eu busco
      oportunidades tanto freelance quanto em período integral nas áreas de{" "}
      <span class="text-white font-medium">
        desenvolvimento frontend e/ou de design ux/ui.
      </span>
      <br />
      No meu tempo livre, você me encontrará{" "}
      <a
        href="https://www.last.fm/user/blanctorche"
        class="text-white font-medium inline-flex items-center hover:text-color-primary transition-all duration-300 group"
        target="_blank"
      >
        ouvindo música{" "}
        <AkarIconsArrowUpRight
          width="15"
          height="15"
          class="ml-px group-hover:translate-x-px group-hover:-translate-y-px duration-300"
        />
      </a>{" "}
      ou{" "}
      <a
        href="https://u.gg/lol/profile/br1/entermaid/overview"
        class="text-white font-medium inline-flex items-center hover:text-color-primary transition-all duration-300 group"
        target="_blank"
      >
        jogando lolzinho{" "}
        <AkarIconsArrowUpRight
          width="15"
          height="15"
          class="ml-px group-hover:translate-x-px group-hover:-translate-y-px duration-300"
        />
      </a>
    </p>
    <div class="lg:w-1/3 leading-relaxed">
      <h2
        class="text-color-primary tracking-widest text-sm text-center lg:text-left mb-4"
      >
        MEU STACK TECNOLÓGICO
      </h2>

      <div class="flex flex-wrap text-center gap-2">
        {#each TECH_STACK as tech}
          <a
            href={tech.link}
            target="_blank"
            class="inline-flex items-center group"
          >
            <SolarMapArrowRightBold
              width="10"
              height="10"
              class="text-color-primary mr-2 group-hover:-rotate-45 transition ease-in-out"
            />
            <p
              class="text-white group-hover:text-color-primary transition ease-in-out"
            >
              {tech.nome}
            </p>
          </a>
        {/each}
      </div>
    </div>
  </div>
</section>
