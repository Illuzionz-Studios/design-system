import { Flex, FlexProps } from '../../flex';

export const CenterSection: React.FC<FlexProps> = ({ children, ...rest }) => {
    return (
        <Flex position="relative" height="100%" width="100%">
            <Flex
                width="100%"
                justifyContent="center"
                direction="column"
                alignItems="center"
                textAlign="center"
                {...rest}
            >
                {children}
            </Flex>
        </Flex>
    );
};
