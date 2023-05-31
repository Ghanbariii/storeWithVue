import { defineStore } from "pinia";
import { Ref } from "vue";
import { categoryDto } from "../models/categories/categoriesDTo";
import { GetAllCategory } from "~/services/category.service";

export const useUtilStore = defineStore("util", () => {
  const categories: Ref<categoryDto[]> = ref([]);

  const setCategories = async () => {
    if (categories.value.length == 0) {
      var res = await GetAllCategory();
      categories.value = res.data;
    }
  };
  return { categories, setCategories };
});
