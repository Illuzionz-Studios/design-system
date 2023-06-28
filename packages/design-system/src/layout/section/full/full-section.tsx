import React, { PropsWithChildren } from 'react';
import { Flex } from '../../flex';

export const FullSection: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Flex position="relative" height="var(--vh)" width="100vw" direction="column" margin="auto auto">
            {children}
        </Flex>
    );
};
