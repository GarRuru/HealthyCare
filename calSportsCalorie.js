//計算運動熱量 存的方法 101 第一大項的第一格

var calorieSportsSum = 0.0;
var sportType = "";

window.addEventListener("load",readStat,false);

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
}
document.getElementById("slowWalk").addEventListener("focus",calcSportsCalories(),false);
function calcSportsCalories( kg , hr ) //每小時消耗的卡路里 * 體重
{
    calorieSportsSum=0;
    calcFoodCalories+=(document.getElementById("slowWalk").value)*3.5*WEIG_DAYCAL[2];
    //...

    //前面的getbyid就是原先的小時，WEIG_DAYCAL[2]是已經抓到的體重

    //走路
    if(sportType == "slowWalk")
        calorieSportsSum += 3.5 * kg * hr;
    else if(sportType == "fastWalk")
        calorieSportsSum += 5.5 * kg * hr;
    //爬樓梯
    else if(sportType == "downStair")
        calorieSportsSum += 3.2 * kg * hr;
    else if(sportType == "upStair")
        calorieSportsSum += 8.4 * kg * hr;
    //跑步
    else if(sportType == "slowRun")
        calorieSportsSum += 8.2 * kg * hr;
    else if(sportType == "fastRun12")
        calorieSportsSum += 12.7 * kg * hr;
    else if(sportType == "fastRun16")
        calorieSportsSum += 16.8 * kg * hr;
    //騎腳踏車
    else if(sportType == "bike10")
        calorieSportsSum += 4.0 * kg * hr;
    else if(sportType == "bike20")
        calorieSportsSum += 8.4 * kg * hr;    
    else if(sportType == "bike30")
        calorieSportsSum += 12.6 * kg * hr;
    //家事
    else if(sportType == "mop")
        calorieSportsSum += 3.7 * kg * hr;    
    else if(sportType == "gardening")
        calorieSportsSum += 4.2 * kg * hr;
    //工作
    else if(sportType == "toolMake")
        calorieSportsSum += 5.3 * kg * hr;
    else if(sportType == "farm")
        calorieSportsSum += 7.4 * kg * hr;
    else if(sportType == "carryHeavyObject")
        calorieSportsSum += 8.4 * kg * hr;
    //球類運動
    else if(sportType == "volleyball")
        calorieSportsSum += 3.6 * kg * hr;
    else if(sportType == "bowling")
        calorieSportsSum += 3.65 * kg * hr;
    else if(sportType == "tabletennis")
        calorieSportsSum += 4.2 * kg * hr;
    else if(sportType == "baseball")
        calorieSportsSum += 4.7 * kg * hr;
    else if(sportType == "golf")
        calorieSportsSum += 4.35 * kg * hr;
    else if(sportType == "badmiton")
        calorieSportsSum += 5.1 * kg * hr;
    else if(sportType == "basketballHalf")
        calorieSportsSum += 6.3 * kg * hr;
    else if(sportType == "basketballFull")
        calorieSportsSum += 8.3 * kg * hr;
    else if(sportType == "tennis")
        calorieSportsSum += 6.6 * kg * hr;
    else if(sportType == "soccer")
        calorieSportsSum += 7.7 * kg * hr;
    //其他運動
    else if(sportType == "yoga")
        calorieSportsSum += 3.0 * kg * hr;
    else if(sportType == "danceSlow")
        calorieSportsSum += 3.1 * kg * hr;
    else if(sportType == "danceFast")
        calorieSportsSum += 5.3 * kg * hr;
    else if(sportType == "frisbee")
        calorieSportsSum += 3.2 * kg * hr;
    else if(sportType == "taichi")
        calorieSportsSum += 4.2 * kg * hr;
    else if(sportType == "rollerskate")
        calorieSportsSum += 5.1 * kg * hr;
    else if(sportType == "swimSlow")
        calorieSportsSum += 6.3 * kg * hr;
    else if(sportType == "swimFast")
        calorieSportsSum += 10.0 * kg * hr;
    else if(sportType == "aerobicdance")
        calorieSportsSum += 6.8 * kg * hr;
    else if(sportType == "jumpropeSlow")
        calorieSportsSum += 8.4 * kg * hr;
    else if(sportType == "jumpropeFast")
        calorieSportsSum += 12.6 * kg * hr;
    else if(sportType == "healthydance")
        calorieSportsSum += 4.0 * kg * hr;
    else if(sportType == "canoeing")
        calorieSportsSum += 3.4 * kg * hr;
    else if(sportType == "silvershoes")
        calorieSportsSum += 5.1 * kg * hr;
    else if(sportType == "horseriding")
        calorieSportsSum += 5.1 * kg * hr;
    else if(sportType == "iceskate")
        calorieSportsSum += 5.9 * kg * hr;
    else if(sportType == "climbrock")
        calorieSportsSum += 7.0 * kg * hr;
    else if(sportType == "ski")
        calorieSportsSum += 7.2 * kg * hr;
    else if(sportType == "boxing")
        calorieSportsSum += 11.4 * kg * hr;
    else if(sportType == "rowing")
        calorieSportsSum += 12.4 * kg * hr;
    console.log(calorieSportsSum);
    calorieSportsSum = parseFloat(calorieSportsSum);
    document.getElementById("sportlist").innerHTML=calorieSportsSum;
}

function clearVariable()
{
    calorieSportsSum = 0.0;
    sportType = 0;
}