// this is the simple module package but there are various built in modules are available
// module is just simple file which can be export to anywhere
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
module.exports={
    add,sub
}

// / this is the anonymous functions without name
exports.subtract=(a,b)=>a+b;