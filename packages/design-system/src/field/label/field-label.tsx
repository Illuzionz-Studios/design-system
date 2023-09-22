import React, { PropsWithChildren } from 'react';
import { Label } from '../../typography';

/**
 * Label describing a field
 */
export const FieldLabel: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = React.forwardRef<
    HTMLParagraphElement,
    PropsWithChildren
>(({ children, ...rest }, ref) => {
    return (
        <Label ref={ref} as="label" variant="md" {...rest}>
            {children}
        </Label>
    );
});
