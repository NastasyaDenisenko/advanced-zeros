module.exports = function getZerosCount(number, base) {
  let count2 = 0;
  let count3 = 0;
  let count5 = 0;
  let count7 = 0;
  let countBase = 0;
  let countFinish = 0;
  let c_2 = 0;
  let c_3 = 0;
  let c_5 = 0;
  let c_7 = 0;
  let c_base = 0;
  let c_finish = 0;


for (let i = 2; base%i === 0; i = i*2) {
  c_2+= 1;
  }

for (let i = 3; base%i === 0; i = i*3) {
    c_3+= 1;
    }

for (let i = 5; base%i === 0; i = i*5) {
    c_5+= 1;
    }

for (let i = 7; base%i === 0; i = i*7) {
    c_7+= 1;
    }   
base = base/(Math.pow(2,c_2));
base = base/ (Math.pow(3,c_3));
base = base/ (Math.pow(5,c_5));
base = base/ (Math.pow(7,c_7));

if (base !== 1) {
  // var value = base;
  for (let i = 11; base !== 1; i++) {
    if (base%i === 0) {
      var value = i;
      break;
    } 
  }
  for (let i = value; base%i === 0; i = i*value) {
    c_base+= 1;
    } 

    base = base / (Math.pow(value,c_base));
    if (base !== 1) {
      // var value = base;
      for (let i = 11; base !== 1; i++) {
        if (base%i === 0) {
          var finish = i;
          break;
        } 
      }
      for (let i = finish; base%i === 0; i = i*finish) {
        c_finish+= 1;
        } 
    
        base = base / (Math.pow(finish,c_finish));
    }
}

  for (let i = 2; number/i > 0; i = i*2) {
    count2+= Math.floor(number/i);
  }

  for (let i = 3; number/i > 0; i = i*3) {
    count3+= Math.floor(number/i);
  }

  for (let i = 5; number/i > 0; i = i*5) {
    count5+= Math.floor(number/i);
  }

  for (let i = 7; number/i > 0; i = i*7) {
    count7+= Math.floor(number/i);
  }

  for (let i = value; number/i > 0; i = i*value) {
    countBase+= Math.floor(number/i);
  }  

  for (let i = finish; number/i > 0; i = i*finish) {
    countFinish+= Math.floor(number/i);
  } 


  if (countBase === 0 ) {
    return Math.min(Math.floor(count2/c_2),Math.floor(count3/c_3), Math.floor(count5/c_5),Math.floor(count7/c_7));
  }else if(countFinish === 0){
    return Math.min(Math.floor(count2/c_2),Math.floor(count3/c_3), Math.floor(count5/c_5),Math.floor(count7/c_7),Math.floor(countBase/c_base));
  }else{
    return Math.min(Math.floor(count2/c_2),Math.floor(count3/c_3), Math.floor(count5/c_5),Math.floor(count7/c_7),Math.floor(countBase/c_base),Math.floor(countFinish/c_finish) );

  }
  
}
