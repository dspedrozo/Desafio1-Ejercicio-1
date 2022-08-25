class operations {
    constructor(a,b){
        this.a = a;
        this.b = b;
    }

    sum = () => this.a+this.b;
    diff = () =>this.a-this.b;
    multi = () =>this.a*this.b;
    div = () => this.a/this.b;
}



export {
    operations
}