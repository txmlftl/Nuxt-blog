<template>
  <UDashboardLayout>
    <UDashboardPanel :width="250" collapsible>
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

    <template #head>
      <HeaderNav />
    </template>
    <UDashboardPanel grow>
      <slot></slot>
    </UDashboardPanel>
    <ClientOnly>
      <LazyUDashboardSearch :groups="groups" />
    </ClientOnly>
  </UDashboardLayout>
</template>

<script setup lang="ts">
import HeaderNav from "~/components/HeaderNav.vue";

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
    id: "HTML",
    label: "HTML",
    icon: "i-mdi:language-html5",
    to: "/HTML/Index",
    tooltip: {
      text: "HTML",
      shortcuts: ["H", "L"],
    },
  },
  {
    id: "CSS",
    label: "CSS",
    icon: "i-mdi:language-css3",
    to: "/CSS/Index",
    tooltip: {
      text: "CSS",
      shortcuts: ["C", "S"],
    },
  },
  {
    id: "JavaScript",
    label: "JavaScript",
    icon: "i-ri:javascript-fill",
    to: "/JavaScript/Index",
    tooltip: {
      text: "JavaScript",
      shortcuts: ["J", "T"],
    },
  },
  {
    id: "NodeJs",
    label: "NodeJs",
    icon: "i-mdi:nodejs",
    to: "/NodeJs/Index",
    tooltip: {
      text: "NodeJs",
      shortcuts: ["N", "S"],
    },
  },
  // {
  //   id: "settings",
  //   label: "Settings",
  //   to: "/settings",
  //   icon: "i-heroicons-cog-8-tooth",
  //   children: [
  //     {
  //       label: "General",
  //       to: "/settings",
  //       exact: true,
  //     },
  //     {
  //       label: "Members",
  //       to: "/settings/members",
  //     },
  //     {
  //       label: "Notifications",
  //       to: "/settings/notifications",
  //     },
  //   ],
  // },
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
