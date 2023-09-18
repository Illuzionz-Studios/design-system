import { ReactNode } from 'react';
import { Box, BoxProps } from '../../layout/box';
import { Flex } from '../../layout/flex';
import styles from './modal-footer.module.scss';

type ModalFooterProps = BoxProps & {
    startActions: ReactNode;
    endActions: ReactNode;
};

export const ModalFooter: React.FC<ModalFooterProps> = ({ startActions, endActions, ...rest }) => {
    return (
        <Box
            className={styles.modalFooter}
            paddingTop={4}
            paddingBottom={4}
            paddingLeft={5}
            paddingRight={5}
            background="color-modal-footer-border"
            {...rest}
        >
            <Flex direction="row" alignItems="center" justifyContent="space-between">
                <Flex direction="row" gap={1}>
                    {startActions}
                </Flex>
                <Flex direction="row" gap={2}>
                    {endActions}
                </Flex>
            </Flex>
        </Box>
    );
};
