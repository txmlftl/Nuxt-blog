/*
npm i -D @vicons/fluent
npm i -D @vicons/ionicons4
npm i -D @vicons/ionicons5
npm i -D @vicons/antd
npm i -D @vicons/material
npm i -D @vicons/fa # font awesome
npm i -D @vicons/tabler
npm i -D @vicons/carbon
*/

import { h } from "vue";

import { NIcon } from "naive-ui";

const renderIcon = (icon) => {
  return () => h(NIcon, null, { default: () => h(icon) });
};
export default renderIcon;
