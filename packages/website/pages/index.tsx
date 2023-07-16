import {
    Box,
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalLayout,
    useTheme,
    Badge,
    Button,
    CheckboxInput,
    Container,
    Flex,
    Heading,
    IconButton,
    TextAreaField,
    Divider,
    TextButton,
    TextField,
} from '@illuzionz-studios/design-system';
import Head from 'next/head';
import { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

type TestModalType = {
    onClose: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

const TestModal: React.FC<TestModalType> = ({ onClose }) => (
    <ModalLayout onClose={onClose}>
        <ModalHeader>
            <Heading variant="heading-3" element="h3">
                Test
            </Heading>
        </ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter
            startActions={[
                <Button key={1} variant="primary" size="sm">
                    Test
                </Button>,
            ]}
            endActions={[
                <Button key={1} variant="primary" size="sm">
                    Test
                </Button>,
            ]}
        />
    </ModalLayout>
);
export default function Home() {
    const [testFieldValue, setTestFieldValue] = useState('');
    const [checked, setChecked] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Head>
                <title>Illuzionz Studios Design System</title>
                <meta name="description" content="The Docs for Illuzionz Studios Design System" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="https://cdn.illuzionzstudios.com/logo/Secondary%20Logo-no-bg.png" />
            </Head>
            {showModal && <TestModal onClose={() => setShowModal(false)} />}
            <main>
                <Container>
                    <Flex direction="column" gap={7} paddingTop={6}>
                        <Flex direction="column" gap={3}>
                            <Heading element="h2" variant="heading-2">
                                Badges
                            </Heading>
                            <Divider color="neutral100" />
                            <Flex direction="row" gap={4} alignItems="center">
                                <Badge variant="default">Default</Badge>
                                <Badge variant="primary">Active</Badge>
                            </Flex>
                        </Flex>

                        <Flex direction="column" gap={3}>
                            <Heading element="h2" variant="heading-2">
                                Buttons
                            </Heading>
                            <Divider color="neutral100" />
                            <Flex direction="row" gap={4} alignItems="center">
                                <Button variant="primary" size="sm" onClick={() => toggleTheme()}>
                                    Primary Button
                                </Button>
                                <Button variant="secondary" onClick={() => setShowModal((prev) => !prev)}>
                                    Secondary Button
                                </Button>
                                <Button variant="tertiary" size="lg">
                                    Tertiary Button
                                </Button>
                                <TextButton>Text Button</TextButton>
                                <IconButton icon={<FaTimes />} />
                            </Flex>
                        </Flex>

                        <Flex direction="column" gap={3}>
                            <Heading element="h2" variant="heading-2">
                                Inputs
                            </Heading>
                            <Divider color="neutral100" />
                            <TextField
                                id="test-field"
                                name="test-field"
                                label="Test Field"
                                value={testFieldValue}
                                startIcon={<FaSearch color="var(--color-bg-primary)" />}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    setTestFieldValue(e.currentTarget.value)
                                }
                            />

                            <TextAreaField
                                id="test-field"
                                name="test-field"
                                label="Test Field"
                                value={testFieldValue}
                                error="test"
                                onChange={(e) => setTestFieldValue(e.currentTarget.value)}
                            />

                            <CheckboxInput
                                checkedBg="color-bg-secondary"
                                id="test"
                                name="test"
                                label="Include # when copying"
                                checked={checked}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChecked((prev) => !prev)}
                            />
                        </Flex>
                    </Flex>
                </Container>
            </main>
        </>
    );
}
