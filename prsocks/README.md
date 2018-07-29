# Pull Request Socks

## Overview

### Parts

Parts
* Arduino Uno
* 12v 10A external power supply
* [Arduino Motor Shield v2](https://www.adafruit.com/product/1438)
* [Nema 17 Stepper Motor Bipolar 2A](https://www.amazon.com/gp/product/B00PNEQKC0/ref=oh_aui_detailpage_o01_s00?ie=UTF8&psc=1)

### Wiring

1. Add jumper to Arduino Motor Shield v2 to use external power supply.
2. Connect stepper to M2 / M1 connector on Arduino Motor Shield v2.  See below for wiring details.
3. Connect external power supply
4. Upload code

From top to bottom w/ pin connectors facing right:
[Open Hardware Nema 17 Stepper Motor Biploar 2A](https://openbuildspartstore.com/nema-17-stepper-motor/)
* black
* green
* skip
* blue
* red

[Stepper Online Nema 17 Stepper Motor Bipolar 2A](https://www.amazon.com/gp/product/B00PNEQKC0/ref=oh_aui_detailpage_o01_s00?ie=UTF8&psc=1)
* green
* yellow
* skip
* red
* blue

Note: reversing red/blue will chage direction of forward / backward commands in code.

https://learn.adafruit.com/adafruit-motor-shield-v2-for-arduino/using-stepper-motors

### Code

### Notes

7/29/2018
Learned that Arduino Motor Shield v2 can only power stepper motors up to 1.2A per bridge.  However, the Nema 17 Stepper Motor Bipolar 2A are 2A per bridge.  Therefore, ordered [350ma bipolar stepper motor](https://www.amazon.com/gp/product/B01N30ISYC/ref=oh_aui_detailpage_o00_s00?ie=UTF8&psc=1) and 2x [DRV8871 breakouts](https://www.amazon.com/gp/product/B06Y4VRXN4/ref=oh_aui_detailpage_o00_s00?ie=UTF8&psc=1) to use higher powered bipolar stepper motors. 
