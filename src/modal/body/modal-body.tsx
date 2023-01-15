import { Box } from '../../layout/box';
import styles from './modal-body.module.scss';

export const ModalBody: React.FC = ({ children }) => {
    return (
        <Box className={styles.modalBody} padding={7}>
            {children}
        </Box>
    );
};
