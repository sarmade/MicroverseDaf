function minimumDistances(a) {
    // Write your code here
    let n   = -1; // Minimum distance
    let d   = 0;
    let i   = 0;
    let j   = 0;
    // First loop
    for (i=0; i<a.length-1; i++) {
        // Second loop
        for(j=i+1; j < a.length; j++) {
            if (a[j] == a[i]) {
                d = Math.abs(j-i);
                if ((n > d) || (n == -1)) {
                    n = d;
                }
            }
        }
    }
    return n;
}
