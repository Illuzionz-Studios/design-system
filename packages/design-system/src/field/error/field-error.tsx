import { Label } from '../../typography';
import { useField } from '../field-context';

/**
 * Displays field error
 */
export const FieldError: React.FC = ({ ...rest }) => {
    const { id, name, error } = useField();

    // Only render if error
    if (!error || typeof error !== 'string') return null;

    return (
        <Label variant="sm" color="color-text-error" id={`${id}-error`} {...rest}>
            {error}
        </Label>
    );
};
