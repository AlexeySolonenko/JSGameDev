define(function bounce(v, dv, r, limit, Y, ballOver){
    
  return function (v, dv, r, limit, Y, ballOver) {
    let newDv = dv;
    let newV = v;
    if(v + dv > limit-r || v+dv < r) { newDv = - dv };
    
    //console.log(v+','+newDv);
    if (Y == "Y") {
      if(ballOver && dv > 0) {
        newDv = - dv;
      };
    };
    newV = v + newDv;
    
    return [newV, newDv];
  };
});