import { Box, BoxProps } from '../../layout/box';
import styles from './modal-body.module.scss';

export const ModalBody: React.FC<BoxProps> = ({ children, ...rest }) => {
    return (
        <Box className={styles.modalBody} padding={7} background="color-modal-body-bg" maxHeight="60vh" {...rest}>
            {children}
        </Box>
    );
};
