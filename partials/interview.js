var obj = {2: 7, 3: 9, name: "Foo", blah: []};

function getAdd(obj){
return Object.keys(obj).reduce(function(a, b){
  if (Number(b)){
    return a+=Number(b);
  }
  return a;
},0);
}

getAdd(obj);