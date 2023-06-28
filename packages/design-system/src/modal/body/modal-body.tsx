import { PropsWithChildren } from 'react';
import { Box } from '../../layout/box';
import styles from './modal-body.module.scss';

export const ModalBody: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Box className={styles.modalBody} padding={7} background="color-modal-body-bg" maxHeight="60vh">
            {children}
        </Box>
    );
};
