gdjs.TitleCode = {};
gdjs.TitleCode.GDPlayerObjects1= [];
gdjs.TitleCode.GDPlayerObjects2= [];
gdjs.TitleCode.GDPlayerHitBoxObjects1= [];
gdjs.TitleCode.GDPlayerHitBoxObjects2= [];
gdjs.TitleCode.GDTitleObjects1= [];
gdjs.TitleCode.GDTitleObjects2= [];
gdjs.TitleCode.GDStartButtonObjects1= [];
gdjs.TitleCode.GDStartButtonObjects2= [];
gdjs.TitleCode.GDStartObjects1= [];
gdjs.TitleCode.GDStartObjects2= [];

gdjs.TitleCode.conditionTrue_0 = {val:false};
gdjs.TitleCode.condition0IsTrue_0 = {val:false};
gdjs.TitleCode.condition1IsTrue_0 = {val:false};
gdjs.TitleCode.condition2IsTrue_0 = {val:false};
gdjs.TitleCode.conditionTrue_1 = {val:false};
gdjs.TitleCode.condition0IsTrue_1 = {val:false};
gdjs.TitleCode.condition1IsTrue_1 = {val:false};
gdjs.TitleCode.condition2IsTrue_1 = {val:false};


gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.TitleCode.GDStartButtonObjects1});gdjs.TitleCode.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.TitleCode.condition0IsTrue_0.val = false;
{
gdjs.TitleCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{

gdjs.TitleCode.GDStartButtonObjects1.createFrom(runtimeScene.getObjects("StartButton"));

gdjs.TitleCode.condition0IsTrue_0.val = false;
{
{gdjs.TitleCode.conditionTrue_1 = gdjs.TitleCode.condition0IsTrue_0;
gdjs.TitleCode.condition0IsTrue_1.val = false;
gdjs.TitleCode.condition1IsTrue_1.val = false;
{
gdjs.TitleCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.TitleCode.condition0IsTrue_1.val ) {
{
gdjs.TitleCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.TitleCode.mapOfGDgdjs_46TitleCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}}
gdjs.TitleCode.conditionTrue_1.val = true && gdjs.TitleCode.condition0IsTrue_1.val && gdjs.TitleCode.condition1IsTrue_1.val;
}
}if (gdjs.TitleCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Town", false);
}}

}


}; //End of gdjs.TitleCode.eventsList0x5b6e18


gdjs.TitleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleCode.GDPlayerObjects1.length = 0;
gdjs.TitleCode.GDPlayerObjects2.length = 0;
gdjs.TitleCode.GDPlayerHitBoxObjects1.length = 0;
gdjs.TitleCode.GDPlayerHitBoxObjects2.length = 0;
gdjs.TitleCode.GDTitleObjects1.length = 0;
gdjs.TitleCode.GDTitleObjects2.length = 0;
gdjs.TitleCode.GDStartButtonObjects1.length = 0;
gdjs.TitleCode.GDStartButtonObjects2.length = 0;
gdjs.TitleCode.GDStartObjects1.length = 0;
gdjs.TitleCode.GDStartObjects2.length = 0;

gdjs.TitleCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['TitleCode'] = gdjs.TitleCode;
