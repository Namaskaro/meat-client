import { ref } from 'vue';
export const LAYOUTS = {
  shop: Symbol('shop'),
  auth: Symbol('auth'),
  admin: Symbol('admin'),
};
const layout = ref(LAYOUTS.standard);
const setLayout = layoutType => {
  layout.value = layoutType;
};
export const useLayout = () => {
  return {
    layout,
    setLayout,
    LAYOUTS,
  };
};
