import { ReactNode } from 'react';
import { Box } from '../../layout/box';
import { Flex } from '../../layout/flex';
import styles from './modal-footer.module.scss';

type ModalFooterType = {
    startActions: ReactNode;
    endActions: ReactNode;
};

export const ModalFooter: React.FC<ModalFooterType> = ({
    startActions,
    endActions,
}) => {
    return (
        <Box
            className={styles.modalFooter}
            paddingTop={4}
            paddingBottom={4}
            paddingLeft={5}
            paddingRight={5}
            background="gray100"
        >
            <Flex
                direction="row"
                alignItems="center"
                justifyContent="space-between"
            >
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
