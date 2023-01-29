
function returnBiggestValue(A) {

    let freq = {}; 
    for (let i = 0; i < A.length; i++) {
        if (freq.hasOwnProperty(A[i])) {
            const current_frequency = freq[A[i]];
            freq[A[i]] = current_frequency + 1;
        } else {
            freq[A[i]] = 1;
        }
    }

    // track the 'biggest value' 
    // which will be the same as frequency 
    let biggest_value = 0;
    for (let i = 0; i < A.length; i++) {
        if (freq[A[i]] === A[i] && A[i] > biggest_value) {
            biggest_value = A[i];
        }
    };

    return biggest_value;
}
