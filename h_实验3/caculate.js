
  var array=["非常不满意","不满意","一般","满意","非常满意"];
  var star=document.getElementsByTagName("img");
  var con=false;
  function starPic(id){
    if(con==true){
      return 0;
    }
    else{
    if(id<=2)
    {
            for(var i=0;i<id;i++)
            {
              star[i].src="images/star1.png";
            }
    }
    else if (2<id) 
    {
             for (var j = 0; j < id; j++) 
             {
               star[j].src="images/star2.png";
            }
    }
    }
    document.getElementById('text').value=array[id-1];
  }

  function hid(id){
      if(con==true){
        return;
      }
      else if (con==false) {
        for (var i = 0; i<id; i++) {
          star[i].src="images/star0.png";
        }
      }
      document.getElementById('text').value="";
  }
  function qd(id){
    if(id<=2)
    {
            for(var i=0;i<id;i++)
            {
              star[i].src="images/star1.png";
            }
    }
    else if (2<id) 
    {
             for (var j = 0; j < id; j++) 
             {
               star[j].src="images/star2.png";
             }
    }
    document.getElementById('text').value=array[id-1];
    con=true;
  }
  
 