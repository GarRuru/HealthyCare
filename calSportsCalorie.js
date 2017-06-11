//計算運動熱量 存的方法 101 第一大項的第一格

var calorieSportsSum = 0.0;
var sportType = 0;

function calcSportsCalories( kg ) //每小時消耗的卡路里 * 體重
{
    //走路
    if(sportType == 101)
        calorieSportsSum += 3.5 * kg;
    else if(sportType == 102)
        calorieSportsSum += 5.5 * kg;
    //爬樓梯
    else if(sportType == 201)
        calorieSportsSum += 3.2 * kg;
    else if(sportType == 202)
        calorieSportsSum += 8.4 * kg;
    //跑步
    else if(sportType == 301)
        calorieSportsSum += 8.2 * kg;
    else if(sportType == 302)
        calorieSportsSum += 12.7 * kg;
    else if(sportType == 303)
        calorieSportsSum += 16.8 * kg;
    //騎腳踏車
    else if(sportType == 401)
        calorieSportsSum += 4.0 * kg;
    else if(sportType == 402)
        calorieSportsSum += 8.4 * kg;    
    else if(sportType == 403)
        calorieSportsSum += 12.6 * kg;
    //家事
    else if(sportType == 501)
        calorieSportsSum += 3.7 * kg;    
    else if(sportType == 502)
        calorieSportsSum += 4.2 * kg;
    //工作
    else if(sportType == 601)
        calorieSportsSum += 5.3 * kg;
    else if(sportType == 602)
        calorieSportsSum += 7.4 * kg;
    else if(sportType == 603)
        calorieSportsSum += 8.4 * kg;
    //運動
    else if(sportType == 701)
        calorieSportsSum += 3.0 * kg;
    else if(sportType == 702)
        calorieSportsSum += 3.1 * kg;
    else if(sportType == 703)
        calorieSportsSum += 5.3 * kg;
    else if(sportType == 704)
        calorieSportsSum += 3.2 * kg;
    else if(sportType == 705)
        calorieSportsSum += 3.6 * kg;
    else if(sportType == 706)
        calorieSportsSum += 3.6 * kg;
    else if(sportType == 707)
        calorieSportsSum += 4.2 * kg;
    else if(sportType == 708)
        calorieSportsSum += 4.2 * kg;
    else if(sportType == 709)
        calorieSportsSum += 4.7 * kg;
    else if(sportType == 710)
        calorieSportsSum += 5.0 * kg;
    else if(sportType == 711)
        calorieSportsSum += 5.1 * kg;
    else if(sportType == 712)
        calorieSportsSum += 5.1 * kg;
    else if(sportType == 713)
        calorieSportsSum += 6.3 * kg;
    else if(sportType == 714)
        calorieSportsSum += 10.0 * kg;
    else if(sportType == 715)
        calorieSportsSum += 6.3 * kg;
    else if(sportType == 716)
        calorieSportsSum += 8.3 * kg;
    else if(sportType == 717)
        calorieSportsSum += 6.8 * kg;
    else if(sportType == 718)
        calorieSportsSum += 6.6 * kg;
    else if(sportType == 719)
        calorieSportsSum += 7.7 * kg;
    else if(sportType == 720)
        calorieSportsSum += 8.4 * kg;
    else if(sportType == 721)
        calorieSportsSum += 12.6 * kg;
    else if(sportType == 722)
        calorieSportsSum += 4.0 * kg;
    else if(sportType == 723)
        calorieSportsSum += 3.4 * kg;
    else if(sportType == 724)
        calorieSportsSum += 3.7 * kg;
    else if(sportType == 725)
        calorieSportsSum += 3.7 * kg;
    else if(sportType == 726)
        calorieSportsSum += 5.1 * kg;
    else if(sportType == 727)
        calorieSportsSum += 5.1 * kg;
    else if(sportType == 728)
        calorieSportsSum += 5.9 * kg;
    else if(sportType == 729)
        calorieSportsSum += 7.0 * kg;
    else if(sportType == 730)
        calorieSportsSum += 7.2 * kg;
    else if(sportType == 731)
        calorieSportsSum += 11.4 * kg;
    else if(sportType == 732)
        calorieSportsSum += 12.4 * kg;

    calorieSportsSum = parseFloat(calorieSportsSum);
}

function clearVariable()
{
    calorieSportsSum = 0.0;
    sportType = 0;
}