import { Anchor, Building, Cloud, Cpu, Droplets, Settings } from 'lucide-react'
import theme from '../styles/theme'

const services = [
  {
    id: 'marine',
    title: 'Marine Automation',
    icon: Anchor,
    summary:
      'Turnkey automation systems for marine vessels including engine monitoring and energy optimization.',
    tech: ['PLC', 'SCADA', 'AMS', 'IoT'],
    color: theme.blue,
  },
  {
    id: 'oilgas',
    title: 'Oil & Gas Automation',
    icon: Droplets,
    summary:
      'Skid control systems, drilling rig automation, and safety shutdown systems.',
    tech: ['SIS', 'MCC', 'PLC', 'Remote'],
    color: theme.teal,
  },
  {
    id: 'pharma',
    title: 'Pharma Automation',
    icon: Building,
    summary:
      'Batch process automation, cleanroom HVAC monitoring, and cGMP compliance.',
    tech: ['HVAC', 'Validation', 'CFR Part 11', 'Batch'],
    color: theme.red,
  },
  {
    id: 'panels',
    title: 'Panel Manufacturing',
    icon: Cpu,
    summary:
      'High-quality MCC, PCC, APFC, VFD panels with explosion-proof options.',
    tech: ['MCC', 'PCC', 'APFC', 'Explosion-proof'],
    color: theme.purple,
  },
  {
    id: 'vfd',
    title: 'VFD Retrofitting',
    icon: Settings,
    summary:
      'Energy-efficient motor control upgrades with up to 40% energy savings.',
    tech: ['Energy Savings', 'PID', 'Harmonic Filters', 'Remote'],
    color: theme.yellow,
  },
  {
    id: 'iot',
    title: 'IoT & Cloud Integration',
    icon: Cloud,
    summary:
      'Smart connected systems with real-time dashboards and cloud analytics.',
    tech: ['MQTT', 'OPC-UA', 'Modbus', 'AWS/Azure'],
    color: theme.teal,
  },
]

export default services
