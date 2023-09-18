import { Box, BoxProps } from '../../box';

export const PageWrapper: React.FC<BoxProps> = ({ children, ...rest }) => {
    return (
        <Box minHeight="var(--vh)" {...rest}>
            {children}
        </Box>
    );
};
