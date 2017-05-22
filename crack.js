var stafrof = ["a","á","b","c","d","ð","e","é","f","g","h","i","í",
               "j","k","l","m","n","o","ó","p","r","s","t","u",
               "ú","v","x","y","ý","þ","æ","ö"];

function decrypt(str){
  str = str.toLowerCase();
  lausn = "";
  i = 0;
  for(var i = 0; i<str.length; i++){
    var stafur = str[i];
    var nr = stafrof.indexOf(stafur);
    if(nr === -1){
      lausn += stafur;
      continue;
    }
    if(nr === 0){
      lausn += stafrof[stafrof.length-1];
      continue;
    }
    lausn += stafrof[nr-1];
  }
  return lausn;
}

function encrypt(str){
  str = str.toLowerCase();
  lausn = "";
  i = 0;
  for(var i = 0; i<str.length; i++){
    var stafur = str[i];
    var nr = stafrof.indexOf(stafur);
    if(nr === -1){
      lausn += stafur;
      continue;
    }
    if(nr === stafrof.length-1){
      lausn += stafrof[0];
      continue;
    }
    lausn += stafrof[nr+1];
  }
  return lausn;
}
