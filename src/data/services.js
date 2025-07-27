// services.js
import { Anchor, Building, Cloud, Cpu, Droplets, Settings } from 'lucide-react'
import theme from '../styles/theme'

// Images
import IndustrialPanelManufacturingFloor1 from '../assets/IndustrialPanelManufacturingFloor_01.png'
import IndustrialPanelManufacturingFloor2 from '../assets/IndustrialPanelManufacturingFloor_02.png'
import IoTCloudIntegration1 from '../assets/IoTCloudIntegration_01.png'
import IoTCloudIntegration2 from '../assets/IoTCloudIntegration_02.png'
import MarineAutomationScene1 from '../assets/MarineAutomationScene_01.png'
import MarineAutomationScene2 from '../assets/MarineAutomationScene_02.png'
import OilGasRigAutomation1 from '../assets/OilGasRigAutomation_01.png'
import OilGasRigAutomation2 from '../assets/OilGasRigAutomation_02.png'
import PharmaAutomationFacility1 from '../assets/PharmaAutomationFacility_01.png'
import PharmaAutomationFacility2 from '../assets/PharmaAutomationFacility_02.png'
import VFDRetrofitting1 from '../assets/VFDRetrofitting_01.png'
import VFDRetrofitting2 from '../assets/VFDRetrofitting_02.png'

const services = [
  {
    id: 'marine',
    title: 'Marine Automation',
    icon: Anchor,
    summary:
      'Turnkey automation systems for marine vessels including engine monitoring and energy optimization.',
    tech: ['PLC', 'SCADA', 'AMS', 'IoT'],
    color: theme.blue,
    images: [MarineAutomationScene1, MarineAutomationScene2],
  },
  {
    id: 'oilgas',
    title: 'Oil & Gas Automation',
    icon: Droplets,
    summary:
      'Skid control systems, drilling rig automation, and safety shutdown systems.',
    tech: ['SIS', 'MCC', 'PLC', 'Remote'],
    color: theme.teal,
    images: [OilGasRigAutomation1, OilGasRigAutomation2],
  },
  {
    id: 'pharma',
    title: 'Pharma Automation',
    icon: Building,
    summary:
      'Batch process automation, cleanroom HVAC monitoring, and cGMP compliance.',
    tech: ['HVAC', 'Validation', 'CFR Part 11', 'Batch'],
    color: theme.red,
    images: [PharmaAutomationFacility1, PharmaAutomationFacility2],
  },
  {
    id: 'panels',
    title: 'Panel Manufacturing',
    icon: Cpu,
    summary:
      'High-quality MCC, PCC, APFC, VFD panels with explosion-proof options.',
    tech: ['MCC', 'PCC', 'APFC', 'Explosion-proof'],
    color: theme.purple,
    images: [
      IndustrialPanelManufacturingFloor1,
      IndustrialPanelManufacturingFloor2,
    ],
  },
  {
    id: 'vfd',
    title: 'VFD Retrofitting',
    icon: Settings,
    summary:
      'Energy-efficient motor control upgrades with up to 40% energy savings.',
    tech: ['Energy Savings', 'PID', 'Harmonic Filters', 'Remote'],
    color: theme.yellow,
    images: [VFDRetrofitting1, VFDRetrofitting2],
  },
  {
    id: 'iot',
    title: 'IoT & Cloud Integration',
    icon: Cloud,
    summary:
      'Smart connected systems with real-time dashboards and cloud analytics.',
    tech: ['MQTT', 'OPC-UA', 'Modbus', 'AWS/Azure'],
    color: theme.teal,
    images: [IoTCloudIntegration1, IoTCloudIntegration2],
  },
]

export default services
