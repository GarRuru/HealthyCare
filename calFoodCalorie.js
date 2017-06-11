//計算食物熱量
var calorieFoodSum = 0;
var foodType = 0;;

//計算總熱量
function calcFoodCalories(){
    //西式速食
    if(foodType == 101)
        calorieFoodSum += 322;
    else if(foodType == 102)
        calorieFoodSum += 665;
    else if(foodType == 103)
        calorieFoodSum += 800;
    else if(foodType == 104)
        calorieFoodSum += 488;
    else if(foodType == 105)
        calorieFoodSum += 400;
    else if(foodType == 106)
        calorieFoodSum += 560;
    else if(foodType == 107)
        calorieFoodSum += 411;
    else if(foodType == 108)
        calorieFoodSum += 533;
    else if(foodType == 109)
        calorieFoodSum += 390;
    else if(foodType == 110)
        calorieFoodSum += 236;
    else if(foodType == 111)
        calorieFoodSum += 431;
    else if(foodType == 112)
        calorieFoodSum += 470;
    else if(foodType == 113)
        calorieFoodSum += 768;
    else if(foodType == 114)
        calorieFoodSum += 798;
    else if(foodType == 115)
        calorieFoodSum += 702;
    //中式食物
    else if(foodType == 201)
        calorieFoodSum += 263;
    else if(foodType == 202)
        calorieFoodSum += 345;
    else if(foodType == 203)
        calorieFoodSum += 344;
    else if(foodType == 204)
        calorieFoodSum += 292;
    else if(foodType == 205)
        calorieFoodSum += 297;
    else if(foodType == 206)
        calorieFoodSum += 226;
    else if(foodType == 207)
        calorieFoodSum += 418;
    else if(foodType == 208)
        calorieFoodSum += 753;
    else if(foodType == 209)
        calorieFoodSum += 252;
    else if(foodType == 210)
        calorieFoodSum += 256;
    else if(foodType == 211)
        calorieFoodSum += 357;
    else if(foodType == 212)
        calorieFoodSum += 444;
    else if(foodType == 213)
        calorieFoodSum += 378;
    else if(foodType == 214)
        calorieFoodSum += 259;
    else if(foodType == 215)
        calorieFoodSum += 484;
    else if(foodType == 216)
        calorieFoodSum += 363;
    else if(foodType == 217)
        calorieFoodSum += 324;
    else if(foodType == 218)
        calorieFoodSum += 488;
    else if(foodType == 219)
        calorieFoodSum += 362;
    else if(foodType == 220)
        calorieFoodSum += 397;
    else if(foodType == 221)
        calorieFoodSum += 541;
    else if(foodType == 222)
        calorieFoodSum += 455;
    else if(foodType == 223)
        calorieFoodSum += 468;
    else if(foodType == 224)
        calorieFoodSum += 165;
    //市售飲料
    else if(foodType == 301)
        calorieFoodSum += 84;
    else if(foodType == 302)
        calorieFoodSum += 180;
    else if(foodType == 303)
        calorieFoodSum += 282;
    else if(foodType == 304)
        calorieFoodSum += 240;
    else if(foodType == 305)
        calorieFoodSum += 252;
    else if(foodType == 306)
        calorieFoodSum += 216;
    else if(foodType == 307)
        calorieFoodSum += 252;
    else if(foodType == 308)
        calorieFoodSum += 151;
    else if(foodType == 309)
        calorieFoodSum += 103;
    else if(foodType == 310)
        calorieFoodSum += 120;
    else if(foodType == 311)
        calorieFoodSum += 180;
    else if(foodType == 312)
        calorieFoodSum += 216;
    else if(foodType == 313)
        calorieFoodSum += 204;
    else if(foodType == 314)
        calorieFoodSum += 240;
    else if(foodType == 315)
        calorieFoodSum += 183;
    else if(foodType == 316)
        calorieFoodSum += 168;
    else if(foodType == 317)
        calorieFoodSum += 0;
    else if(foodType == 318)
        calorieFoodSum += 550;
    else if(foodType == 319)
        calorieFoodSum += 256;
    else if(foodType == 320)
        calorieFoodSum += 221;
    else if(foodType == 321)
        calorieFoodSum += 512;
    else if(foodType == 322)
        calorieFoodSum += 217;
    else if(foodType == 323)
        calorieFoodSum += 45;
    else if(foodType == 324)
        calorieFoodSum += 90;
    else if(foodType == 325)
        calorieFoodSum += 138;
    else if(foodType == 326)
        calorieFoodSum += 138;
    //零食點心
    else if(foodType == 401)
        calorieFoodSum += 70;
    else if(foodType == 402)
        calorieFoodSum += 158;
    else if(foodType == 403)
        calorieFoodSum += 200;
    else if(foodType == 404)
        calorieFoodSum += 215;
    else if(foodType == 405)
        calorieFoodSum += 220;
    else if(foodType == 406)
        calorieFoodSum += 230;
    else if(foodType == 407)
        calorieFoodSum += 230;
    else if(foodType == 408)
        calorieFoodSum += 240;
    else if(foodType == 409)
        calorieFoodSum += 250;
    else if(foodType == 410)
        calorieFoodSum += 285;
    else if(foodType == 411)
        calorieFoodSum += 420;
    else if(foodType == 412)
        calorieFoodSum += 440;
    else if(foodType == 413)
        calorieFoodSum += 460;
    else if(foodType == 414)
        calorieFoodSum += 730;
    
    calorieFoodSum = parseInt(calorieFoodSum);
}

function clearVariable()
{
    calorieFoodSum = 0;
    foodType = 0;
}