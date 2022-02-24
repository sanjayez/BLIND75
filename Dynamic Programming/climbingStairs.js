const climbStairs = (n) => {
    if(n === 0) return 1
    if((n - 2) < 0) return climbStairs(n - 1)
    return climbStairs(n - 1) + climbStairs(n - 2)
};

console.log(climbStairs(3))