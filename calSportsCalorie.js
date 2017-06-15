//計算運動熱量 存的方法 101 第一大項的第一格
window.addEventListener("load",readStat,false);

var calorieSportsSum = 0.0;
var weight;

function readStat()
{
    var personal_data=localStorage.Person;
    console.log(personal_data);
    var WEIG_DAYCAL=personal_data.split(" ");
    WEIG_DAYCAL[2]=parseFloat(WEIG_DAYCAL[2]);
    WEIG_DAYCAL[3]=parseFloat(WEIG_DAYCAL[3]);
    WEIG_DAYCAL[4]=parseFloat(WEIG_DAYCAL[4]);
    console.log(WEIG_DAYCAL);
    document.getElementById("side_title").innerHTML="你的體重:" + WEIG_DAYCAL[2] +"kg<br>你的每日所需熱量:" + WEIG_DAYCAL[3] + "kcal<br>你的基礎代謝率:" + WEIG_DAYCAL[4] + "kcal";
    clearVariable();
    weight=WEIG_DAYCAL[2];
    //calcSportsCalories();
}
function calcSportsCalories() //每小時消耗的卡路里 * 體重
{
    //前面的getbyid就是原先的小時，WEIG_DAYCAL[2]是已經抓到的體重
    calorieSportsSum = 0;
    //走路
    calorieSportsSum += (document.getElementById("slowWalk").value) * 3.5 * weight;
    calorieSportsSum += (document.getElementById("fastWalk").value) * 5.5 * weight;
    //爬樓梯
    calorieSportsSum += (document.getElementById("downStair").value) * 3.2 * weight;
    calorieSportsSum += (document.getElementById("upStair").value) * 8.4 * weight;
    //跑步
    calorieSportsSum += (document.getElementById("slowRun").value) * 8.2 * weight;
    calorieSportsSum += (document.getElementById("fastRun12").value) * 12.7 * weight;
    calorieSportsSum += (document.getElementById("fastRun16").value) * 16.8 * weight;
    //騎腳踏車
    calorieSportsSum += (document.getElementById("bike10").value) * 4.0 * weight;
    calorieSportsSum += (document.getElementById("bike20").value) * 8.4 * weight;
    calorieSportsSum += (document.getElementById("bike30").value) * 12.6 * weight;
    //家事
    calorieSportsSum += (document.getElementById("mop").value) * 3.7 * weight;
    calorieSportsSum += (document.getElementById("gardening").value) * 4.2 * weight;
    //工作
    calorieSportsSum += (document.getElementById("toolMake").value) * 5.3 * weight;
    calorieSportsSum += (document.getElementById("farm").value) * 7.4 * weight;
    calorieSportsSum += (document.getElementById("carryHeavyObject").value) * 8.4 * weight;
    //球類運動
    calorieSportsSum += (document.getElementById("volleyball").value) * 3.6 * weight;
    calorieSportsSum += (document.getElementById("bowling").value) * 3.65 * weight;
    calorieSportsSum += (document.getElementById("tabletennis").value) * 4.2 * weight;
    calorieSportsSum += (document.getElementById("baseball").value) * 4.7 * weight;
    calorieSportsSum += (document.getElementById("golf").value) * 4.35 * weight;
    calorieSportsSum += (document.getElementById("badminton").value) * 5.1 * weight;
    calorieSportsSum += (document.getElementById("basketballHalf").value) * 6.3 * weight;
    calorieSportsSum += (document.getElementById("basketballFull").value) * 8.3 * weight;
    calorieSportsSum += (document.getElementById("tennis").value) * 6.6 * weight;
    calorieSportsSum += (document.getElementById("soccer").value) * 7.7 * weight;
    //其他運動
    calorieSportsSum += (document.getElementById("yoga").value) * 3.0 * weight;
    calorieSportsSum += (document.getElementById("danceSlow").value) * 3.1 * weight;
    calorieSportsSum += (document.getElementById("danceFast").value) * 5.3 * weight;
    calorieSportsSum += (document.getElementById("frisbee").value) * 3.2 * weight;
    calorieSportsSum += (document.getElementById("taichi").value) * 4.2 * weight;
    calorieSportsSum += (document.getElementById("rollerskate").value) * 5.1 * weight;
    calorieSportsSum += (document.getElementById("swimSlow").value) * 6.3 * weight;
    calorieSportsSum += (document.getElementById("swimFast").value) * 10.0 * weight;
    calorieSportsSum += (document.getElementById("aerobicdance").value) * 6.8 * weight;
    calorieSportsSum += (document.getElementById("jumpropeSlow").value) * 8.4 * weight;
    calorieSportsSum += (document.getElementById("jumpropeFast").value) * 12.6 * weight;
    calorieSportsSum += (document.getElementById("healthydance").value) * 4.0 * weight;
    calorieSportsSum += (document.getElementById("canoeing").value) * 3.4 * weight;
    calorieSportsSum += (document.getElementById("silvershoes").value) * 5.1 * weight;
    calorieSportsSum += (document.getElementById("horseriding").value) * 5.1 * weight;
    calorieSportsSum += (document.getElementById("iceskate").value) * 5.9 * weight;
    calorieSportsSum += (document.getElementById("climbrock").value) * 7.0 * weight;
    calorieSportsSum += (document.getElementById("ski").value) * 7.2 * weight;
    calorieSportsSum += (document.getElementById("boxing").value) * 11.4 * weight;
    calorieSportsSum += (document.getElementById("rowing").value) * 12.4 * weight;
    
    console.log(calorieSportsSum);
    calorieSportsSum = parseFloat(calorieSportsSum);
    var result= calorieSportsSum.toFixed(2);
    printSport(result);

}


