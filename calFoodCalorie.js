//計算食物熱量


window.addEventListener("load",readStat,false);
var calorieFoodSum = 0;
function readStat()
{
    var personal_data=localStorage.Person;
    console.log(personal_data);
    var WEIG_DAYCAL=personal_data.split(" ");
    WEIG_DAYCAL[2]=parseFloat(WEIG_DAYCAL[2]);
    WEIG_DAYCAL[3]=parseFloat(WEIG_DAYCAL[3]);
    console.log(WEIG_DAYCAL);
    document.getElementById("side_title").innerHTML="你的體重: " + WEIG_DAYCAL[2] +"kg<br>你的每日所需熱量: " + WEIG_DAYCAL[3] + "kcal";
    clearVariable();
}


//計算總熱量
function calcFoodCalories(){
    calorieFoodSum=0;
    calorieFoodSum += document.getElementById("bacon_cheese_burg").value * 322;
    calorieFoodSum += document.getElementById("beef_cheese_burg").value  * 665;
    calorieFoodSum += document.getElementById("double_beef_burg").value  * 800;
    calorieFoodSum += document.getElementById("yaki_rice_burg").value    * 488;
    calorieFoodSum += document.getElementById("pork_cheese_burg").value  * 400;
    calorieFoodSum += document.getElementById("chickleg_burg").value     * 560;
    calorieFoodSum += document.getElementById("bake_chick_burg").value   * 411;
    calorieFoodSum += document.getElementById("fried_fish_burg").value   * 533;
    calorieFoodSum += document.getElementById("shrimp_burg").value       * 390;
    calorieFoodSum += document.getElementById("fried_chick").value       * 236;
    calorieFoodSum += document.getElementById("chick_nugget").value      * 431;
    calorieFoodSum += document.getElementById("french_fries").value      * 470;
    calorieFoodSum += document.getElementById("opt_pizza").value         * 768;
    calorieFoodSum += document.getElementById("pork_pizza").value        * 798;
    calorieFoodSum += document.getElementById("seafood_pizza").value     * 702;

    calorieFoodSum += document.getElementById("org_eggcake").value       * 263;
    calorieFoodSum += document.getElementById("tuna_eggcake").value      * 345;
    calorieFoodSum += document.getElementById("cheese_eggcake").value    * 344;
    calorieFoodSum += document.getElementById("corn_eggcake").value      * 292;
    calorieFoodSum += document.getElementById("han_eggcake").value       * 297;
    calorieFoodSum += document.getElementById("tuna_rice").value         * 226;
    calorieFoodSum += document.getElementById("pur_rice").value          * 418;
    calorieFoodSum += document.getElementById("pan_dumpling").value      * 753;
    calorieFoodSum += document.getElementById("fritters").value          * 252;
    calorieFoodSum += document.getElementById("biscuit").value           * 256;
    calorieFoodSum += document.getElementById("radish_cake").value       * 357;
    calorieFoodSum += document.getElementById("stream_bread").value      * 444;
    calorieFoodSum += document.getElementById("little_lonbao").value     * 378;
    calorieFoodSum += document.getElementById("cabbage_bao").value       * 259;
    calorieFoodSum += document.getElementById("meat_bao").value          * 484;
    calorieFoodSum += document.getElementById("vege_bao").value          * 363;
    calorieFoodSum += document.getElementById("porkin_bin").value        * 324;
    calorieFoodSum += document.getElementById("cabbage_dump").value      * 488;
    calorieFoodSum += document.getElementById("meat_yuan").value         * 362;
    calorieFoodSum += document.getElementById("runbing").value           * 397;
    calorieFoodSum += document.getElementById("tsung_yo_bin").value      * 541;
    calorieFoodSum += document.getElementById("oaozin").value            * 455;
    calorieFoodSum += document.getElementById("sandwich").value          * 468;
    calorieFoodSum += document.getElementById("duck_egg_rice").value     * 165;

    calorieFoodSum += document.getElementById("tomato_j").value          *  84;
    calorieFoodSum += document.getElementById("orange_j").value          * 180;
    calorieFoodSum += document.getElementById("sprite").value            * 282;
    calorieFoodSum += document.getElementById("applecider").value        * 240;
    calorieFoodSum += document.getElementById("cola").value              * 252;
    calorieFoodSum += document.getElementById("co2drink").value          * 216;
    calorieFoodSum += document.getElementById("sasi").value              * 252;
    calorieFoodSum += document.getElementById("pocari").value            * 151;
    calorieFoodSum += document.getElementById("woolungtea").value        * 103;
    calorieFoodSum += document.getElementById("mycha").value             * 120;
    calorieFoodSum += document.getElementById("blacktea").value          * 180;
    calorieFoodSum += document.getElementById("lemon_btea").value        * 216;
    calorieFoodSum += document.getElementById("moly_tea").value          * 204;
    calorieFoodSum += document.getElementById("mliktea").value           * 240;
    calorieFoodSum += document.getElementById("woomeazi").value          * 183;
    calorieFoodSum += document.getElementById("grasstea").value          * 168;
    calorieFoodSum += document.getElementById("nosugartea").value        *   0;
    calorieFoodSum += document.getElementById("pmtea").value             * 550;
    calorieFoodSum += document.getElementById("dongguatea").value        * 256;
    calorieFoodSum += document.getElementById("watermelon_j").value      * 221;
    calorieFoodSum += document.getElementById("choco_icesand").value     * 512;
    calorieFoodSum += document.getElementById("coke_icesand").value      * 217;
    calorieFoodSum += document.getElementById("juice_vin").value         *  45;
    calorieFoodSum += document.getElementById("c3in1cfe").value          *  90;
    calorieFoodSum += document.getElementById("cfe_d").value             * 138;
    calorieFoodSum += document.getElementById("cocoa_powd").value        * 138;

    calorieFoodSum += document.getElementById("niogabin").value          *  70;
    calorieFoodSum += document.getElementById("redBM_pop").value         * 158;
    calorieFoodSum += document.getElementById("yutoshu").value           * 200;
    calorieFoodSum += document.getElementById("sunbin").value            * 215;
    calorieFoodSum += document.getElementById("mmicecream").value        * 220;
    calorieFoodSum += document.getElementById("redBWheelB").value        * 230;
    calorieFoodSum += document.getElementById("shachima").value          * 230;
    calorieFoodSum += document.getElementById("donut").value             * 250;
    calorieFoodSum += document.getElementById("meat_shibin").value       * 285;
    calorieFoodSum += document.getElementById("greenbean_p").value       * 420;
    calorieFoodSum += document.getElementById("papple_cake").value       * 440;
    calorieFoodSum += document.getElementById("guiyuancake").value       * 460;
    calorieFoodSum += document.getElementById("potato_chip").value       * 730;


    calorieFoodSum = parseInt(calorieFoodSum);
    printFood();
}

