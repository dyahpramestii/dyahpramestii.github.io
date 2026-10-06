import { PenTool, Workflow, Database, Code2, BarChart3 } from 'lucide-react'

const icons = { PenTool, Workflow, Database, Code2, BarChart3 }

export default function Icon({ name, size = 20, className = '' }) {
  const Cmp = icons[name]
  return Cmp ? <Cmp size={size} className={className} aria-hidden="true" /> : null
}
