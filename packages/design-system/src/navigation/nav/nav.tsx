import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Container } from '../../layout/container';
import { cssColorShade } from '../../theme';
import styles from './nav.module.scss';

type NavProps = {
    colorScheme: 'primary' | 'secondary' | 'tertiary';
    logo: ReactNode; // Main logo element
    links: ReactNode[]; // All links inc dropdown links
};

export const Nav: React.FC<NavProps> = ({ colorScheme, logo, links }) => {
    const [expandedNav, setExpandedNav] = useState(false);

    useEffect(() => {
        if (expandedNav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [expandedNav]);

    return (
        <>
            <Container>
                <nav className={styles.nav}>
                    <ul className={styles.nav__list}>
                        <li className={styles.logo}>{logo}</li>
                        <li className={styles.links}>
                            <ul className={styles.links__list}>
                                {links.map((link, index) => {
                                    return <li key={index}>{link}</li>;
                                })}
                            </ul>
                        </li>
                        <li className={styles.hamburger__wrapper}>
                            <button
                                className={styles.hamburger}
                                onClick={() => setExpandedNav((prev) => !prev)}
                                aira-label="expand navigation menu"
                                value="nav menu"
                            >
                                <FaBars />
                            </button>
                        </li>
                    </ul>
                </nav>
            </Container>
            <AnimatePresence>
                {expandedNav && (
                    <ul
                        id="expanded-nav"
                        onClick={() => setExpandedNav((prev) => !prev)}
                    >
                        <motion.li
                            onClick={(e) => e.stopPropagation()}
                            className={styles.expandedLinks}
                            style={{
                                background: cssColorShade(colorScheme, 200),
                            }}
                            initial={{
                                x: 500,
                            }}
                            animate={{
                                x: 0,
                            }}
                            transition={{
                                type: 'spring',
                                bounce: 0.1,
                            }}
                            exit={{
                                x: 500,
                            }}
                        >
                            <ul className={styles.expandedLinks__list}>
                                {links.map((link, index) => {
                                    return <li key={index}>{link}</li>;
                                })}
                            </ul>
                        </motion.li>
                    </ul>
                )}
            </AnimatePresence>
        </>
    );
};
