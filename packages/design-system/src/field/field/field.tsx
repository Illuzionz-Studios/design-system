import { FieldContext } from '../field-context';
import { PropsWithChildren } from 'react';
import { Box, BoxProps } from '../../layout';

type FieldProps = {
    id: string;
    name: string;
    error?: string;
} & BoxProps;

/**
 * Expose all variables to a field
 */
export const Field: React.FC<PropsWithChildren<FieldProps>> = ({ children, id, name, error, ...rest }) => {
    return (
        <Box textAlign="left" {...rest}>
            <FieldContext.Provider value={{ id, name, error }}>{children}</FieldContext.Provider>
        </Box>
    );
};
