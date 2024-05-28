function longestCommonPrefix(strs) {
    if (!strs.length) return "";
    let minLen = Math.min(...strs.map(str => str.length));

    let low = 1;
    let high = minLen;

    while (low <= high) {
        const middle = Math.floor((low + high) / 2);
        if (isCommonPrefix(strs, middle)) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }

    return strs[0].substring(0, (low + high) >> 1);
}

function isCommonPrefix(strs, len) {
    const prefix = strs[0].substring(0, len);
    for (let i = 1; i < strs.length; i++) {
        if (!strs[i].startsWith(prefix)) {
            return false;
        }
    }
    return true;
}
console.log(longestCommonPrefix(["flower","flow","flight"]));

console.log(longestCommonPrefix(["dog","racecar","car"]));