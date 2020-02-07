const burmeseRandomWords = require('../dist')

console.log(burmeseRandomWords())
// 'ရိတ်သိမ်း'

console.log(burmeseRandomWords(3))
// [ 'ရော', 'တောင်ခါးပန်း', 'တိုင်းထွာ' ]

console.log(burmeseRandomWords({ min: 2, max: 7 }))
// [ 'ရမန်ခံ', 'ကာယ', 'ဦးရာလူ', 'မီးဖောင်' ]

console.log(burmeseRandomWords({ exactly: 3 }))
// [ 'ပဋ္ဌာန်း', 'ငှက်ပြာစိတ်', 'အစေ့အိမ်' ]

console.log(burmeseRandomWords({ type: 'noun', exactly: 5 }))
// [ 'အခိုင်', 'မဏိတော်', 'ဒဿနပညာ', 'ရတု', 'အုပ်စု' ]

console.log(burmeseRandomWords({ type: 'noun', exactly: 2, join: ' နှင့် ' }))
// 'ပန်းတည်ခုံ နှင့် ကျောင်းထိုင်ဆရာတော်'

console.log(
  burmeseRandomWords({ type: 'adjective' }) +
    'သော ' +
    burmeseRandomWords({ type: 'verb' }) +
    'ခြင်း '
)
// 'ရွှေရည်စိမ်သော ဥပဒေပြုခြင်း '

console.log(
  burmeseRandomWords({ type: 'noun' }) +
    'က ' +
    burmeseRandomWords({ type: 'noun' }) +
    'ကို ' +
    burmeseRandomWords({ type: 'verb' }) +
    'တယ်။ '
)

// 'ဗျူဟာက ထောင့်ချိုးကို မျက်နှာသာပေးတယ်။'
// 'ပျမ်းမျှခြင်းက အပြစ်ကို မဦးမချွတ်ပြောတယ်။'
