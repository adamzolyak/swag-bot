# Pull Request Socks

## Overview

### Parts

Parts
* Arduino Uno
* [OpenBuilds V-Slot NEMA 17 Linear Actuator](https://openbuildspartstore.com/v-slot-nema-17-linear-actuator-bundle-belt-driven/)
* 12v 10A external power supply
* [Adafruit Arduino Motor Shield v2](https://www.adafruit.com/product/1438)
* [Adafruit Nema 17 Stepper Motor Bipolar](https://www.adafruit.com/product/324)
* [uArm Swift Pro](https://www.sparkfun.com/products/14342)
* [uArm Vision OpenMV Camera Kit](https://store.ufactory.cc/collections/frontpage/products/vision-camera-kit)


### Wiring

1. Add jumper to Arduino Motor Shield v2 to use external power supply.
2. Connect stepper to M2 / M1 connector on Arduino Motor Shield v2.  See below for wiring details.
3. Connect external power supply
4. Upload code

1. Setup uArm w/ Vision OpenMV Camera Kit as described in [Vision Camera Kit User Manual](http://download.ufactory.cc/docs/en/Vision_Camera_Kit%20User_Maunal_180312_V1.3.pdf). This manual and files referenced in the manual are in this repo.  Use the files in this repo as they have been modified.  If using a Mac, use [Hex Uploader for Mac](http://paulkaplan.me/HexUploader/) (also backed up in this repo).  You may also want to download [OpenMV software](https://openmv.io/pages/download0) for calibrating and updating the scripts on the OpenMV camera.


From top to bottom w/ pin connectors facing right (for [Adafruit Nema 17 Stepper Motor Bipolar](https://www.adafruit.com/product/324)):
* red
* yellow
* skip
* green
* gray

Wiring for other stpper motors:

[Open Hardware Nema 17 Stepper Motor Biploar 2A](https://openbuildspartstore.com/nema-17-stepper-motor/)
* black
* green
* skip
* blue
* red

[StepperOnline Nema 17 Stepper Motor Bipolar 2A](https://www.amazon.com/gp/product/B00PNEQKC0/ref=oh_aui_detailpage_o01_s00?ie=UTF8&psc=1)
* green
* yellow
* skip
* red
* blue

Note: reversing red/blue will chage direction of forward / backward commands in code.

More info on using the [Adafruit Arduino Motor Shield v2](https://www.adafruit.com/product/1438) at https://learn.adafruit.com/adafruit-motor-shield-v2-for-arduino/using-stepper-motors.

### Code

OpenMV
Use `color_tracking_test.py` or similar

uArm Swift Pro
Flash with `uArmSwiftPro_2ndUART.hex`

Arduino Mega 2560 with Camera Vision Shield
Use `vision.ino`

### Notes

7/29/2018
Learned that Arduino Motor Shield v2 can only power stepper motors up to 1.2A per bridge.  However, the Nema 17 Stepper Motor Bipolar 2A are 2A per bridge.  Therefore, ordered [350ma bipolar stepper motor](https://www.amazon.com/gp/product/B01N30ISYC/ref=oh_aui_detailpage_o00_s00?ie=UTF8&psc=1) and 2x [DRV8871 breakouts](https://www.amazon.com/gp/product/B06Y4VRXN4/ref=oh_aui_detailpage_o00_s00?ie=UTF8&psc=1) to use higher powered bipolar stepper motors. 
