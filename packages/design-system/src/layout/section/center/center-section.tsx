import { PropsWithChildren } from 'react';
import { Flex } from '../../flex';

export const CenterSection: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Flex position="relative" height="100%" width="100%">
            <Flex width="100%" justifyContent="center" direction="column" alignItems="center" textAlign="center">
                {children}
            </Flex>
        </Flex>
    );
};