function printSport(result)
{
        document.getElementById("sportlist").innerHTML="<p>消耗的熱量: <span style='font-size:26px;color:white'>" + result + "</span>  kcal</p>";
        var chickenCAL=result/673;
        chickenCAL=parseInt(chickenCAL);

        var printAREA=document.getElementById("sportlist");
        printAREA.innerHTML += "<p>相當於 <span style='color:white;font-size:26px'>" + chickenCAL + "</span> 片雞排的熱量！</p><p>你做的運動:</p>";
        if(document.getElementById("slowWalk").value!=0)       printAREA.innerHTML+="<p>慢走: " +document.getElementById("slowWalk").value  +" 小時</p>";    
        if(document.getElementById("fastWalk").value!=0)       printAREA.innerHTML+="<p>快走: " +document.getElementById("fastWalk").value  +" 小時</p>";
            //爬樓梯
        if(document.getElementById("downStair").value!=0)     printAREA.innerHTML+="<p>下樓梯: " +document.getElementById("downStair").value  +" 小時</p>";
        if(document.getElementById("upStair").value!=0)       printAREA.innerHTML+="<p>上樓梯: " +document.getElementById("upStair").value  +" 小時</p>";
            //跑步
        if(document.getElementById("slowRun").value!=0)       printAREA.innerHTML+="<p>慢跑: " +document.getElementById("slowRun").value  +" 小時</p>";
        if(document.getElementById("fastRun12").value!=0)     printAREA.innerHTML+="<p>快跑(12km/h): " +document.getElementById("fastRun12").value  +" 小時</p>";
        if(document.getElementById("fastRun16").value!=0)     printAREA.innerHTML+="<p>快跑(16km/h): " +document.getElementById("fastRun16").value  +" 小時</p>";
            //騎腳踏車
        if(document.getElementById("bike10").value!=0)       printAREA.innerHTML+="<p>騎腳踏車(10km/h): " +document.getElementById("bike10").value  +" 小時</p>";
        if(document.getElementById("bike20").value!=0)        printAREA.innerHTML+="<p>騎腳踏車(20km/h): " +document.getElementById("bike20").value  +" 小時</p>";
        if(document.getElementById("bike30").value!=0)       printAREA.innerHTML+="<p>騎腳踏車(30km/h): " +document.getElementById("bike30").value  +" 小時</p>";
            //家事
        if(document.getElementById("mop").value!=0)           printAREA.innerHTML+="<p>拖地: " +document.getElementById("mop").value  +" 小時</p>";
        if(document.getElementById("gardening").value!=0)    printAREA.innerHTML+="<p>園藝: " +document.getElementById("gardening").value  +" 小時</p>";
            //工作
        if(document.getElementById("toolMake").value!=0)      printAREA.innerHTML+="<p>使用工具: " +document.getElementById("toolMake").value  +" 小時</p>";
        if(document.getElementById("farm").value!=0)          printAREA.innerHTML+="<p>農事: " +document.getElementById("farm").value  +" 小時</p>";
        if(document.getElementById("carryHeavyObject").value!=0)printAREA.innerHTML+="<p>搬運重物: " +document.getElementById("carryHeavyObject").value  +" 小時</p>";
            //球類運動
        if(document.getElementById("volleyball").value!=0)   printAREA.innerHTML+="<p>排球: " +document.getElementById("volleyball").value  +" 小時</p>";
        if(document.getElementById("bowling").value!=0)        printAREA.innerHTML+="<p>保齡球: " +document.getElementById("bowling").value  +" 小時</p>";
        if(document.getElementById("tabletennis").value!=0)  printAREA.innerHTML+="<p>乒乓球: " +document.getElementById("tabletennis").value  +" 小時</p>";
        if(document.getElementById("baseball").value!=0)     printAREA.innerHTML+="<p>棒壘球: " +document.getElementById("baseball").value  +" 小時</p>";
        if(document.getElementById("golf").value!=0)          printAREA.innerHTML+="<p>高爾夫球: " +document.getElementById("golf").value  +" 小時</p>";
        if(document.getElementById("badminton").value!=0)     printAREA.innerHTML+="<p>羽毛球: " +document.getElementById("badminton").value  +" 小時</p>";
        if(document.getElementById("basketballHalf").value!=0)printAREA.innerHTML+="<p>籃球（半場）: " +document.getElementById("basketballHalf").value  +" 小時</p>";
        if(document.getElementById("basketballFull").value!=0)printAREA.innerHTML+="<p>籃球（全場）: " +document.getElementById("basketballFull").value  +" 小時</p>";
        if(document.getElementById("tennis").value!=0)        printAREA.innerHTML+="<p>網球: " +document.getElementById("tennis").value  +" 小時</p>";
        if(document.getElementById("soccer").value!=0)       printAREA.innerHTML+="<p>足球: " +document.getElementById("soccer").value  +" 小時</p>";
            //其他運動
        if(document.getElementById("yoga").value!=0)         printAREA.innerHTML+="<p>瑜珈: " +document.getElementById("yoga").value  +" 小時</p>";
        if(document.getElementById("danceSlow").value!=0)     printAREA.innerHTML+="<p>跳舞（慢）: " +document.getElementById("danceSlow").value  +" 小時</p>";
        if(document.getElementById("danceFast").value!=0)    printAREA.innerHTML+="<p>跳舞（快）: " +document.getElementById("danceFast").value  +" 小時</p>";
        if(document.getElementById("frisbee").value!=0)       printAREA.innerHTML+="<p>飛盤: " +document.getElementById("frisbee").value  +" 小時</p>";
        if(document.getElementById("taichi").value!=0)        printAREA.innerHTML+="<p>太極拳: " +document.getElementById("taichi").value  +" 小時</p>";
        if(document.getElementById("rollerskate").value!=0)  printAREA.innerHTML+="<p>溜直排輪: " +document.getElementById("rollerskate").value  +" 小時</p>";
        if(document.getElementById("swimSlow").value!=0)      printAREA.innerHTML+="<p>游泳（慢）: " +document.getElementById("swimSlow").value  +" 小時</p>";
        if(document.getElementById("swimFast").value!=0)       printAREA.innerHTML+="<p>游泳（快）: " +document.getElementById("swimFast").value  +" 小時</p>";
        if(document.getElementById("aerobicdance").value!=0) printAREA.innerHTML+="<p>有氧舞蹈: " +document.getElementById("aerobicdance").value  +" 小時</p>";
        if(document.getElementById("jumpropeSlow").value!=0) printAREA.innerHTML+="<p>跳繩（慢）: " +document.getElementById("jumpropeSlow").value  +" 小時</p>";
        if(document.getElementById("jumpropeFast").value!=0) printAREA.innerHTML+="<p>跳繩（快）: " +document.getElementById("jumpropeFast").value  +" 小時</p>";
        if(document.getElementById("healthydance").value!=0)  printAREA.innerHTML+="<p>健康操: " +document.getElementById("healthydance").value  +" 小時</p>";
        if(document.getElementById("canoeing").value!=0)      printAREA.innerHTML+="<p>滑獨木舟: " +document.getElementById("canoeing").value  +" 小時</p>";
        if(document.getElementById("silvershoes").value!=0)    printAREA.innerHTML+="<p>溜輪鞋: " +document.getElementById("silvershoes").value  +" 小時</p>";
        if(document.getElementById("horseriding").value!=0)  printAREA.innerHTML+="<p>騎馬（小跑）: " +document.getElementById("horseriding").value  +" 小時</p>";
        if(document.getElementById("iceskate").value!=0)     printAREA.innerHTML+="<p>溜冰刀(16km/h): " +document.getElementById("iceskate").value  +" 小時</p>";
        if(document.getElementById("climbrock").value!=0)     printAREA.innerHTML+="<p>爬岩(35km/h): " +document.getElementById("climbrock").value  +" 小時</p>";
        if(document.getElementById("ski").value!=0)           printAREA.innerHTML+="<p>滑雪(16km/h): " +document.getElementById("ski").value  +" 小時</p>";
        if(document.getElementById("boxing").value!=0)       printAREA.innerHTML+="<p>拳擊: " +document.getElementById("boxing").value  +" 小時</p>";
        if(document.getElementById("rowing").value!=0)        printAREA.innerHTML+="<p>划船比賽: " +document.getElementById("rowing").value  +" 小時</p>";


}

