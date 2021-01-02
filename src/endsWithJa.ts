
const engMos = ["a", "e", "i", "o", "u", "w", "y", "oh"]
const engCharJas = "lmnr";
const numJas = ["0", "1", "3", "6", "7", "8"]

function endsWithJa(string : string) {
    const len = string.length
    const charCode = string.toLowerCase().charCodeAt(len - 1)

    return (
        !!(
            charCode >= 44032
            && charCode <= 55203
            && (charCode - 0xAC00) % 28)
        ||
        (
            charCode >= 97
            && charCode <= 122
            && (
                len == 1 ?
                    engCharJas.includes(string)
                :
                    !engMos.some(engMo => string.endsWith(engMo))
            )
        )
        ||
        (
            charCode >= 48
            && charCode <= 57
            && numJas.some(numMo => string.endsWith(numMo)) && (string.substring(len - 12) !== "000000000000" || string.substring(len - 16) === "0000000000000000")
        )
    )
}

export default endsWithJa