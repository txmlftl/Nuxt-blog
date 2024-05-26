<script setup lang="ts"></script>

<template>
  <UDashboardNavbar title="Home">
    <template #right>
      <UTooltip text="Notifications" :shortcuts="['N']">
        <UButton
          color="gray"
          variant="ghost"
          square
          @click="isNotificationsSlideoverOpen = true"
        >
          <UChip color="red" inset>
            <UIcon name="i-heroicons-bell" class="w-5 h-5" />
          </UChip>
        </UButton>
      </UTooltip>

      
    </template>
  </UDashboardNavbar>
</template>