function printFood()
{
    document.getElementById("foodlist").innerHTML="<p>目前總熱量:<span style='font-size:26px; color:white;'>" + calorieFoodSum + "</span> Kcal</p>";
    document.getElementById("foodlist").innerHTML+="<p>你吃的東西:</p>";
    var printAREA=document.getElementById("foodlist");

    if(document.getElementById("bacon_cheese_burg").value!=0) printAREA.innerHTML+="<p>培根起司蛋堡" +document.getElementById("bacon_cheese_burg").value + "份 </p>";
    if(document.getElementById("beef_cheese_burg").value !=0) printAREA.innerHTML+="<p>牛肉起司蛋堡" +document.getElementById("beef_cheese_burg").value + "份 </p>";
    if(document.getElementById("double_beef_burg").value !=0) printAREA.innerHTML+="<p>雙層牛肉堡" +document.getElementById("double_beef_burg").value + "份 </p>";
    if(document.getElementById("yaki_rice_burg").value   !=0) printAREA.innerHTML+="<p>燒肉米漢堡" +document.getElementById("yaki_rice_burg").value + "份 </p>";
    if(document.getElementById("pork_cheese_burg").value !=0) printAREA.innerHTML+="<p>豬肉起司堡" +document.getElementById("pork_cheese_burg").value + "份 </p>";
    if(document.getElementById("chickleg_burg").value    !=0) printAREA.innerHTML+="<p>酥炸雞腿堡" +document.getElementById("chickleg_burg").value + "份 </p>";
    if(document.getElementById("bake_chick_burg").value  !=0) printAREA.innerHTML+="<p>烤雞腿堡" +document.getElementById("bake_chick_burg").value + "份 </p>";
    if(document.getElementById("fried_fish_burg").value  !=0) printAREA.innerHTML+="<p>炸魚排堡" +document.getElementById("fried_fish_burg").value + "份 </p>";
    if(document.getElementById("shrimp_burg").value      !=0) printAREA.innerHTML+="<p>炸蝦排堡" +document.getElementById("shrimp_burg").value + "份 </p>";
    if(document.getElementById("fried_chick").value      !=0) printAREA.innerHTML+="<p>炸雞腿" +document.getElementById("fried_chick").value + "份 </p>";
    if(document.getElementById("chick_nugget").value     !=0) printAREA.innerHTML+="<p>小雞塊" +document.getElementById("chick_nugget").value + "份 </p>";
    if(document.getElementById("french_fries").value     !=0) printAREA.innerHTML+="<p>薯條" +document.getElementById("french_fries").value + "份 </p>";
    if(document.getElementById("opt_pizza").value        !=0) printAREA.innerHTML+="<p>章魚燒個人披薩" +document.getElementById("opt_pizza").value + "份 </p>";
    if(document.getElementById("pork_pizza").value       !=0) printAREA.innerHTML+="<p>泡菜豬肉個人披薩" +document.getElementById("pork_pizza").value + "份 </p>";
    if(document.getElementById("seafood_pizza").value    !=0) printAREA.innerHTML+="<p>海鮮個人披薩" +document.getElementById("seafood_pizza").value + "份 </p>";

    if(document.getElementById("org_eggcake").value      !=0) printAREA.innerHTML+="<p>原味蛋餅" +document.getElementById("org_eggcake").value + "份 </p>";
    if(document.getElementById("tuna_eggcake").value     !=0) printAREA.innerHTML+="<p>鮪魚蛋餅" +document.getElementById("tuna_eggcake").value + "份 </p>";
    if(document.getElementById("cheese_eggcake").value   !=0) printAREA.innerHTML+="<p>起司蛋餅" +document.getElementById("cheese_eggcake").value + "份 </p>";
    if(document.getElementById("corn_eggcake").value     !=0) printAREA.innerHTML+="<p>玉米蛋餅" +document.getElementById("corn_eggcake").value + "份 </p>";
    if(document.getElementById("han_eggcake").value      !=0) printAREA.innerHTML+="<p>火腿蛋餅" +document.getElementById("han_eggcake").value + "份 </p>";
    if(document.getElementById("tuna_rice").value        !=0) printAREA.innerHTML+="<p>鮪魚御飯糰" +document.getElementById("tuna_rice").value + "份 </p>";
    if(document.getElementById("pur_rice").value         !=0) printAREA.innerHTML+="<p>紫米飯糰" +document.getElementById("pur_rice").value + "份 </p>";
    if(document.getElementById("pan_dumpling").value     !=0) printAREA.innerHTML+="<p>鍋貼(10個)" +document.getElementById("pan_dumpling").value + "份 </p>";
    if(document.getElementById("fritters").value         !=0) printAREA.innerHTML+="<p>油條" +document.getElementById("fritters").value + "份 </p>";
    if(document.getElementById("biscuit").value          !=0) printAREA.innerHTML+="<p>燒餅" +document.getElementById("biscuit").value + "份 </p>";
    if(document.getElementById("radish_cake").value      !=0) printAREA.innerHTML+="<p>煎蘿蔔糕(2片)" +document.getElementById("radish_cake").value + "份 </p>";
    if(document.getElementById("stream_bread").value     !=0) printAREA.innerHTML+="<p>饅頭" +document.getElementById("stream_bread").value + "份 </p>";
    if(document.getElementById("little_lonbao").value    !=0) printAREA.innerHTML+="<p>小籠包(6個)" +document.getElementById("little_lonbao").value + "份 </p>";
    if(document.getElementById("cabbage_bao").value      !=0) printAREA.innerHTML+="<p>高麗菜生煎包" +document.getElementById("cabbage_bao").value + "份 </p>";
    if(document.getElementById("meat_bao").value         !=0) printAREA.innerHTML+="<p>肉包" +document.getElementById("meat_bao").value + "份 </p>";
    if(document.getElementById("vege_bao").value         !=0) printAREA.innerHTML+="<p>菜包" +document.getElementById("vege_bao").value + "份 </p>";
    if(document.getElementById("porkin_bin").value       !=0) printAREA.innerHTML+="<p>豬肉餡餅" +document.getElementById("porkin_bin").value + "份 </p>";
    if(document.getElementById("cabbage_dump").value     !=0) printAREA.innerHTML+="<p>高麗菜水餃(10個)" +document.getElementById("cabbage_dump").value + "份 </p>";
    if(document.getElementById("meat_yuan").value        !=0) printAREA.innerHTML+="<p>肉圓(大)" +document.getElementById("meat_yuan").value + "份 </p>";
    if(document.getElementById("runbing").value          !=0) printAREA.innerHTML+="<p>潤餅" +document.getElementById("runbing").value + "份 </p>";
    if(document.getElementById("tsung_yo_bin").value     !=0) printAREA.innerHTML+="<p>蔥油餅(2片)" +document.getElementById("tsung_yo_bin").value + "份 </p>";
    if(document.getElementById("oaozin").value           !=0) printAREA.innerHTML+="<p>蚵仔煎" +document.getElementById("oaozin").value + "份 </p>";
    if(document.getElementById("sandwich").value         !=0) printAREA.innerHTML+="<p>營養三明治" +document.getElementById("sandwich").value + "份 </p>";
    if(document.getElementById("duck_egg_rice").value    !=0) printAREA.innerHTML+="<p>皮蛋瘦肉粥" +document.getElementById("duck_egg_rice").value + "份 </p>";

    if(document.getElementById("tomato_j").value         !=0) printAREA.innerHTML+="<p>番茄汁" +document.getElementById("tomato_j").value + "份 </p>";
    if(document.getElementById("orange_j").value         !=0) printAREA.innerHTML+="<p>柳橙原汁" +document.getElementById("orange_j").value + "份 </p>";
    if(document.getElementById("sprite").value           !=0) printAREA.innerHTML+="<p>雪碧" +document.getElementById("sprite").value + "份 </p>";
    if(document.getElementById("applecider").value       !=0) printAREA.innerHTML+="<p>蘋果西打" +document.getElementById("applecider").value + "份 </p>";
    if(document.getElementById("cola").value             !=0) printAREA.innerHTML+="<p>可樂" +document.getElementById("cola").value + "份 </p>";
    if(document.getElementById("co2drink").value         !=0) printAREA.innerHTML+="<p>汽水" +document.getElementById("co2drink").value + "份 </p>";
    if(document.getElementById("sasi").value             !=0) printAREA.innerHTML+="<p>沙士" +document.getElementById("sasi").value + "份 </p>";
    if(document.getElementById("pocari").value           !=0) printAREA.innerHTML+="<p>寶礦力" +document.getElementById("pocari").value + "份 </p>";
    if(document.getElementById("woolungtea").value       !=0) printAREA.innerHTML+="<p>烏龍茶" +document.getElementById("woolungtea").value + "份 </p>";
    if(document.getElementById("mycha").value            !=0) printAREA.innerHTML+="<p>麥茶" +document.getElementById("mycha").value + "份 </p>";
    if(document.getElementById("blacktea").value         !=0) printAREA.innerHTML+="<p>紅茶" +document.getElementById("blacktea").value + "份 </p>";
    if(document.getElementById("lemon_btea").value       !=0) printAREA.innerHTML+="<p>檸檬紅茶" +document.getElementById("lemon_btea").value + "份 </p>";
    if(document.getElementById("moly_tea").value         !=0) printAREA.innerHTML+="<p>茉莉花茶" +document.getElementById("moly_tea").value + "份 </p>";
    if(document.getElementById("mliktea").value          !=0) printAREA.innerHTML+="<p>奶茶" +document.getElementById("mliktea").value + "份 </p>";
    if(document.getElementById("woomeazi").value         !=0) printAREA.innerHTML+="<p>烏梅汁" +document.getElementById("woomeazi").value + "份 </p>";
    if(document.getElementById("grasstea").value         !=0) printAREA.innerHTML+="<p>青草茶" +document.getElementById("grasstea").value + "份 </p>";
    if(document.getElementById("nosugartea").value       !=0) printAREA.innerHTML+="<p>無糖茶" +document.getElementById("nosugartea").value + "份 </p>";
    if(document.getElementById("pmtea").value            !=0) printAREA.innerHTML+="<p>珍珠奶茶" +document.getElementById("pmtea").value + "份 </p>";
    if(document.getElementById("dongguatea").value       !=0) printAREA.innerHTML+="<p>冬瓜茶" +document.getElementById("dongguatea").value + "份 </p>";
    if(document.getElementById("watermelon_j").value     !=0) printAREA.innerHTML+="<p>西瓜汁" +document.getElementById("watermelon_j").value + "份 </p>";
    if(document.getElementById("choco_icesand").value    !=0) printAREA.innerHTML+="<p>巧克力冰沙(含奶泡)" +document.getElementById("choco_icesand").value + "份 </p>";
    if(document.getElementById("coke_icesand").value     !=0) printAREA.innerHTML+="<p>可樂冰沙" +document.getElementById("coke_icesand").value + "份 </p>";
    if(document.getElementById("juice_vin").value        !=0) printAREA.innerHTML+="<p>果汁醋飲料" +document.getElementById("juice_vin").value + "份 </p>";
    if(document.getElementById("c3in1cfe").value         !=0) printAREA.innerHTML+="<p>三合一咖啡隨身包" +document.getElementById("c3in1cfe").value + "份 </p>";
    if(document.getElementById("cfe_d").value            !=0) printAREA.innerHTML+="<p>咖啡飲料" +document.getElementById("cfe_d").value + "份 </p>";
    if(document.getElementById("cocoa_powd").value       !=0) printAREA.innerHTML+="<p>可可粉" +document.getElementById("cocoa_powd").value + "份 </p>";

    if(document.getElementById("niogabin").value         !=0) printAREA.innerHTML+="<p>牛軋糖" +document.getElementById("niogabin").value + "份 </p>";
    if(document.getElementById("redBM_pop").value        !=0) printAREA.innerHTML+="<p>紅豆牛奶冰棒" +document.getElementById("redBM_pop").value + "份 </p>";
    if(document.getElementById("yutoshu").value          !=0) printAREA.innerHTML+="<p>芋頭酥" +document.getElementById("yutoshu").value + "份 </p>";
    if(document.getElementById("sunbin").value           !=0) printAREA.innerHTML+="<p>太陽餅" +document.getElementById("sunbin").value + "份 </p>";
    if(document.getElementById("mmicecream").value       !=0) printAREA.innerHTML+="<p>冰淇淋" +document.getElementById("mmicecream").value + "份 </p>";
    if(document.getElementById("redBWheelB").value       !=0) printAREA.innerHTML+="<p>紅豆車輪餅" +document.getElementById("redBWheelB").value + "份 </p>";
    if(document.getElementById("shachima").value         !=0) printAREA.innerHTML+="<p>沙琪瑪" +document.getElementById("shachima").value + "份 </p>";
    if(document.getElementById("donut").value            !=0) printAREA.innerHTML+="<p>甜甜圈" +document.getElementById("donut").value + "份 </p>";
    if(document.getElementById("meat_shibin").value      !=0) printAREA.innerHTML+="<p>肉脯喜餅" +document.getElementById("meat_shibin").value + "份 </p>";
    if(document.getElementById("greenbean_p").value      !=0) printAREA.innerHTML+="<p>綠豆椪" +document.getElementById("greenbean_p").value + "份 </p>";
    if(document.getElementById("papple_cake").value      !=0) printAREA.innerHTML+="<p>鳳梨酥" +document.getElementById("papple_cake").value + "份 </p>";
    if(document.getElementById("guiyuancake").value      !=0) printAREA.innerHTML+="<p>桂圓蛋糕" +document.getElementById("guiyuancake").value + "份 </p>";
    if(document.getElementById("potato_chip").value      !=0) printAREA.innerHTML+="<p>洋芋片" +document.getElementById("potato_chip").value + "份 </p>";
}

