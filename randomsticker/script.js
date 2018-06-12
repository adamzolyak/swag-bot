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
    varRandNum = mathRandomInt(4, 4);
    if (varRandNum == '1') {
      await UArm.set_position({ "x": 118, "y": -26, "z": 40 });
    } else if (varRandNum == '2') {
      await UArm.set_position({ "x": 188, "y": -49, "z": 40 });
    } else if (varRandNum == '3') {
      await UArm.set_position({ "x": 212, "y": 29, "z": 40 });
    } else if (varRandNum == '4') {
      await UArm.set_position({ "x": 135, "y": 41, "z": 40 });
    } else {
      await UArm.set_position({ "x": 138, "y": 41, "z": 40 });
    }
    while (!UArm.TipSensor.getValue()) {
      await UArm.set_position({ "z": 0 - 1, "relative": true });
      await BlocklyLib.wait(0.05);
    }
    await BlocklyLib.wait(1);
    await UArm.set_pump({ "ON": true, "wait": true });
    await BlocklyLib.wait(0.25);
    await UArm.set_position({ "z": 60, "relative": true });
    await BlocklyLib.wait(0.25);
    await UArm.set_position({ "x": 32, "y": 300, "z": 148 });
    await BlocklyLib.wait(0);
    await UArm.set_position({ "x": (mathRandomInt(0, 100)), "relative": true });
    await BlocklyLib.wait(0);
    await UArm.set_position({ "y": 0 - (mathRandomInt(0, 200)), "relative": true });
    await UArm.set_pump({ "ON": false, "wait": true });
    await UArm.reset();
    await BlocklyLib.wait(45);
  });

}());
