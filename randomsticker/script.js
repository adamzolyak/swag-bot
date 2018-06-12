 

New Project New

icon_Save as Duplicate

Save

Discard

Run



 
Blocks

Javascript

XML
Drop Random Sticker

Connected
(async function() {

  var varRandNum;

  function mathRandomInt(a, b) {
    if (a > b) {
      // Swap a and b to ensure a is smaller.
      var c = a;
      a = b;
      b = c;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  await BlocklyLib.runForever(async() => {
    await UArm.reset();
    UArm.set_speed(4);
    varRandNum = mathRandomInt(1, 4);
    if (varRandNum == '1') {
      await UArm.set_position({ "x": 116, "y": -34, "z": 54 });
    }
    if (varRandNum == '2') {
      await UArm.set_position({ "x": 184, "y": -62, "z": 56 });
    }
    if (varRandNum == '3') {
      await UArm.set_position({ "x": 212, "y": 13, "z": 49 });
    }
    if (varRandNum == '4') {
      await UArm.set_position({ "x": 138, "y": 32, "z": 52 });
    }
    while (!UArm.TipSensor.getValue()) {
      await UArm.set_position({ "z": 0 - 2, "relative": true });
      await BlocklyLib.wait(0.05);
    }
    await BlocklyLib.wait(0.25);
    await UArm.set_pump({ "ON": true, "wait": true });
    await UArm.set_position({ "z": 60, "relative": true });
    await UArm.base_turn({ "angle": 170, "wait": true });
    await BlocklyLib.wait(0.1);
    await UArm.set_position({ "x": 30, "y": 137, "z": 99 });
    await UArm.set_position({ "x": (mathRandomInt(50, 150)), "relative": true });
    await UArm.set_position({ "y": 0 - (mathRandomInt(100, 200)), "relative": true });
    await UArm.set_position({ "x": 0 - 10, "relative": true });
    await UArm.set_pump({ "ON": false, "wait": true });
    await UArm.reset();
    await BlocklyLib.wait(30);
  });

}());
 hide side bar
My Project
Sync
ID ID
Name 名称
1	Drop Random Sticker	


Edit

Import
New task
