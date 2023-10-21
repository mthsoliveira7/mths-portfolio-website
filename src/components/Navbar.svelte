<script>
  import { NAV_LINKS } from "$lib/constants";
  import PhList from "~icons/ph/list";
  import PhX from "~icons/ph/x";
  import AkarIconsArrowUpRight from "~icons/akar-icons/arrow-up-right";

  let menuAberto = false;

  function alternarMenu() {
    menuAberto = !menuAberto;
  }
</script>

<header
  class="p-4 fixed top-0 w-full z-20 bg-neutral-950/70 backdrop-filter backdrop-blur-xl"
>
  <div class="container mx-auto flex items-center justify-between">
    <a
      href="#hero"
      class="text-white font-bold text-xl inline-flex items-center"
      ><img src="favicon.png" alt="logo" class="h-4 w-4 mr-2" />
      MTHS</a
    >
    <div class="md:hidden flex text-white">
      {#if menuAberto}
        <button on:click={alternarMenu}>
          <PhX width="25" height="25" />
        </button>
      {:else}
        <button on:click={alternarMenu}>
          <PhList width="25" height="25" />
        </button>
      {/if}
    </div>

    <!--  Menu desktop -->
    <nav class="hidden md:inline-flex items-center gap-x-4">
      {#each NAV_LINKS as link}
        <a href={link.link} class="text-sm font-medium hover:text-white"
          >{link.nome}</a
        >
      {/each}
      <a
        href="https://media.tenor.com/CmcVmK0EC0kAAAAC/coming-soon-em-breve.gif"
        target="_blank"
        class="text-sm font-medium py-1 px-2 inline-flex items-center bg-neutral-800 hover:bg-color-secondary rounded-lg group hover:text-color-primary duration-300"
      >
        Currículo
        <AkarIconsArrowUpRight
          width="15"
          height="15"
          class="ml-px group-hover:translate-x-px group-hover:-translate-y-px duration-300"
        />
      </a>
    </nav>
  </div>

  <!--  Menu mobile -->
  {#if menuAberto}
    <nav
      class="text-white font-bold text-center text-2xl md:hidden flex flex-col gap-y-4 h-screen justify-center"
    >
      {#each NAV_LINKS as link}
        <a href={link.link} on:click={alternarMenu}>
          {link.nome}
        </a>
      {/each}
      <a
        href="https://media.tenor.com/CmcVmK0EC0kAAAAC/coming-soon-em-breve.gif"
        target="_blank"
        on:click={alternarMenu}
        class="mx-auto inline-flex items-center"
      >
        Currículo
        <AkarIconsArrowUpRight width="15" height="15" class="ml-1" />
      </a>
    </nav>
  {/if}
</header>
