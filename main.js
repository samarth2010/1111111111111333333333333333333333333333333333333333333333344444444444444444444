img="";
status="";
object=[];
function setup()
{
  canvas = createCanvas(500,400);
  canvas.center();
  vdo=createCapture(VIDEO);
  vdo.hide();
  vdo.size(500,400);
  obdec=ml5.objectDetector("cocossd",ml);
  document.getElementById("status").innerHTML="status: Detecting Objects";
}
function draw(){
    image(vdo,0,0,500,400);
    if(status!=""){
      obdec.detect(vdo,gotResult);
      for ( i = 0; i < object.length; i++) {
        document.getElementById("status").innerHTML="status: Detected Objects";  
        document.getElementById("noo").innerHTML="Number of Detected  Object"+object.length;
        pst=floor(object[i].confidence*100);
        text(object[i].label+pst+"%",object[i].x,object[i].y);
    
        r = random(255);
        g = random(225);
        b = random(225); 
        fill(r, g, b );
        pst=floor(object[i].confidence*100);
        text(object[i].label+pst+"%",object[i].x,object[i].y);
        noFill();
        stroke();


    rect(object[i].x,object[i].y,object[i].width,object[i].height);

      }
    }
}

function ml()
{
console.log("moadelloaded");
status=true;

}
function gotResult(error,results)
{
if(error){
  console.error(error);
}
else{console.log(results);
  object=results;
}
}