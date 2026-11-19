window.TAVANYAR_CONFIG = {
  // اتصال به دیتابیس عمومی Supabase
  url: 'https://rresoitrkxeaetcloovj.supabase.co',
  anonKey: 'sb_publishable_EEB01YB72Xtqmd6tA-0jEw_IyO0gCTM',
  publicTable: 'public_store',

  // تنظیمات منطقه، ارسال و گاوصندوق
  store: {
    defaultProvince: 'استان اصفهان',
    defaultCity: 'شهرضا',
    baseDeliveryFee: 35000,
    coinValueToman: 1000,
    paymentThreshold: 2000000,
    defaultVaultOpen: true
  },

  // تنظیمات پشتیبانی و مدیریت
  support: {
    telegramShare: true,
    adminPasscode: '1234'
  }
};
