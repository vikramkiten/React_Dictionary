const multiplier={
    numbers:[12,5,4,3,6,8],
    multiply(a){
        return this.numbers.map((temp)=>temp*a);

    }
}
console.log(multiplier.multiply(3));