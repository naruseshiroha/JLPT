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
const SUPPLES = ["類", "対", "関", "慣用", "同音", "▲"];

let types = [
  // TYPES[0],
  TYPES[15],
  // TYPES[16],
].join("·");
let sups = [
  SUPS[3],
  // SUPS[1],
].join("");
let hz = "潰れる"; // 漢字
let pjm = "つぶれる"; // 平仮名
let ys = [
  "压坏,挤破",
  "倒塌",
  "倒闭,破产",
  "泡汤,落空",
  "失去作用",
].join(";"); // 意思
if(ys.startsWith("(")) ys += ' ';
let lj = [
  "柿が潰れた。",
  "銀行が潰れた。",
]; // 例句
let fy = [
  "柿子被挤破了。",
  "银行倒闭。",
  "朴素的打扮",
]; // 翻译
let supple = [
  SUPPLES[2],
  SUPPLES[3],
  // "",
];// 补充
// ].join(""); 
let sphz = [
  "潰す",
  // "直ちに",
];
let sppjm = [
  "つぶす",
  // "ただちに",
];
let spsups = [
  [
    SUPS[2],
  ],
  [
    // SUPS[1],
  ]
];
let sptypes = [
  [
    TYPES[11],
  ],
  [
    // TYPES[1],
  ]
];
let spfy = [
  [
    "压扁,弄碎",
    "摧毁,使...破产",
    "破坏",
    "消磨,消遣",
  ],
  [
    "",
    // "",
  ]
];

let gylj = "面目が潰れる。";
let gyfy = "颜面尽失。";

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

// if(supple) {
//   template += `\`${supple}\` `;
//   if(supple !== "慣用") {
//     if (sphz) {
//       template += `\`${sphz}\`(${sppjm})`;
//     } else {
//       template += `\`${sppjm}\``;
//     }
//     template += `${spsups}[${sptypes}]${spfy}  \n`;
//   } else {
//     template += `${gylj}/${gyfy}  \n`;
//   }
// }

if(supple) {
  supple.forEach((s,i) => {
    console.log('i=',i);
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
fs.appendFile("00特别单元.md", `${template}\n`, (e) => e);
console.log(template);
