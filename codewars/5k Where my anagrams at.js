function anagrams(word, words) {
    let word_chars = new Set(word);

    return words.filter((word_b) => {
        if (word.length !== word_b.length) return false;
        word_b = new Set(word_b);
        if (word_b.size !== word_chars.size) return false;
        for (let char_a of word_chars)
            if (!word_b.has(char_a))
                return false;
        return true;
    });
}


console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
console.log(anagrams('laser', ['lazing', 'lazy', 'lacer']))
console.log(new Set('abba') === new Set('aabb'));
console.log(anagrams('abba', ['aabb', 'abab', 'abbaa', 'abbab', 'abbba', 'abcd', 'baaab', 'baab', 'baba', 'babaa', 'bbaa']));