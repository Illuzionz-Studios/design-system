import styles from './page-wrapper.module.scss';

export const PageWrapper: React.FC = ({ children }) => {
    return <div className={styles.pageWrapper}>{children}</div>;
};
