//宣告：各個物件Listener

//計算 1.BMI 2.腰圍 3.基礎代謝率
var cm, Height, Weight, Age, waistCircumference, workType, sex;
var weightStatus, waistCircumferenceStatus;
var bmi, bmr, dayCalorie;


//-------function part-------

function BMI() //算BMI
{
    Height = parseFloat(cm) / 100; //身高m
    bmi = (Weight / (Height * Height));
    bmi = parseFloat(bmi);
    bmi.toFixed(2); //取小數後兩位
}

function judgeWeightStatus() //判斷BMI超標
{
    if(bmi < 18.5)
        weightStatus = -1; //過輕
    else if(bmi >= 18.5 && bmi < 24.0)
        weightStatus = 0;  //正常
    else if(bmi >= 24.0 && bmi < 27.0)
        weightStatus = 1;  //過重
    else if(bmi >= 27.0 && bmi < 30.0)
        weightStatus = 2;  //輕度肥胖
    else if(bmi >= 30.0 && bmi < 35.0)
        weightStatus = 3;  //中度肥胖
    else
        weightStatus = 4;  //重度肥胖
}

function judgeWaistCircumference() //腰圍
{
    waistCircumference = 0;                  //預設正常
    if(sex == 1 && waistCircumference >= 90) //男過多
        waistCircumferenceStatus = 1;
    if(sex == 0 && waistCircumference >= 80) //女過多
        waistCircumferenceStatus = 1;
}

function everydayCalories() //每日所需熱量(大卡)
{
    if(weightStatus == -1)
    {
        if(workType == 0)
            dayCalorie = 35 * Weight;
        else if(workType == 1)
            dayCalorie = 30 * Weight;
        else
            dayCalorie = 22.5 * Weight;
    }
    else if(weightStatus == 0)
    {
        if(workType == 0)
            dayCalorie = 40 * Weight;
        else if(workType == 1)
            dayCalorie = 35 * Weight;
        else
            dayCalorie = 30 * Weight;
    }
    else
    {
        if(workType == 0)
            dayCalorie = 45 * Weight;
        else if(workType == 1)
            dayCalorie = 40 * Weight;
        else
            dayCalorie = 35 * Weight;
    }
    dayCalorie = parseInt(dayCalorie);
}

function BMR() //算基礎代謝率
{
    if(sex == 1)
        bmr = (13.7 * Weight) + (5.0 * cm) - (6.8 * Age) + 66;
    else
        bmr = (9.6 * Weight) + (1.8 * cm) - (4.7 * Age) + 655;
    bmr = parseFloat(bmr);
    bmr.toFixed(2);
}

function allVariableClear()
{
    cm = 0;
    Height = 0.0;
    Weight = 0.0;
    Age = 0;
    waistCircumference = 0;
    workType = -1;
    sex = -1;
    weightStatus = -1;
    waistCircumferenceStatus = -1;
    bmi = 0;
    bmr = 0.0;
    dayCalorie = 0;
}

//-----All method-----
function CALCULATE()
{
    var gender_select=document.getElementById("gender");
    var age_select=document.getElementById("age");
    var height_select=document.getElementById("height");
    var weight_select=document.getElementById("weight");
    var waist_select=document.getElementById("waist");
    var worklevel_select=document.getElementById("work");
    cm=height_select.value;
    Weight=weight_select.value;
    Age=age_select.value;
    waistCircumference=waist.value;
    workType=worklevel_select.value;
    console.log(cm,Weight,Age,waistCircumference,workType);
    if(workType=="low") workType=0;
    else if(workType=="mid") workType=1;
    else workType=2;
    //-------input part-------
    cm = parseInt(cm);                                 //身高cm
    Weight = parseFloat(Weight);                       //體重kg
    Age = parseInt(Age);                               //年齡
    waistCircumference = parseInt(waistCircumference); //腰圍cm
    workType = parseInt(workType);                    //工作量(0, 1, 2)
    sex = parseInt(sex);                               //性別(0, 1)

    BMI();
    judgeWeightStatus();
    judgeWaistCircumference();
    everydayCalories();
    BMR();
    var print_result=document.getElementById("data_result");
    print_result.innerHTML="你的BMI"+bmi+"<br>你的基礎代謝率(BMR)"+bmr;
}