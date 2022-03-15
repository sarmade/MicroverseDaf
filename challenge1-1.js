function viralAdvertising(n) {
    // Write your code here
let cumulative = 0;
let people = 5;
let liked = 0;
for (var i = 0; i < n; i++) {
    liked = Math.floor(people/2);
    cumulative += liked;
    people = Math.floor(people/2) * 3;
    
}
return cumulative;
}
