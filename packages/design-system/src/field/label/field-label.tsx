import { Label } from '../../typography';

/**
 * Label describing a field
 */
export const FieldLabel: React.FC<
    React.LabelHTMLAttributes<HTMLLabelElement>
> = ({ children, ...rest }) => {
    return (
        <Label variant="md">
            <label {...rest}>{children}</label>
        </Label>
    );
};
