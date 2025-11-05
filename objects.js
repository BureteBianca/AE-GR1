const obj = {
    name: "Bianca",
    greet: function() {
        //console.log("Hello, "+ this.name);
        console.log(`Hello, ${this.name}`);
    },
    greet2: () => {
        //can not access this.name
        console.log("Hello, " + this.name);
    }
}

obj.name = "Andreea"

// obj.greet = function (){
//     console.log('My name is not Bianca')
// }

obj.greet();