function clearVariable()
{
    calorieFoodSum = 0;
    document.getElementById("foodlist").innerHTML="<p>吃下的熱量:" + calorieFoodSum + "kcal</p><p>吃下的食物:</p>";
         document.getElementById("bacon_cheese_burg").value=0;       
     document.getElementById("beef_cheese_burg").value =0;       
     document.getElementById("double_beef_burg").value =0;       
     document.getElementById("yaki_rice_burg").value   =0;       
     document.getElementById("pork_cheese_burg").value =0;       
     document.getElementById("chickleg_burg").value    =0;       
     document.getElementById("bake_chick_burg").value  =0;       
     document.getElementById("fried_fish_burg").value  =0;       
     document.getElementById("shrimp_burg").value      =0;       
     document.getElementById("fried_chick").value      =0;       
     document.getElementById("chick_nugget").value     =0;       
     document.getElementById("french_fries").value     =0;       
     document.getElementById("opt_pizza").value        =0;       
     document.getElementById("pork_pizza").value       =0;       
     document.getElementById("seafood_pizza").value    =0;      

     document.getElementById("org_eggcake").value      =0;     
     document.getElementById("tuna_eggcake").value     =0;       
     document.getElementById("cheese_eggcake").value   =0;   
     document.getElementById("corn_eggcake").value     =0; 
     document.getElementById("han_eggcake").value      =0;     
     document.getElementById("tuna_rice").value        =0;       
     document.getElementById("pur_rice").value         =0;       
     document.getElementById("pan_dumpling").value     =0;      
     document.getElementById("fritters").value         =0;       
     document.getElementById("biscuit").value          =0;    
     document.getElementById("radish_cake").value      =0;    
     document.getElementById("stream_bread").value     =0;      
     document.getElementById("little_lonbao").value    =0;   
     document.getElementById("cabbage_bao").value      =0;    
     document.getElementById("meat_bao").value         =0;     
     document.getElementById("vege_bao").value         =0;     
     document.getElementById("porkin_bin").value       =0;      
     document.getElementById("cabbage_dump").value     =0;       
     document.getElementById("meat_yuan").value        =0;      
     document.getElementById("runbing").value          =0;       
     document.getElementById("tsung_yo_bin").value     =0;       
     document.getElementById("oaozin").value           =0;       
     document.getElementById("sandwich").value         =0;       
     document.getElementById("duck_egg_rice").value    =0;       

     document.getElementById("tomato_j").value         =0;       
     document.getElementById("orange_j").value         =0;       
     document.getElementById("sprite").value           =0;     
     document.getElementById("applecider").value       =0;    
     document.getElementById("cola").value             =0;      
     document.getElementById("co2drink").value         =0;  
     document.getElementById("sasi").value             =0;    
     document.getElementById("pocari").value           =0;    
     document.getElementById("woolungtea").value       =0;   
     document.getElementById("mycha").value            =0;   
     document.getElementById("blacktea").value         =0; 
     document.getElementById("lemon_btea").value       =0;   
     document.getElementById("moly_tea").value         =0;     
     document.getElementById("mliktea").value          =0;      
     document.getElementById("woomeazi").value         =0;      
     document.getElementById("grasstea").value         =0;       
     document.getElementById("nosugartea").value       =0;    
     document.getElementById("pmtea").value            =0;   
     document.getElementById("dongguatea").value       =0;    
     document.getElementById("watermelon_j").value     =0;  
     document.getElementById("choco_icesand").value    =0;    
     document.getElementById("coke_icesand").value     =0;    
     document.getElementById("juice_vin").value        =0;      
     document.getElementById("c3in1cfe").value         =0;    
     document.getElementById("cfe_d").value            =0;     
     document.getElementById("cocoa_powd").value       =0;       

     document.getElementById("niogabin").value         =0;       
     document.getElementById("redBM_pop").value        =0;     
     document.getElementById("yutoshu").value          =0;       
     document.getElementById("sunbin").value           =0;       
     document.getElementById("mmicecream").value       =0;      
     document.getElementById("redBWheelB").value       =0;       
     document.getElementById("shachima").value         =0;       
     document.getElementById("donut").value            =0;     
     document.getElementById("meat_shibin").value      =0;     
     document.getElementById("greenbean_p").value      =0;      
     document.getElementById("papple_cake").value      =0;      
     document.getElementById("guiyuancake").value      =0;     
     document.getElementById("potato_chip").value      =0;   

}