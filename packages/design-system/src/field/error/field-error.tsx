import React from 'react';
import { Label, LabelProps } from '../../typography';
import { useField } from '../field-context';

/**
 * Displays field error
 */
export const FieldError: React.FC = React.forwardRef<HTMLParagraphElement, {}>((_, ref) => {
    const { id, name, error } = useField();

    // Only render if error
    if (!error || typeof error !== 'string') return null;

    return (
        <Label ref={ref} variant="sm" color="color-text-error" id={`${id}-error`}>
            {error}
        </Label>
    );
});
