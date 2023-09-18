import { Label, LabelProps } from '../../typography';
import { useField } from '../field-context';

/**
 * Displays field error
 */
export const FieldError: React.FC<LabelProps> = ({ ...rest }) => {
    const { id, name, error } = useField();

    // Only render if error
    if (!error || typeof error !== 'string') return null;

    return (
        <Label color="color-text-error" {...rest} variant="sm" id={`${id}-error`}>
            {error}
        </Label>
    );
};
