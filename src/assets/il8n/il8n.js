import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
const resources = {
  en: {
    translation: {
      Dashboard: "Dashboard",
    },
  },
  fa: {
    translation: {
      Dashboard: "پیشخوان",
      auth: {
        errorLoginMessage: "نام کاربری یا رمزعبور اشتباه است",
        selectTypeUser: "انتخاب نوع همکاری",
        MERCHANT: "فروشنده - فروشگاه هستم",
        PUBLISHER: "ناشر - آگهی دهنده",
        NATURAL: "حقوقی",
        LEGAL: "حقیقی",
        phone: "شماره تلفن",
        password: "رمز عبور",
        passwordConfirm: "تکرار رمز عبور",
        showAgreement: "قوانین و مقررات",
        passwordNotMatch: "عدم تطابق رمزهای عبور",
        helpPassword: "رمز عبور حداقل ۸ حرف ترکیبی از حروف، اعداد و نماد ",
        register: "ثبت نام",
        forgot: "یادآوری رمز عبور",
        login: "ورود",
        contractTitle: "قوانین و مقررات",
        contractText: `سامانه همکاری در فروش (که در این قرارداد به اختصار سامانه همکاری نامیده می‌شود.)، سامانه ای است که بر روی وب سایت دیجی کالا به آدرس www.Digikala.com ایجاد می‌شود و شامل نرم افزار، اپلیکیشن، سرویس ها، داده ها و طراحی های موجود در آن می‌باشد.
        عضو شدن در آن به شما امکان می دهد که از وب سایت ، شبکه اجتماعی، و نرم افزارهای آنلاین خود (که در این شرایط و قوانین به اختصار "وبسایت" نامیده می شوند .( درآمدزایی بنمایید. اشخاصی که در این سامانه عضو شده و نام کاربری و رمز عبور دریافت نمایند، همکار/ همکاران نامیده می شوند.
        دیجی کالا در سامانه همکاری در فروش، یک لینک اختصاصی که برای هر فرد به صورت مجزا تعریف می‌شود، در اختیارتان قرار می دهد و لینک مذکور باید به طور کاملا صحیح و از فرمت لینک تگ شده ی مخصوصی که دیجی کالا تهیه نموده و مطابق این شرایط و قوانین تنظیم شده است، باشد.
        این لینک در واقع کالاهای پیشنهادی دیجی کالا را معرفی می نماید که مطابق با موضوع فعالیت "وبسایت" شما، کالاهای مرتبط را در بر می گیرد.
        شما با قراردادن لینک اختصاصی خود در "وب سایت" تان، می توانید درآمد زایی کنید.`,
        verify: "تایید شماره همراه",
        successRegisterMessage: "ثبت نام با موفقیت انجام شد.",
        successLoginMessage: "در حال انتقال ...",
      },
      required: "* الزامی",
      loading: "...",
    },
  },
};
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "fa", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
