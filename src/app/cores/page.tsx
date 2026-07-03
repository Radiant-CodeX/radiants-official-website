'use client';
import React from 'react';
import SubPage, { Gold } from '@/components/SubPage/SubPage';

export default function CoresPage() {
  return (
    <SubPage
      kicker="Cores — embedded & hardware"
      titleLines={[
        <React.Fragment key="l1">Where software</React.Fragment>,
        <React.Fragment key="l2">
          meets <Gold>silicon</Gold>.
        </React.Fragment>,
      ]}
      intro="The hardest systems are the ones you can hold. We build firmware, custom hardware, and connected devices engineered for real-world conditions — not lab demos."
      rowsKicker="What we engineer"
      rows={[
        {
          no: '01',
          title: 'Embedded systems',
          text: 'Firmware for microcontrollers and SoCs — efficient, reliable, and purpose-built. Low-level code that respects every byte and every milliamp.',
        },
        {
          no: '02',
          title: 'Custom hardware',
          text: 'PCB design, schematic capture, and prototype builds. From concept to working board, we engineer every layer of the physical stack.',
        },
        {
          no: '03',
          title: 'Connected devices',
          text: 'IoT systems that bridge physical and digital — sensor integration, wireless protocols, and edge computing in one cohesive product.',
        },
      ]}
      cols={[
        {
          title: 'Microcontrollers',
          items: ['ARM Cortex-M', 'ESP32 / ESP8266', 'STM32 series', 'Arduino / AVR'],
        },
        {
          title: 'Communication',
          items: ['UART / SPI / I2C', 'BLE & Wi-Fi', 'LoRa / LoRaWAN', 'CAN bus'],
        },
        {
          title: 'Tooling',
          items: ['KiCad / Altium', 'FreeRTOS', 'Zephyr RTOS', 'PlatformIO'],
        },
      ]}
      marqueeText="Built for the"
      marqueeAccent="real world"
      ctaTitle={[
        <React.Fragment key="c1">Have a device</React.Fragment>,
        <React.Fragment key="c2">
          in <Gold>mind</Gold>?
        </React.Fragment>,
      ]}
      ctaSub="From a sketch on a napkin to a working prototype — tell us what it needs to do, and we'll map the path to hardware."
    />
  );
}
