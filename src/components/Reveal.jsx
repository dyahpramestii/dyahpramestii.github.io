import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, className = '', delay = 0 }) {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const element = ref.current

        if (!element) return

        const observer = new IntersectionObserver(
        ([entry]) => {
            setVisible(entry.isIntersecting)
        },
        {
            threshold: 0.15,
            rootMargin: '0px 0px -60px 0px',
        }
        )

        observer.observe(element)

        return () => observer.disconnect()
    }, [])

    return (
        <div
        ref={ref}
        className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}
        style={{ '--reveal-delay': `${delay}ms` }}
        >
        {children}
        </div>
    )
    }