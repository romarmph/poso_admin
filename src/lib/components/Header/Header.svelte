<script>
  import { LogOut } from "lucide-svelte";
  import AvatarDropdown from "./AvatarDropdown.svelte";
  import AvatarDropdownLink from "./AvatarDropdownLink.svelte";
</script>

<header
  class="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-white border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-gray-800 dark:border-gray-700"
>
  <nav
    class="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8"
    aria-label="Global"
  >
    <div class="me-5 lg:me-0 lg:hidden">
      <a
        class="flex-none text-xl font-semibold dark:text-white"
        href="/"
        aria-label="Brand">POSO</a
      >
    </div>

    <div
      class="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3"
    >
      <div class="hidden sm:block"></div>

      <div class="flex flex-row items-center justify-end gap-2">
        <AvatarDropdown>
          <AvatarDropdownLink>
            <form action="/auth/signout" method="POST">
              <button type="submit" class="flex gap-2">
                <LogOut /> Logout
              </button>
            </form>
          </AvatarDropdownLink>
        </AvatarDropdown>
      </div>
    </div>
  </nav>
</header>
