import { forwardRef, type ComponentPropsWithoutRef } from 'react'

type GlassVariant = 'default' | 'subtle' | 'strong'

interface GlassCardProps extends ComponentPropsWithoutRef<'div'> {
  variant?: GlassVariant
  as?: 'div' | 'section' | 'article' | 'aside'
}

const variantStyles: Record<GlassVariant, string> = {
  default: 'glass-card',
  subtle: 'glass-card-subtle',
  strong: 'glass-card-strong',
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ variant = 'default', as: Component = 'div', className = '', children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={`${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

GlassCard.displayName = 'GlassCard'
