import endsWithJa from "./endsWithJa";

const entries = Object.entries({
    "를": "을",
    "이다": "이다",
    "가": "이",
    "는": "은",
    "와": "과",
    "야": "아",
    "여": "이여",
    "랑": "이랑",
    "나": "이나",
    "로": "으로",
    "란": "이란",
    "든": "이든",
    "야말로": "이야말로",
    "라고": "이라고",
    "에요": "이에요"
});

export default function josa(strings : TemplateStringsArray, ...holders : any[]) {
    let result = strings[0]
    for(let i = 1; i < strings.length; i++) {
        const string = strings[i]
        const holder = String(holders[i - 1])

        if(strings.raw[i][0] === "\\") {
            result += holder + string
            continue
        }
        
        const entry = entries.find(([mo, ja]) => string.startsWith(mo) || string.startsWith(ja))
        if(!entry) {
            result += holder + string
            continue
        }
        
        const isEndsWithJa = endsWithJa(holder);
        const josa = entry[+isEndsWithJa];
        result += holder + josa + string.slice(entry[1-(+isEndsWithJa)].length);
    }
    return result
}