class BankDetails{
    constructor(name,branch,bloc){
        this.bloc=bloc;
        this.branch=branch;
        this.name=name;
    }
}
let myBank = new BankDetails("axis","banglaore","dfghdkjfgh");
console.log(myBank);

class HousingSociety{
    constructor(hoseName,hosePresident){
        this.hoseName=hoseName;
        this.hosePresident=hosePresident;
    }
    disp(){
        console.log(this.hoseName);
    }
}
module.exports= HousingSociety;