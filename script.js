function getLengthLastWord(str) {
    const regExp = /[^\s]+/g
    let words = str.match(regExp)
    return words[words.length - 1].length
}
console.log(getLengthLastWord("Hello World"))
console.log(getLengthLastWord("   fly me   to   the moon  "))
console.log(getLengthLastWord("luffy is still joyboy"))