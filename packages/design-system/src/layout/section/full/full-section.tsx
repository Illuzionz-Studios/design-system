import { Flex, FlexProps } from '../../flex';

export const FullSection: React.FC<FlexProps> = ({ children, ...rest }) => {
    return (
        <Flex position="relative" height="var(--vh)" width="100vw" direction="column" margin="auto auto" {...rest}>
            {children}
        </Flex>
    );
};