function clearVariable()
{
    calorieSportsSum = 0.0;
    document.getElementById("sportlist").innerHTML="<p>消耗的熱量:" + calorieSportsSum + "kcal</p><p>你做的運動:</p>";
        document.getElementById("slowWalk").value=0;
        document.getElementById("fastWalk").value=0;
        //爬樓梯
        document.getElementById("downStair").value=0;
        document.getElementById("upStair").value=0;
        //跑步
        document.getElementById("slowRun").value=0;
        document.getElementById("fastRun12").value=0;
        document.getElementById("fastRun16").value=0;
        //騎腳踏車
        document.getElementById("bike10").value=0; 
        document.getElementById("bike20").value=0; 
        document.getElementById("bike30").value=0; 
        //家事
        document.getElementById("mop").value=0;  
        document.getElementById("gardening").value=0; 
        //工作
        document.getElementById("toolMake").value=0; 
        document.getElementById("farm").value=0;    
        document.getElementById("carryHeavyObject").value=0;
        //球類運動
        document.getElementById("volleyball").value=0; 
        document.getElementById("bowling").value=0;   
        document.getElementById("tabletennis").value=0;
        document.getElementById("baseball").value=0;  
        document.getElementById("golf").value=0;       
        document.getElementById("badminton").value=0;   
        document.getElementById("basketballHalf").value=0;
        document.getElementById("basketballFull").value=0;
        document.getElementById("tennis").value=0;      
        document.getElementById("soccer").value=0;       
        //其他運動
        document.getElementById("yoga").value=0;        
        document.getElementById("danceSlow").value=0;  
        document.getElementById("danceFast").value=0;  
        document.getElementById("frisbee").value=0;    
        document.getElementById("taichi").value=0;     
        document.getElementById("rollerskate").value=0; 
        document.getElementById("swimSlow").value=0;    
        document.getElementById("swimFast").value=0;    
        document.getElementById("aerobicdance").value=0; 
        document.getElementById("jumpropeSlow").value=0; 
        document.getElementById("jumpropeFast").value=0; 
        document.getElementById("healthydance").value=0;  
        document.getElementById("canoeing").value=0;      
        document.getElementById("silvershoes").value=0; 
        document.getElementById("horseriding").value=0; 
        document.getElementById("iceskate").value=0;   
        document.getElementById("climbrock").value=0;   
        document.getElementById("ski").value=0;        
        document.getElementById("boxing").value=0;      
        document.getElementById("rowing").value=0;       

}