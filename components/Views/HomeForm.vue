<template>
  <div class="wrap">
    <div class="anchor" id="contact"></div>
    <div class="container">
      <h4 class="title">{{ t("main.contact") }}</h4>
      <form @submit.prevent="submitForm">
        <div class="inputs">
          <div class="inputter">
            <input
              required
              v-model="form.name"
              :placeholder="t('main.your_name')"
              type="text"
            />
            <Icon icon="ic:twotone-person-outline" />
          </div>
          <div class="inputter">
            <input
              v-model="form.phone"
              required
              :placeholder="t('main.your_number')"
              type="number"
            />
            <Icon icon="ic:twotone-local-phone" />
          </div>
          <div class="inputter">
            <input
              v-model="form.email"
              :placeholder="t('main.your_email')"
              type="text"
            />
            <Icon icon="ic:twotone-email" />
          </div>
        </div>
        <div class="holder">
          <textarea
            v-model="form.message"
            :placeholder="t('main.desc')"
          ></textarea>
          <Icon icon="material-symbols:ink-pen" />
        </div>
        <div class="agree">
          <label class="custom-checkbox">
            <input
              type="checkbox"
              v-model="isChecked"
              class="custom-checkbox__input"
            />
            <span class="custom-checkbox__checkmark"></span>
            <p class="warn" v-if="!checkboxError">
              {{ t("main.agree") }}
            </p>
            <p v-if="checkboxError" class="error-message">
              {{ t("main.have_to_agree") }}
            </p>
          </label>
        </div>
        <button class="submit" type="submit">
          <p>{{ loading ? t("main.sending") : t("main.submit") }}</p>
        </button>

        <transition name="fade"
          ><div v-if="successMessage" class="success">
            {{ successMessage }}
          </div></transition
        >
        <transition name="fade"
          ><div v-if="errorMessage" class="error">
            {{ errorMessage }}
          </div></transition
        >
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useNuxtApp } from "#app";
import { useTranslationsStore } from "~/stores/translations";

const translationsStore = useTranslationsStore();
const { t } = translationsStore;

const isChecked = ref(false);
const checkboxError = ref(false);

const form = ref({
  name: "",
  phone: "",
  email: "",
  message: "",
});

const loading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

const clearMessages = () => {
  setTimeout(() => {
    successMessage.value = "";
    errorMessage.value = "";
  }, 5000);
};

const submitForm = async () => {
  if (!isChecked.value) {
    checkboxError.value = true;
    return;
  }

  checkboxError.value = false;
  await submitApplication();
};

const submitApplication = async () => {
  loading.value = true;
  successMessage.value = "";
  errorMessage.value = "";

  try {
    const { $axios } = useNuxtApp();

    const response = await $axios.post("/application/create", form.value);

    if (response.status === 201) {
      successMessage.value = t("main.success");
      form.value = { name: "", phone: "", email: "", message: "" };
      isChecked.value = false;
      clearMessages();
    }
  } catch (error) {
    errorMessage.value = t("main.error");
    isChecked.value = false;
    clearMessages();
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.wrap {
  background: white;
  position: relative;
}
.anchor {
  transform: translateY(-120px);
}
.custom-checkbox {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
  gap: 16px;
}

.custom-checkbox__input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.custom-checkbox__checkmark {
  position: relative;
  height: 20px;
  width: 20px;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 1px;
  transition: background-color 0.2s, border-color 0.2s;
}

.custom-checkbox:hover .custom-checkbox__input ~ .custom-checkbox__checkmark {
  border-color: var(--blue);
}

.custom-checkbox__input:checked ~ .custom-checkbox__checkmark {
  background-color: var(--blue);
  border-color: var(--blue);
}

.custom-checkbox__checkmark::after {
  content: "";
  position: absolute;
  display: none;
  left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.custom-checkbox__input:checked ~ .custom-checkbox__checkmark::after {
  display: block;
}

.custom-checkbox__label {
  margin-left: 10px;
}

.submit {
  position: relative;
  margin: 24px 0 0 0;
  padding: 14px 48px;
  border: 0;
  background: var(--blue);
  border-radius: 0;
  transition: all 0.4s linear;
  overflow: hidden;
  border: 2px solid var(--blue);
}
.submit p {
  color: #fff;
  font: 14px "Montserrat", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  position: relative;
  z-index: 2;
  transition: 0.3s;
}
.submit::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 1;
  transition: 0.4s;
  transform: translateX(-102%);
}
.submit:hover::after {
  transform: translateX(0);
}
.submit:hover p {
  color: var(--blue);
}

.container {
  border-inline: 1px solid var(--border);
  padding: 0 0 72px 0;
  position: relative;
}
.container::after {
  position: absolute;
  display: block;
  width: 33.33%;
  height: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-left: 0.5px solid var(--border);
  border-right: 0.5px solid var(--border);
  content: "";
  z-index: 1;
  pointer-events: none;
}
.title {
  display: block;
  margin: 0 0 25px;
  font: 40px "Montserrat", sans-serif;
  font-weight: 700;
  line-height: 46px;
}
.inputs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 24px;
}
input {
  padding: 18px 24px;
  width: 100%;
  border-radius: 0px;
  background: var(--border);
  color: var(--black);
  border: 0;
}
textarea {
  padding: 18px 24px;
  width: 100%;
  border-radius: 0px;
  border: 0;
  background: var(--border);
  color: var(--black);
  height: 140px;
  resize: none;
}
input:focus,
textarea:focus {
  outline: none;
}
.inputter,
.holder {
  position: relative;
}
.inputter svg {
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);
}
.inputter :deep(path),
.holder :deep(path) {
  fill: var(--blue);
}
.holder svg {
  width: 24px;
  height: 24px;
  position: absolute;
  top: 24px;
  right: 24px;
}
.agree {
  margin-top: 24px;
}
.success,
.error {
  position: fixed;
  top: 56px;
  right: 72px;
  z-index: 999;
  border-radius: 4px;
  padding: 18px 32px;
  color: white;
  font-size: 18px;
  font-weight: 500;
}
.success {
  background: #52b788;
}
.error {
  background: #ba181b;
}
.error-message {
  color: #ba181b;
}
@media screen and (max-width: 1024px) {
  .title {
    font-size: 26px;
    line-height: 34px;
    margin-bottom: 16px;
  }
  .inputs {
    grid-template-columns: repeat(1, 1fr);
    gap: 12px;
    margin-bottom: 12px;
  }
  .holder svg {
    top: 16px;
  }
  .warn {
    font-size: 14px;
  }
  .submit {
    padding: 14px 0;
    width: 100%;
  }
  .submit::after {
    transform: translateX(0);
  }
  .submit p {
    color: var(--blue);
    font-size: 14px;
  }
  .success,
  .error {
    top: 16px;
    right: 16px;
    padding: 12px 16px;
    font-size: 14px;
  }
}
</style>
