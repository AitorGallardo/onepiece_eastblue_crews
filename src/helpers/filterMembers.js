
String.prototype.sanitaize = function(){
    if(!this || this.trim().length===0) return '';
    return this.toLowerCase();
}
//Sanitaize and remove spaces
String.prototype.srs = function(){
    return this.sanitaize().replace(/\s/g, "");
}
//Sanitaize and remove spaces and underscores
String.prototype.srsu = function(){
    return this.sanitaize().replace(/[\s_]/g, "");
}

export const filterMembersByWord = (value, members)=>{
    const sanitaizedValue = value.srs();
    return members.filter((member)=>(member.name.srs().includes(sanitaizedValue) || member.crew.srsu().includes(sanitaizedValue)));
}   

export const filterMembersByRange = (value,members)=>{
    console.log(value)
    return members.filter((member)=>member.avg_power === value);
}