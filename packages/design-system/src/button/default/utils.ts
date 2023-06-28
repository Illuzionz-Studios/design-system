export type ButtonVariants = 'primary' | 'secondary' | 'tertiary';

export const getHoverStyle = (variant: ButtonVariants) => {
    switch (variant) {
        case 'primary': {
            return `
                background-color: var(--color-button-primary-hover);
            `;
        }
        case 'secondary': {
            return `
                background-color: var(--color-button-secondary-hover);
            `;
        }
        case 'tertiary': {
            return `
                background-color: var(--color-button-tertiary-hover);
            `;
        }
    }
};

export const getVariantStyle = (variant: ButtonVariants) => {
    switch (variant) {
        case 'primary': {
            return `
                background-color: var(--color-button-primary);
                color: var(--color-button-primary-text);
            `;
        }
        case 'secondary': {
            return `
                background-color: var(--color-button-secondary);
                color: var(--color-button-secondary-text);
            `;
        }
        case 'tertiary': {
            return `
                background-color: transparent;
                color: var(--color-button-tertiary-text);
                border: 1px solid var(--color-button-tertiary-border);
            `;
        }
    }
};
