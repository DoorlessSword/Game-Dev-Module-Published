gdjs.pauseMenuCode = {};
gdjs.pauseMenuCode.GDPlayerObjects1= [];
gdjs.pauseMenuCode.GDPlayerObjects2= [];
gdjs.pauseMenuCode.GDPlayerHitBoxObjects1= [];
gdjs.pauseMenuCode.GDPlayerHitBoxObjects2= [];
gdjs.pauseMenuCode.GDResumeButtonObjects1= [];
gdjs.pauseMenuCode.GDResumeButtonObjects2= [];
gdjs.pauseMenuCode.GDPausedObjects1= [];
gdjs.pauseMenuCode.GDPausedObjects2= [];

gdjs.pauseMenuCode.conditionTrue_0 = {val:false};
gdjs.pauseMenuCode.condition0IsTrue_0 = {val:false};
gdjs.pauseMenuCode.condition1IsTrue_0 = {val:false};
gdjs.pauseMenuCode.conditionTrue_1 = {val:false};
gdjs.pauseMenuCode.condition0IsTrue_1 = {val:false};
gdjs.pauseMenuCode.condition1IsTrue_1 = {val:false};


gdjs.pauseMenuCode.eventsList0x5b6e18 = function(runtimeScene) {

{



}


{


gdjs.pauseMenuCode.condition0IsTrue_0.val = false;
{
{gdjs.pauseMenuCode.conditionTrue_1 = gdjs.pauseMenuCode.condition0IsTrue_0;
gdjs.pauseMenuCode.condition0IsTrue_1.val = false;
{
gdjs.pauseMenuCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if( gdjs.pauseMenuCode.condition0IsTrue_1.val ) {
    gdjs.pauseMenuCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.pauseMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


}; //End of gdjs.pauseMenuCode.eventsList0x5b6e18


gdjs.pauseMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.pauseMenuCode.GDPlayerObjects1.length = 0;
gdjs.pauseMenuCode.GDPlayerObjects2.length = 0;
gdjs.pauseMenuCode.GDPlayerHitBoxObjects1.length = 0;
gdjs.pauseMenuCode.GDPlayerHitBoxObjects2.length = 0;
gdjs.pauseMenuCode.GDResumeButtonObjects1.length = 0;
gdjs.pauseMenuCode.GDResumeButtonObjects2.length = 0;
gdjs.pauseMenuCode.GDPausedObjects1.length = 0;
gdjs.pauseMenuCode.GDPausedObjects2.length = 0;

gdjs.pauseMenuCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['pauseMenuCode'] = gdjs.pauseMenuCode;
