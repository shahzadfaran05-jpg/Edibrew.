/* ============================================================
   EDIBREW SETTINGS - edit this one file, no other file needed.
   Leave a value empty ('') to switch that feature off.
   ============================================================ */
window.EB = {
  WHATSAPP: '923234162041',                 // WhatsApp number, country code first, no + or spaces
  EMAIL: 'muhammadfaranshahzad@gmail.com',  // where order / review emails are sent
  CITY: 'Lahore, Pakistan',
  HOURS: 'Daily, 10 am to 8 pm',            // CHANGE to your real support hours

  DELIVERY_FEE: 150,                        // Rs per order
  FREE_DELIVERY_OVER: 0,                    // e.g. 1500 = free delivery above Rs 1500. 0 = off

  // Social media. Paste full profile links. Empty = icon hidden.
  SOCIAL: { instagram: '', facebook: '', tiktok: '', youtube: '' },

  // Payment methods shown at checkout. Cash on delivery is on by default.
  // Add your account details to switch on the others, e.g. jazzcash: '0300 1234567 (Name)'
  PAYMENT: { cod: true, jazzcash: '', easypaisa: '', bank: '' },

  // Discount codes. Example:  WELCOME10: { type: 'percent', value: 10 },  FLAT50: { type: 'flat', value: 50 }
  // Empty = the coupon box is hidden at checkout.
  COUPONS: {},

  // Stock levels (optional). Example: { 'chocolate-ribbed': 4, 'caramel-waffle': 0 }
  // 0 = Sold out, 5 or fewer = "Only N left". Products not listed show no badge.
  STOCK: {},

  // Approved customer reviews. New reviews arrive in your email; paste the good ones here, e.g.
  // { name: 'Ayesha', city: 'Lahore', rating: 5, product: 'Caramel cup', text: 'Loved it!', date: '2026-11-20' },
  REVIEWS: [],

  // Buyer confirmation email (recommended). Free EmailJS account, steps in buyer-email-setup.txt.
  // Leave empty to use the basic FormSubmit confirmation instead.
  EMAILJS: { SERVICE_ID: '', TEMPLATE_ID: '', PUBLIC_KEY: '' },

  GA_ID: '',        // Google Analytics 4 ID, e.g. G-XXXXXXXXXX
  PIXEL_ID: '',     // Meta (Facebook) Pixel ID
  SHEETS_URL: ''    // Google Sheets order log (see google-sheets-orders.gs)
};
