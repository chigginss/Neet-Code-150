function isAnagram(s: string, t: string): boolean {
    const first_string_array = s.split('');
    const second_string_array = t.split('');

    if (first_string_array.length !== second_string_array.length) {
        return false;
    }

    if (first_string_array.sort().join('') === second_string_array.sort().join('')) {
        return true;
    }
    return false;
};