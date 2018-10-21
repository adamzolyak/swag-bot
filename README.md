# Waffle.io Swag Bot!

Waffle.io’s Swag Robot!  Want some socks or a sticker?

## Overview

Waffle.io swag bot is a robot that fulfills all your waffly swag requests.  Come find the swag bot at an event near you!

## Upgrading Firmware

To ensure the optimal operation, make sure the uArm Swift Pro has the latest stable firmware installed.

To upgrade the firmware:

1. Connect the uArm Swift Pro to power
2. Connect the uArm Swift Pro to your laptop via USB
3. Power on the uArm Swift Pro
4. Download the latest firmware release from [https://github.com/uArm-Developer/SwiftProForArduino/releases](https://github.com/uArm-Developer/SwiftProForArduino/releases)
5. On Macs, use [Hex Uploader for Mac](http://paulkaplan.me/HexUploader/) (also backed up in this repo).  Select the following settings:
* Arduino Type = `Mega - ATmega 2560`
* Serial Port = `usbmodem#####`
* Baud Rate = `115200`
6. Click Open and select the downloaded firmware hex file.  The firmware file will be uploaded to the uArm Swift Pro.
7. Test a simple script on the uArm Swift Pro after uploading.