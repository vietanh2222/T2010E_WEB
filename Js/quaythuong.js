var ln = parseInt(Math.random()*12);
console.log(ln);
var t = 0;
function Img() {
    var x = document.getElementById("quay");
    t+=30;
    x.style.transform = "rotate("+t+"deg)";
    if(t>=(360*5+ln*30)){
        clearInterval(ss);
        if(ln==0){
            alert("Chuc mung ban da trung IPAD PRO");
        }
        if(ln==1){
            alert("Chuc mung ban da trung 5Vcoin");
        }else{
            if(ln==3){
                alert("Chuc mung ban da trung Hoang Kim canh");
            }else{

                if(ln==4){
                    alert("Chuc mung ban da trung Sieu thu cuoi ho ly");
                }else{
                    if(ln==5){
                        alert("Chuc mung ban da trung Sieu thu cuoi Duong Xa");
                    }else{
                        if(ln==6){
                            alert("Chuc mung ban da trung Bach Ho");
                        }else{
                            if(ln==7){
                                alert("Chuc mung ban da trung Chu Tuoc");
                            }else{
                                if(ln==8) {
                                    alert("Chuc mung ban da trung Mec");
                                }else{
                                    if(ln==9){
                                        alert("Chuc mung ban da trung Bo Duong The");
                                    }else{
                                        if(ln==10){
                                            alert("Chuc mung ban da trung Razer black");
                                        }else{
                                            if(ln==11){
                                                alert("Chuc mung ban da trung LaptopAsus");
                                            }else{alert("Chuc ban may man lan sau")}}}}}}}}}}
    }
}
    var ss = setInterval(Img,100);

