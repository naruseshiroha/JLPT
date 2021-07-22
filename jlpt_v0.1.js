const fs = require("fs");
const TYPES = [







  "名",
  "イ形",
  "ナ形",
  "副",
  "助",
  "嘆",
  "接",
  "連体",
  "連語",
  "接頭",
  "接尾",
  "他動 1",
  "他動 2",
  "他動 3",
  "自動 1",
  "自動 2",
  "自動 3",
  "自他動 1",
  "自他動 2",
  "自他動 3",
  "伊",
  "仏",
  "蘭",
  "独",
  "葡",
  "露",
];
const SUPS = ["⓪", "①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨"];
const SUPPLES = ["類", "対", "関", "同音", "慣用", "▲"];

let sups = [
  SUPS[0],
  // SUPS[1],
].join(""); // SUP
let types = [
  TYPES[15],
  // TYPES[16],
].join("·"); // 类型
let hz = "憧れる"; // 漢字
let pjm = "あこがれる"; // 平仮名
let ys = [
  "憧憬,向往",
]; 
// ].join(";"); // 意思
let lj = [
  "都会の生活に憧れる。",
  "アイドルに憧れる。",
]; // 例句
let fy = [
  "憧憬都市生活。",
  "向往成为偶像。",
  "外出,不在家。",
]; // 翻译
let supple = [
  // SUPPLES[3],
  // SUPPLES[2],
  // "",
];// 补充
// ].join(""); 
let sphz = [
  "明ける",
  "開ける",
  // "補助",
];
let sppjm = [
  "あける",
  "あける",
];
let spsups = [
  [
    SUPS[0],
  ],
  [
    SUPS[0],
  ]
];
let sptypes = [
  [
    TYPES[15],
    // TYPES[16],
  ],
  [
    TYPES[12],
    // TYPES[16],
  ]
];
let spfy = [
  [
    "天明;过年;(某一期间)期满,到期",
    // "意外地",
  ],
  [
    "打开;开办",
    // "累计,积攒",
  ]
];

let gylj = "呆れて物が言えない。";
let gyfy = "惊讶得哑口无言。";

let template = `---\n\n`;
if (hz) {
  template += `\`${hz}\`(${pjm})`;
} else {
  template += `\`${pjm}\``;
}
template += `${sups} [${types}] ${ys}  \n`;

lj.forEach((e, i) => {
  template += `▲ ${lj[i]}/${fy[i]}  \n`;
});

if(supple) {
  supple.forEach((s,i) => {
    template += `\`${s}\` `;
    if(s !== "慣用") {
      if (sphz[i]) {
        template += `\`${sphz[i]}\`(${sppjm[i]})`;
      } else {
        template += `\`${sppjm[i]}\``;
      }
      template += `${spsups[i].join("")} [${sptypes[i].join("·")}] ${spfy[i].join(";")}  \n`;
    } else {
      template += `${gylj}/${gyfy}  \n`;
    }
  })
}


fs.appendFile("JLPT.txt", `${template}\n`, (e) => e);
// fs.appendFile("00特别单元.md", `${template}\n`, (e) => e);
fs.appendFile("01第一单元.md", `${template}\n`, (e) => e);
console.log(template);
