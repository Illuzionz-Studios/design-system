import { DismissableLayer } from '../dismissable-layer';
import { ModalContext } from '../context/modal-context';
import styles from './modal-layout.module.scss';
import { Portal } from '../../layout/portal';

type ModalLayoutProps = {
    onClose: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

export const ModalLayout: React.FC<ModalLayoutProps> = ({
    children,
    onClose,
    ...rest
}) => {
    return (
        <Portal wrapperId="modal">
            <ModalContext.Provider value={{ onClose }}>
                <div className={styles.modalWrapper} onClick={onClose}>
                    <DismissableLayer onEscapeKeyDown={onClose}>
                        <div
                            className={styles.modalContent}
                            role="dialog"
                            onClick={(e) => e.stopPropagation()}
                            {...rest}
                        >
                            {children}
                        </div>
                    </DismissableLayer>
                </div>
            </ModalContext.Provider>
        </Portal>
    );
};
