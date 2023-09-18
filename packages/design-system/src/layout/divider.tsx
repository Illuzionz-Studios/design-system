import { Box, BoxProps } from './box';

type DividerProps = BoxProps & {
    color: string;
};

export const Divider: React.FC<DividerProps> = ({ color = 'neutral150', ...rest }) => {
    return (
        <Box height="1px" width="100%" background={color} radius="lg" {...rest}>
            {' '}
        </Box>
    );
};
