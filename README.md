# Multiple Choice Flash Card Practicing App · V 2.0

သင်ခန်းစာ / လေ့ကျင့်ခန်း (.csv, .xlsx, .zip + ပုံ) တင်ပြီး Multiple Choice Flash Card အဖြစ် ပြန်လေ့ကျင့်တဲ့ App။ Offline သုံးလို့ရတဲ့ PWA ဖြစ်ပါတယ်။

## GitHub Pages မှာ တင်နည်း
1. GitHub မှာ Repository အသစ် ဆောက်ပါ (ဥပမာ `mcq-flashcards`)။ Flash Card app နဲ့ **repo ခွဲထားပါ**။
2. ဒီ zip ထဲက file အားလုံးကို (folder `icons` အပါ) repo ရဲ့ အပေါ်ဆုံးမှာ upload တင်ပါ။
3. **Settings → Pages → Branch: `main` / `(root)` → Save**။
4. ၁-၂ မိနစ်အကြာ `https://<username>.github.io/mcq-flashcards/` ကို ဖွင့်ပါ။
5. ဖုန်း/Tablet: Chrome menu → **Install app / Add to Home screen**။ iPhone/iPad: Safari → Share → **Add to Home Screen**။ PC: address bar က install icon (သို့) app ထဲက **App ထည့်မယ်** ခလုတ်။
6. တစ်ခါဖွင့်ပြီးရင် အင်တာနက်မရှိလည်း သုံးလို့ရပါပြီ။

> `index.html` ကို update လုပ်တိုင်း `sw.js` ထဲက `VERSION` ကို တိုးပေးပါ (ဥပမာ `2.0.1`)။ ဒါမှ ဖုန်းတွေက version အသစ်ကို ယူပါမယ်။

## V 2.0 မှာ အသစ်
- 🌐 မြန်မာ ⇄ English ဘာသာစကား ပြောင်းခလုတ် (ရွေးထားတာကို မှတ်ထားပေးတယ်)
- 🔟 ရွေးစရာ ၂ ခုမှ ၁၀ ခုအထိ (က–ည / A–J, Keyboard 1–9, 0)
- 💡 Explanation column (မထည့်လည်းရ) ကို အဖြေပြီးမှ ပြတယ်
- 🔍 ရွေးစရာပုံတွေကို မဖြေဘဲ ချဲ့ကြည့်လို့ရတဲ့ ခလုတ်
- 📲 PWA: Offline, Install, icon အသစ် (Flash Card app နဲ့ မတူအောင်)

## ပြင်ထားတဲ့ Bug များ
- 🟡 ပုံချဲ့ကြည့်နေတုန်း 1–5 နှိပ်ရင် နောက်ကွယ်ကနေ ဖြေမိသွားတဲ့ bug (Esc / Enter နဲ့ ပုံပိတ်လို့ရပြီ)
- ရောမွှေ (Shuffle) ကို ပြန်ပိတ်လို့ မရတဲ့ bug
- ပထမ row က မေးခွန်းထဲမှာ "ရွေး" / "answer" စာလုံးပါရင် header လို့ ထင်ပြီး မေးခွန်း ပျောက်သွားတဲ့ bug
- Header မပါတဲ့ file မှာ ကျော်သွားတဲ့ row နံပါတ် တစ်ခု လွဲနေတဲ့ bug
- No. / Topic / Explanation column တွေက ရွေးစရာထဲ ရောပါသွားတဲ့ bug
- ကျော်သွားတဲ့ row အမျိုးမျိုးကို အကြောင်းပြချက် တစ်ခုတည်းနဲ့ ပြနေတဲ့ bug
- အဖြေမှန်က ပုံဖြစ်ရင် ကွက်လပ်နဲ့ ရလဒ်စာရင်းမှာ file နာမည် ပေါ်နေတဲ့ bug
- ရွေးစရာ ပုံ file မတွေ့ရင် သတိမပေးတဲ့ bug
- Ctrl+1 စတဲ့ browser shortcut တွေကလည်း အဖြေရွေးမိနေတဲ့ bug
- iPhone လို Full screen မရတဲ့ device မှာ အလုပ်မလုပ်တဲ့ ခလုတ်ကို ဖျောက်ထား
- နမူနာ ခေါင်းလောင်းပုံက အင်တာနက်ကနေ ယူနေလို့ offline မှာ ပျောက်တဲ့ bug
- Excel ကတန်ဖိုး (50%, 1,000) တွေကို Excel မှာ မြင်ရတဲ့အတိုင်း ဖတ်ပေးတယ်
- Flash Card app နဲ့ github.io site တစ်ခုတည်းမှာ ရှိရင် data မရောအောင် storage ခွဲထား

## File format
| Questions | Image | Options | Answer | Explanation |
|---|---|---|---|---|
| မေးခွန်း (`_____` = ကွက်လပ်) | `bell.jpg` (မထည့်လည်းရ) | `a\|b\|c` (သို့) column ခွဲ | စာသား / A–J / 1–10 / က–ည | မထည့်လည်းရ |

`mc-template-v2.csv` ကို နမူနာအဖြစ် ကြည့်ပါ။
