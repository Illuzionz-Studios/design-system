import { FieldContext } from '../field-context';
import { PropsWithChildren } from 'react';
import { Box, BoxProps } from '../../layout';
import React from 'react';

type FieldProps = {
    id: string;
    name: string;
    error?: string;
} & BoxProps;

/**
 * Expose all variables to a field
 */
export const Field: React.FC<PropsWithChildren<FieldProps>> = React.forwardRef(
    ({ children, id, name, error, ...rest }, ref) => {
        return (
            <Box ref={ref} textAlign="left" {...rest}>
                <FieldContext.Provider value={{ id, name, error }}>{children}</FieldContext.Provider>
            </Box>
        );
    }
);
