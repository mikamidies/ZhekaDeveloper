import { defineNuxtPlugin } from "#app";
import { useTranslationsStore } from "~/stores/translations";

export default defineNuxtPlugin(async () => {
  const translationsStore = useTranslationsStore();
  if (process.client) {
    translationsStore.hydrate(); // Инициализируем язык из localStorage
  }
  // Вызываем fetchTranslations - isLoading выставится в true, а затем в false по завершении
  await translationsStore.fetchTranslations(
    translationsStore.currentLang || "en"
  );
});
