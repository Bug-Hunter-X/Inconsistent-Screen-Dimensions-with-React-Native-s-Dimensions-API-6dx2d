# React Native Dimensions API Inconsistency Bug

This repository demonstrates a bug related to the `Dimensions` API in React Native where the reported screen dimensions are inaccurate, particularly after screen rotation or on devices with screen notches.  The `Dimensions.get('window')` method returns inconsistent values, causing UI misalignment and clipping.

## Problem
The `Dimensions` API doesn't always reflect the true available screen space.  This is especially problematic on devices with notches or when handling screen rotations.

## Solution
The solution involves using the `react-native-safe-area-context` library to access the true available space, excluding notches and other system UI elements. This ensures consistent and accurate layout regardless of device variations.

## Setup

1. Clone this repository
2. `npm install` or `yarn install`
3. Run the app on an emulator or device.