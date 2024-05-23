<template>
  <UDashboardLayout>
    <UDashboardPanel
      :width="250"
      :resizable="{ min: 200, max: 300 }"
      collapsible="hidden"
    >
      <UDashboardNavbar>
        <template #left> 11111111111 </template>
      </UDashboardNavbar>

      <UDashboardSidebar>
        <template #header>
          <UDashboardSearchButton
            @click="toggleDashboardSearch"
            label="Search..."
          />
        </template>
        <UDashboardSidebarLinks :links="links" />
        <UDivider />
        <template #footer>
          <UserDorpDown />
        </template>
      </UDashboardSidebar>
    </UDashboardPanel>

    <slot></slot>
    <ClientOnly>
      <LazyUDashboardSearch :groups="groups" />
    </ClientOnly>
  </UDashboardLayout>
</template>

<script setup lang="ts">
const { toggleDashboardSearch, isDashboardSearchModalOpen } = useUIState();
const links = [
  {
    id: "home",
    label: "Home",
    icon: "i-heroicons-home",
    to: "/",
    tooltip: {
      text: "Home",
      shortcuts: ["H", "E"],
    },
  },

  {
    id: "html",
    label: "HTML",
    icon: "i-mdi-language-html5",
    to: "/html/Index",
    tooltip: {
      text: "HTML",
      shortcuts: ["H", "L"],
    },
  },

  //   {
  //     id: "settings",
  //     label: "Settings",
  //     to: "/settings",
  //     icon: "i-heroicons-cog-8-tooth",
  //     children: [
  //       {
  //         label: "General",
  //         to: "/settings",
  //         exact: true,
  //       },
  //       {
  //         label: "Members",
  //         to: "/settings/members",
  //       },
  //       {
  //         label: "Notifications",
  //         to: "/settings/notifications",
  //       },
  //     ],
];
const groups = [
  {
    key: "links",
    label: "Go to",
    commands: links.map((link) => ({
      ...link,
      shortcuts: link.tooltip?.shortcuts,
    })),
  },
];
</script>

<style lang="scss" scoped></style>
