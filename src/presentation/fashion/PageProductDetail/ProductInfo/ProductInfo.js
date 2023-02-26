import VariantSelector from './VariantSelector/VariantSelector.vue';
import BasePrice from 'presentation/components/BasePrice/BasePrice.vue';
import AddToCartForm from './AddToCartForm/AddToCartForm.vue';
import DetailsSection from './DetailsSection/DetailsSection.vue';
import ProductGallery from './ProductGallery/ProductGallery.vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import {
  getAttributeValue,
} from 'containers/lib';
import useLocale from 'hooks/useLocale';

export default {
  name: 'ProductInfo',
  props: {
    sku: {
      type: String,
      required: true,
    },
    currentVariant: {
      type: Object,
      required: true,
    },
    allVariants: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    const { t } = useI18n();
    const openAddToShoppingList = () => {
      emit('open-add-shopping-list', {
        slug: props.currentVariant.slug,
        sku: props.currentVariant.sku,
      });
    };
    const availableQuantity = ref(props.allVariants.length);
    const { locale } = useLocale();
    const deliveryTime = getAttributeValue(props.currentVariant.attributesRaw[1].value, locale.value);
    return {
      openAddToShoppingList,
      availableQuantity,
      deliveryTime,
      t
    };
  },
  components: {
    DetailsSection,
    ProductGallery,
    // SocialMediaLinks,
    AddToCartForm,
    BasePrice,
    VariantSelector,
  },
};
