function getOdds(nums) {
    const oddNumbers = nums.filter(num => num % 2 !== 0);
    console.log(oddNumbers);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
getOdds(numbers); //DEBERÍA dar [1, 3, 5, 7, 9]
