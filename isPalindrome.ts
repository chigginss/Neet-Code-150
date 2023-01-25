function isPalindrome(s: string): boolean {
    let re = /[^A-Za-z0-9]/g;
    const clean = s.toLowerCase().replace(re, '');
    const len = clean.length;

    for (let i = 0; i < len / 2; i++) {
        if (clean[i] !== clean[len - 1 - i]) {
            return false;
        }
    }

    return true;
};