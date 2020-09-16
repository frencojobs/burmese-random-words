const { generate } = require('../dist')

console.log(generate())
// 'ရိတ်သိမ်း'

console.log(generate(3))
// [ 'ရော', 'တောင်ခါးပန်း', 'တိုင်းထွာ' ]

console.log(generate({ min: 2, max: 7 }))
// [ 'ရမန်ခံ', 'ကာယ', 'ဦးရာလူ', 'မီးဖောင်' ]

console.log(generate({ exactly: 3 }))
// [ 'ပဋ္ဌာန်း', 'ငှက်ပြာစိတ်', 'အစေ့အိမ်' ]

console.log(generate({ type: 'noun', exactly: 5 }))
// [ 'အခိုင်', 'မဏိတော်', 'ဒဿနပညာ', 'ရတု', 'အုပ်စု' ]

console.log(generate({ type: 'noun', exactly: 2, join: ' နှင့် ' }))
// 'ပန်းတည်ခုံ နှင့် ကျောင်းထိုင်ဆရာတော်'

console.log(
  generate({ type: 'adjective' }) +
    'သော ' +
    generate({ type: 'verb' }) +
    'ခြင်း '
)
// 'ရွှေရည်စိမ်သော ဥပဒေပြုခြင်း '

console.log(
  generate({ type: 'noun' }) +
    'က ' +
    generate({ type: 'noun' }) +
    'ကို ' +
    generate({ type: 'verb' }) +
    'တယ်။ '
)

// 'ဗျူဟာက ထောင့်ချိုးကို မျက်နှာသာပေးတယ်။'
// 'ပျမ်းမျှခြင်းက အပြစ်ကို မဦးမချွတ်ပြောတယ်။'
