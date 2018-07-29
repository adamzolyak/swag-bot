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
1. Connect stepper to M2 / M1 connector on Arduino Motor Shield v2.  From top to bottom w/ pin connectors facing right. green
  * green
  * yellow
  * skip
  * red
  * blue
1. Connect external power supply
1. Upload code

Note: reversing red/blue will chage direction of forward / backward commands in code.

https://learn.adafruit.com/adafruit-motor-shield-v2-for-arduino/using-stepper-motors

### Code
