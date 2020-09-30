//this의 개념과 스코프의 개념은 많이 비슷하다. 

var myProsess = {
    name : '',
    setName : (setName) =>{
        this.name = setName;
    },
    sayName : () =>{
        console.log(this.name);
    },
    axiosing : () =>{
        console.log(this);
        axios();
    }
}

function axios(){
    console.log(this);
}


myProsess.setName('개밥');
myProsess.sayName();
myProsess.axiosing();
