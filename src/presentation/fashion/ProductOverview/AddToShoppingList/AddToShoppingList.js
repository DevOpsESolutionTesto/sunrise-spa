import { computed } from 'vue';
export default {
  name: 'AddToShoppingList',
  props: {
    showModal: {
      type: String,
      required: true,
    },
    productSku: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const display = computed(() => {
      return props.showModal;
    });
    
    const emitClose = () => {
      emit('close-modal', {});
    };

    return {
      display,
      emitClose
    }
  },
};
