import { defineStore } from "pinia";

export const useTranslationsStore = defineStore("translations", {
  state: () => ({
    translations: {} as Record<string, any>,
    currentLang: process.client
      ? localStorage.getItem("selectedLang") || "en"
      : "en", // Избегаем null
    isLoading: false,
  }),
  actions: {
    async fetchTranslations(lang: string) {
      this.isLoading = true;

      console.log(this.isLoading);

      try {
        const response = await $fetch<Record<string, string>>(
          "https://osoncopyapi.pythonanywhere.com/api/translations",
          {
            headers: {
              Language: lang,
            },
          }
        );
        this.translations[lang] = response;
        this.currentLang = lang;
        if (process.client) {
          localStorage.setItem("selectedLang", lang);
        }
      } catch (error) {
        console.error("Ошибка загрузки переводов:", error);
      } finally {
        this.isLoading = false;
      }
    },
    async setLanguage(lang: string) {
      if (this.currentLang === lang) return;
      await this.fetchTranslations(lang);
    },
    hydrate() {
      if (process.client) {
        const savedLang = localStorage.getItem("selectedLang");
        if (savedLang) {
          this.currentLang = savedLang;
        }
      }
    },
  },

  getters: {
    t: (state) => (key: string) => {
      const lang = state.currentLang || "en";
      return state.translations[lang]?.[key] || key;
    },
  },
});
