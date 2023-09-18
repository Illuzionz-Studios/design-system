import { Label, LabelProps } from '../../typography';

/**
 * Label describing a field
 */
export const FieldLabel: React.FC<LabelProps> = ({ children, ...rest }) => {
    return (
        <Label as="label" {...rest} variant="md">
            {children}
        </Label>
    );
};
