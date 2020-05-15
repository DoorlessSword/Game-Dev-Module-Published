gdjs.ControlsCode = {};
gdjs.ControlsCode.GDPlayerObjects1= [];
gdjs.ControlsCode.GDPlayerObjects2= [];
gdjs.ControlsCode.GDPlayerHitBoxObjects1= [];
gdjs.ControlsCode.GDPlayerHitBoxObjects2= [];
gdjs.ControlsCode.GDWhoYouAreObjects1= [];
gdjs.ControlsCode.GDWhoYouAreObjects2= [];
gdjs.ControlsCode.GDControlsObjects1= [];
gdjs.ControlsCode.GDControlsObjects2= [];
gdjs.ControlsCode.GDStartObjects1= [];
gdjs.ControlsCode.GDStartObjects2= [];

gdjs.ControlsCode.conditionTrue_0 = {val:false};
gdjs.ControlsCode.condition0IsTrue_0 = {val:false};
gdjs.ControlsCode.condition1IsTrue_0 = {val:false};
gdjs.ControlsCode.condition2IsTrue_0 = {val:false};


gdjs.ControlsCode.eventsList0x5b70b8 = function(runtimeScene) {

{


gdjs.ControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ControlsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ControlsCode.condition0IsTrue_0.val) {
gdjs.ControlsCode.GDWhoYouAreObjects1.createFrom(runtimeScene.getObjects("WhoYouAre"));
{for(var i = 0, len = gdjs.ControlsCode.GDWhoYouAreObjects1.length ;i < len;++i) {
    gdjs.ControlsCode.GDWhoYouAreObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.ControlsCode.GDWhoYouAreObjects1.length ;i < len;++i) {
    gdjs.ControlsCode.GDWhoYouAreObjects1[i].addForce(0, -(40), 1);
}
}}

}


{


gdjs.ControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ControlsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ControlsCode.condition0IsTrue_0.val) {
gdjs.ControlsCode.GDControlsObjects1.createFrom(runtimeScene.getObjects("Controls"));
{for(var i = 0, len = gdjs.ControlsCode.GDControlsObjects1.length ;i < len;++i) {
    gdjs.ControlsCode.GDControlsObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.ControlsCode.GDControlsObjects1.length ;i < len;++i) {
    gdjs.ControlsCode.GDControlsObjects1[i].addForce(0, -(40), 1);
}
}}

}


{


gdjs.ControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ControlsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ControlsCode.condition0IsTrue_0.val) {
gdjs.ControlsCode.GDStartObjects1.createFrom(runtimeScene.getObjects("Start"));
{for(var i = 0, len = gdjs.ControlsCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.ControlsCode.GDStartObjects1[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.ControlsCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.ControlsCode.GDStartObjects1[i].addForce(0, -(40), 1);
}
}}

}


{

gdjs.ControlsCode.GDControlsObjects1.createFrom(runtimeScene.getObjects("Controls"));

gdjs.ControlsCode.condition0IsTrue_0.val = false;
gdjs.ControlsCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.ControlsCode.GDControlsObjects1.length;i<l;++i) {
    if ( gdjs.ControlsCode.GDControlsObjects1[i].getY() > 180 ) {
        gdjs.ControlsCode.condition0IsTrue_0.val = true;
        gdjs.ControlsCode.GDControlsObjects1[k] = gdjs.ControlsCode.GDControlsObjects1[i];
        ++k;
    }
}
gdjs.ControlsCode.GDControlsObjects1.length = k;}if ( gdjs.ControlsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.ControlsCode.GDControlsObjects1.length;i<l;++i) {
    if ( gdjs.ControlsCode.GDControlsObjects1[i].getY() < 200 ) {
        gdjs.ControlsCode.condition1IsTrue_0.val = true;
        gdjs.ControlsCode.GDControlsObjects1[k] = gdjs.ControlsCode.GDControlsObjects1[i];
        ++k;
    }
}
gdjs.ControlsCode.GDControlsObjects1.length = k;}}
if (gdjs.ControlsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.ControlsCode.GDControlsObjects1 */
gdjs.ControlsCode.GDStartObjects1.createFrom(runtimeScene.getObjects("Start"));
{for(var i = 0, len = gdjs.ControlsCode.GDControlsObjects1.length ;i < len;++i) {
    gdjs.ControlsCode.GDControlsObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.ControlsCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.ControlsCode.GDStartObjects1[i].clearForces();
}
}}

}


{


gdjs.ControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.ControlsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Town", true);
}}

}


}; //End of gdjs.ControlsCode.eventsList0x5b70b8


gdjs.ControlsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ControlsCode.GDPlayerObjects1.length = 0;
gdjs.ControlsCode.GDPlayerObjects2.length = 0;
gdjs.ControlsCode.GDPlayerHitBoxObjects1.length = 0;
gdjs.ControlsCode.GDPlayerHitBoxObjects2.length = 0;
gdjs.ControlsCode.GDWhoYouAreObjects1.length = 0;
gdjs.ControlsCode.GDWhoYouAreObjects2.length = 0;
gdjs.ControlsCode.GDControlsObjects1.length = 0;
gdjs.ControlsCode.GDControlsObjects2.length = 0;
gdjs.ControlsCode.GDStartObjects1.length = 0;
gdjs.ControlsCode.GDStartObjects2.length = 0;

gdjs.ControlsCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['ControlsCode'] = gdjs.ControlsCode;
