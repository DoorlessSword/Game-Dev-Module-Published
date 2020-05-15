gdjs.pauseMenuCode = {};
gdjs.pauseMenuCode.GDResumeButtonObjects1_1final = [];

gdjs.pauseMenuCode.GDPlayerObjects1= [];
gdjs.pauseMenuCode.GDPlayerObjects2= [];
gdjs.pauseMenuCode.GDPlayerHitBoxObjects1= [];
gdjs.pauseMenuCode.GDPlayerHitBoxObjects2= [];
gdjs.pauseMenuCode.GDPausedObjects1= [];
gdjs.pauseMenuCode.GDPausedObjects2= [];
gdjs.pauseMenuCode.GDExitButtonObjects1= [];
gdjs.pauseMenuCode.GDExitButtonObjects2= [];
gdjs.pauseMenuCode.GDResumeButtonObjects1= [];
gdjs.pauseMenuCode.GDResumeButtonObjects2= [];
gdjs.pauseMenuCode.GDResumeObjects1= [];
gdjs.pauseMenuCode.GDResumeObjects2= [];
gdjs.pauseMenuCode.GDQuitObjects1= [];
gdjs.pauseMenuCode.GDQuitObjects2= [];

gdjs.pauseMenuCode.conditionTrue_0 = {val:false};
gdjs.pauseMenuCode.condition0IsTrue_0 = {val:false};
gdjs.pauseMenuCode.condition1IsTrue_0 = {val:false};
gdjs.pauseMenuCode.condition2IsTrue_0 = {val:false};
gdjs.pauseMenuCode.conditionTrue_1 = {val:false};
gdjs.pauseMenuCode.condition0IsTrue_1 = {val:false};
gdjs.pauseMenuCode.condition1IsTrue_1 = {val:false};
gdjs.pauseMenuCode.condition2IsTrue_1 = {val:false};
gdjs.pauseMenuCode.conditionTrue_2 = {val:false};
gdjs.pauseMenuCode.condition0IsTrue_2 = {val:false};
gdjs.pauseMenuCode.condition1IsTrue_2 = {val:false};
gdjs.pauseMenuCode.condition2IsTrue_2 = {val:false};


gdjs.pauseMenuCode.mapOfGDgdjs_46pauseMenuCode_46GDResumeButtonObjects2Objects = Hashtable.newFrom({"ResumeButton": gdjs.pauseMenuCode.GDResumeButtonObjects2});gdjs.pauseMenuCode.mapOfGDgdjs_46pauseMenuCode_46GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.pauseMenuCode.GDExitButtonObjects1});gdjs.pauseMenuCode.eventsList0x5b70b8 = function(runtimeScene) {

{



}


{

gdjs.pauseMenuCode.GDResumeButtonObjects1.length = 0;


gdjs.pauseMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.pauseMenuCode.conditionTrue_1 = gdjs.pauseMenuCode.condition0IsTrue_0;
gdjs.pauseMenuCode.GDResumeButtonObjects1_1final.length = 0;gdjs.pauseMenuCode.condition0IsTrue_1.val = false;
gdjs.pauseMenuCode.condition1IsTrue_1.val = false;
{
gdjs.pauseMenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if( gdjs.pauseMenuCode.condition0IsTrue_1.val ) {
    gdjs.pauseMenuCode.conditionTrue_1.val = true;
}
}
{
gdjs.pauseMenuCode.GDResumeButtonObjects2.createFrom(runtimeScene.getObjects("ResumeButton"));
{gdjs.pauseMenuCode.conditionTrue_2 = gdjs.pauseMenuCode.condition1IsTrue_1;
gdjs.pauseMenuCode.condition0IsTrue_2.val = false;
gdjs.pauseMenuCode.condition1IsTrue_2.val = false;
{
gdjs.pauseMenuCode.condition0IsTrue_2.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.pauseMenuCode.condition0IsTrue_2.val ) {
{
gdjs.pauseMenuCode.condition1IsTrue_2.val = gdjs.evtTools.input.cursorOnObject(gdjs.pauseMenuCode.mapOfGDgdjs_46pauseMenuCode_46GDResumeButtonObjects2Objects, runtimeScene, true, false);
}}
gdjs.pauseMenuCode.conditionTrue_2.val = true && gdjs.pauseMenuCode.condition0IsTrue_2.val && gdjs.pauseMenuCode.condition1IsTrue_2.val;
}
if( gdjs.pauseMenuCode.condition1IsTrue_1.val ) {
    gdjs.pauseMenuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.pauseMenuCode.GDResumeButtonObjects2.length;j<jLen;++j) {
        if ( gdjs.pauseMenuCode.GDResumeButtonObjects1_1final.indexOf(gdjs.pauseMenuCode.GDResumeButtonObjects2[j]) === -1 )
            gdjs.pauseMenuCode.GDResumeButtonObjects1_1final.push(gdjs.pauseMenuCode.GDResumeButtonObjects2[j]);
    }
}
}
{
gdjs.pauseMenuCode.GDResumeButtonObjects1.createFrom(gdjs.pauseMenuCode.GDResumeButtonObjects1_1final);
}
}
}if (gdjs.pauseMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{

gdjs.pauseMenuCode.GDExitButtonObjects1.createFrom(runtimeScene.getObjects("ExitButton"));

gdjs.pauseMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.pauseMenuCode.conditionTrue_1 = gdjs.pauseMenuCode.condition0IsTrue_0;
gdjs.pauseMenuCode.condition0IsTrue_1.val = false;
gdjs.pauseMenuCode.condition1IsTrue_1.val = false;
{
gdjs.pauseMenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.pauseMenuCode.condition0IsTrue_1.val ) {
{
gdjs.pauseMenuCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.pauseMenuCode.mapOfGDgdjs_46pauseMenuCode_46GDExitButtonObjects1Objects, runtimeScene, true, false);
}}
gdjs.pauseMenuCode.conditionTrue_1.val = true && gdjs.pauseMenuCode.condition0IsTrue_1.val && gdjs.pauseMenuCode.condition1IsTrue_1.val;
}
}if (gdjs.pauseMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


}; //End of gdjs.pauseMenuCode.eventsList0x5b70b8


gdjs.pauseMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.pauseMenuCode.GDPlayerObjects1.length = 0;
gdjs.pauseMenuCode.GDPlayerObjects2.length = 0;
gdjs.pauseMenuCode.GDPlayerHitBoxObjects1.length = 0;
gdjs.pauseMenuCode.GDPlayerHitBoxObjects2.length = 0;
gdjs.pauseMenuCode.GDPausedObjects1.length = 0;
gdjs.pauseMenuCode.GDPausedObjects2.length = 0;
gdjs.pauseMenuCode.GDExitButtonObjects1.length = 0;
gdjs.pauseMenuCode.GDExitButtonObjects2.length = 0;
gdjs.pauseMenuCode.GDResumeButtonObjects1.length = 0;
gdjs.pauseMenuCode.GDResumeButtonObjects2.length = 0;
gdjs.pauseMenuCode.GDResumeObjects1.length = 0;
gdjs.pauseMenuCode.GDResumeObjects2.length = 0;
gdjs.pauseMenuCode.GDQuitObjects1.length = 0;
gdjs.pauseMenuCode.GDQuitObjects2.length = 0;

gdjs.pauseMenuCode.eventsList0x5b70b8(runtimeScene);
return;

}

gdjs['pauseMenuCode'] = gdjs.pauseMenuCode;
