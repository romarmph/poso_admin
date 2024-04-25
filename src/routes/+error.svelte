<script lang="ts">
  import { page } from "$app/stores";
</script>

{#if $page.status == 404}
  <div class="max-w-[50rem] flex flex-col mx-auto size-full pt-44">
    <header class="mb-auto flex justify-center z-50 w-full py-4">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src="src/lib/images/error_404.svg"
        alt="Image description"
        class="mt-5 mx-auto"
        width="450"
      />
    </header>
    <div class="text-center py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <h1
        class="block text-6xl font-bold text-gray-800 sm:text-4xl dark:text-white"
      >
        Page Not Found
      </h1>
      <p class="mt-3 text-gray-600 dark:text-gray-400">
        Oops, something went wrong.
      </p>
      <p class="text-gray-600 dark:text-gray-400">
        Sorry, we couldn't find your page.
      </p>
      <div
        class="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3"
      ></div>
    </div>
  </div>
{:else if $page.status == 401}
  <div class="max-w-[50rem] flex flex-col mx-auto size-full">
    <header class="mb-auto flex justify-center z-50 w-full py-4">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src="src/lib/images/access_denied.svg"
        alt="Image description"
        class="mt-5 mx-auto"
        width="450"
      />
    </header>
    <div class="text-center py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <h1
        class="block text-6xl font-bold text-gray-800 sm:text-4xl dark:text-white"
      >
        Page Not Found
      </h1>
      <p class="mt-3 text-gray-600 dark:text-gray-400">
        Oops, something went wrong.
      </p>
      <p class="text-gray-600 dark:text-gray-400">
        Sorry, we couldn't find your page.
      </p>
      <div
        class="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3"
      ></div>
    </div>
  </div>
{:else}
  <div class="max-w-[50rem] flex flex-col mx-auto size-full">
    <header class="mb-auto flex justify-center z-50 w-full py-4">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src="src/lib/images/server_down.svg"
        alt="Image description"
        class="mt-5 mx-auto"
        width="450"
      />
    </header>
    <div class="text-center py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <h1
        class="block text-6xl font-bold text-gray-800 sm:text-4xl dark:text-white"
      >
        Page Not Found
      </h1>
      <p class="mt-3 text-gray-600 dark:text-gray-400">
        Oops, something went wrong.
      </p>
      <p class="text-gray-600 dark:text-gray-400">
        Sorry, we couldn't find your page.
      </p>
      <div
        class="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3"
      ></div>
    </div>
  </div>
{/if}
