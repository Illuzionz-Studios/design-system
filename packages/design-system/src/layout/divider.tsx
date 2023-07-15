import { Box } from './box';

type DividerProps = {
    color: string;
};

export const Divider: React.FC<DividerProps> = ({ color = 'neutral150' }) => {
    return (
        <Box height="1px" width="100%" background={color} radius="lg">
            {' '}
        </Box>
    );
};
