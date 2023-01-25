function groupAnagrams(strs: string[]): string[][] {
    const anagrams = strs.map(x => x.split('').sort().join(''));
    let mp = {};

    for (let i = 0; i < anagrams.length; i++) {
       if (mp.hasOwnProperty(anagrams[i])) {
           const updated = mp[anagrams[i]];
           updated.push(strs[i]);
           mp[anagrams[i]] = updated;
       } else {
           mp[anagrams[i]] = [strs[i]];
       }
    }

    return Object.values(mp);
};