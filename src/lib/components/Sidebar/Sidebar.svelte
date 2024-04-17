<script>
  import {
    Briefcase,
    LayoutDashboard,
    PersonStanding,
    ShieldCheck,
    AppWindow,
    Shapes,
    Flag,
    Ticket,
    HandCoins,
  } from "lucide-svelte";
  import SidebarUrl from "./subcomponents/Sidebar-Url.svelte";
  import SidebarDivider from "./subcomponents/Sidebar-Divider.svelte";
</script>

<div
  id="application-sidebar"
  class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700"
>
  <div class="px-6">
    <a
      class="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      href="#"
      aria-label="Brand">POSO ADMIN</a
    >
  </div>
  <nav
    class="flex flex-col flex-wrap w-full p-6 hs-accordion-group"
    data-hs-accordion-always-open
  >
    <ul class="space-y-1.5">
      <SidebarDivider title="Analytics" />
      <li>
        <SidebarUrl name="Dashboard" route="/">
          <LayoutDashboard />
        </SidebarUrl>
      </li>
      <SidebarDivider title="Tickets" />
      <li class="hs-accordion" id="users-accordion">
        <SidebarUrl name="Payment" route="/payment">
          <Briefcase />
        </SidebarUrl>
      </li>
      <li class="hs-accordion" id="account-accordion">
        <SidebarUrl name="Tickets" route="/tickets">
          <Ticket />
        </SidebarUrl>
      </li>
      <li class="hs-accordion" id="account-accordion">
        <SidebarUrl name="Incentives" route="/incentives">
          <HandCoins />
        </SidebarUrl>
      </li>
      <SidebarDivider title="Employees" />
      <li class="hs-accordion" id="projects-accordion">
        <SidebarUrl name="Enforcer" route="/enforcer">
          <PersonStanding />
        </SidebarUrl>
      </li>
      <li>
        <SidebarUrl name="Admin" route="/admin">
          <ShieldCheck />
        </SidebarUrl>
      </li>
      <SidebarDivider title="System" />
      <li>
        <SidebarUrl name="Violations" route="/violations">
          <AppWindow />
        </SidebarUrl>
      </li>
      <li>
        <SidebarUrl name="Vehicle Types" route="/vehicle-types">
          <Shapes />
        </SidebarUrl>
      </li>
      <li>
        <SidebarUrl name="Traffic Post" route="/traffic-post">
          <Flag />
        </SidebarUrl>
      </li>
    </ul>
  </nav>
</div>
<!-- End Sidebar -->
