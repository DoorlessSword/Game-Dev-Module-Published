gdjs.EndCode = {};
gdjs.EndCode.GDPlayerObjects1= [];
gdjs.EndCode.GDPlayerObjects2= [];
gdjs.EndCode.GDPlayerHitBoxObjects1= [];
gdjs.EndCode.GDPlayerHitBoxObjects2= [];
gdjs.EndCode.GDEndTextObjects1= [];
gdjs.EndCode.GDEndTextObjects2= [];
gdjs.EndCode.GDThanksObjects1= [];
gdjs.EndCode.GDThanksObjects2= [];

gdjs.EndCode.conditionTrue_0 = {val:false};
gdjs.EndCode.condition0IsTrue_0 = {val:false};
gdjs.EndCode.condition1IsTrue_0 = {val:false};
gdjs.EndCode.condition2IsTrue_0 = {val:false};


gdjs.EndCode.eventsList0x6bc4d4 = function(runtimeScene) {

{


{
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


}; //End of gdjs.EndCode.eventsList0x6bc4d4
gdjs.EndCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EndCode.condition0IsTrue_0.val) {
gdjs.EndCode.GDEndTextObjects1.createFrom(runtimeScene.getObjects("EndText"));
{for(var i = 0, len = gdjs.EndCode.GDEndTextObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDEndTextObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.EndCode.GDEndTextObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDEndTextObjects1[i].addForce(0, -(40), 1);
}
}}

}


{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EndCode.condition0IsTrue_0.val) {
gdjs.EndCode.GDThanksObjects1.createFrom(runtimeScene.getObjects("Thanks"));
{for(var i = 0, len = gdjs.EndCode.GDThanksObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDThanksObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.EndCode.GDThanksObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDThanksObjects1[i].addForce(0, -(40), 1);
}
}}

}


{

gdjs.EndCode.GDThanksObjects1.createFrom(runtimeScene.getObjects("Thanks"));

gdjs.EndCode.condition0IsTrue_0.val = false;
gdjs.EndCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.EndCode.GDThanksObjects1.length;i<l;++i) {
    if ( gdjs.EndCode.GDThanksObjects1[i].getY() > 180 ) {
        gdjs.EndCode.condition0IsTrue_0.val = true;
        gdjs.EndCode.GDThanksObjects1[k] = gdjs.EndCode.GDThanksObjects1[i];
        ++k;
    }
}
gdjs.EndCode.GDThanksObjects1.length = k;}if ( gdjs.EndCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.EndCode.GDThanksObjects1.length;i<l;++i) {
    if ( gdjs.EndCode.GDThanksObjects1[i].getY() < 200 ) {
        gdjs.EndCode.condition1IsTrue_0.val = true;
        gdjs.EndCode.GDThanksObjects1[k] = gdjs.EndCode.GDThanksObjects1[i];
        ++k;
    }
}
gdjs.EndCode.GDThanksObjects1.length = k;}}
if (gdjs.EndCode.condition1IsTrue_0.val) {
/* Reuse gdjs.EndCode.GDThanksObjects1 */
{for(var i = 0, len = gdjs.EndCode.GDThanksObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDThanksObjects1[i].clearForces();
}
}
{ //Subevents
gdjs.EndCode.eventsList0x6bc4d4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.EndCode.eventsList0x5b70b8


gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDPlayerObjects1.length = 0;
gdjs.EndCode.GDPlayerObjects2.length = 0;
gdjs.EndCode.GDPlayerHitBoxObjects1.length = 0;
gdjs.EndCode.GDPlayerHitBoxObjects2.length = 0;
gdjs.EndCode.GDEndTextObjects1.length = 0;
gdjs.EndCode.GDEndTextObjects2.length = 0;
gdjs.EndCode.GDThanksObjects1.length = 0;
gdjs.EndCode.GDThanksObjects2.length = 0;

gdjs.EndCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['EndCode'] = gdjs.EndCode;
