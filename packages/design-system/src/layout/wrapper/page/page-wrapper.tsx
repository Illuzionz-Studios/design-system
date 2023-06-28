import { PropsWithChildren } from 'react';
import { Box } from '../../box';

export const PageWrapper: React.FC<PropsWithChildren> = ({ children }) => {
    return <Box minHeight="var(--vh)">{children}</Box>;
};
