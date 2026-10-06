const styles = {
  primary: 'bg-navy text-paper hover:bg-accent',
  outline: 'border border-navy/25 text-navy hover:border-navy hover:bg-navy hover:text-paper',
  light: 'border border-paper/30 text-paper hover:bg-paper hover:text-navy',
}

export default function Button({ href, variant = 'primary', icon: Icon, children, className = '', ...rest }) {
  const external = href?.startsWith('http')
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
      {Icon && <Icon size={16} aria-hidden="true" />}
    </a>
  )
}
