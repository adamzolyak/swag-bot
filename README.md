# Waffle.io Swag Bot!

Waffle.io’s Swag Robot!  Want some socks?

## Overview

Waffle.io swag bot is a robot that fulfills all your waffly swag requsests.  Come find the swag bot at an event near you!

## Upgrading Firmware

To ensure the best possible operation, make sure the uArm Swift Pro has the latest stable firmware.

To upgrade the firmware:

1. Connect the uArm Swift Pro to power
1. Connect the uArm Swift Pro to your laptop via USB
1. Power on the uArm Swift Pro
1. Download the latest firmware release from [https://github.com/uArm-Developer/SwiftProForArduino/releases](https://github.com/uArm-Developer/SwiftProForArduino/releases)
1. On Macs, use [Hex Uploader for Mac](http://paulkaplan.me/HexUploader/) (also backed up in this repo).  Select the following settings:
* Atduino Type = `Mega - ATmega 2560`
* Serial Port = `usbmodem#####`
* Baud Rate = `115200`
1. Click Open and select the downloaded firmware hex file.  The firmware file will be uploaded to the uArm Swift Pro.
1. Test a simple script on the uArm Swift Pro after uploading.