import {
    Box,
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalLayout,
    useTheme,
} from '@illuzionz-studios/design-system';
import {
    Badge,
    Button,
    CheckboxInput,
    Container,
    Flex,
    Heading,
    IconButton,
    TextAreaField,
    TextButton,
    TextField,
} from '@illuzionz-studios/design-system';
import Head from 'next/head';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

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
                <Button key={1} variant="primary">
                    Test
                </Button>,
            ]}
            endActions={[
                <Button key={1} variant="primary">
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

    const shades = ['string 1', 'string 2', 'string 3'];

    return (
        <>
            <Head>
                <title>Illuzionz Studios Design System</title>
                <meta
                    name="description"
                    content="The Docs for Illuzionz Studios Design System"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="icon"
                    href="https://cdn.illuzionzstudios.com/logo/Secondary%20Logo-no-bg.png"
                />
            </Head>
            {showModal && <TestModal onClose={() => setShowModal(false)} />}
            <main>
                <Container>
                    <Flex direction="column" gap={7} paddingTop={6}>
                        <Flex direction="column" gap={4}>
                            <Heading element="h2" variant="heading-2">
                                Badges
                            </Heading>
                            <Flex direction="row" gap={4} alignItems="center">
                                <Badge variant="secondary">Default</Badge>
                                <Badge variant="primary">Active</Badge>
                            </Flex>
                        </Flex>

                        <Flex direction="column" gap={4}>
                            <Heading element="h2" variant="heading-2">
                                Buttons
                            </Heading>
                            <Flex direction="row" gap={4} alignItems="center">
                                <Box
                                    inlineStyle={{
                                        background: 'blue',
                                    }}
                                >
                                    Test
                                </Box>
                                <Button
                                    variant="primary"
                                    colorScheme="primary"
                                    size="sm"
                                    onClick={() => toggleTheme()}
                                >
                                    Primary Button
                                </Button>
                                <Button
                                    variant="secondary"
                                    colorScheme="primary"
                                    onClick={() =>
                                        setShowModal((prev) => !prev)
                                    }
                                >
                                    Secondary Button
                                </Button>
                                <Button
                                    variant="tertiary"
                                    colorScheme="primary"
                                    size="lg"
                                >
                                    Tertiary Button
                                </Button>
                                <TextButton>Text Button</TextButton>
                                <IconButton icon={<FaTimes />} />
                            </Flex>
                        </Flex>

                        <Flex direction="column" gap={4}>
                            <Heading element="h2" variant="heading-2">
                                Inputs
                            </Heading>

                            <Flex direction="row" flex="1" justifyContent="">
                                {shades.map((colour, index) => {
                                    return (
                                        <Flex
                                            key={index}
                                            background="black"
                                            borderColor="white"
                                            color="white"
                                            inlineStyle={{
                                                flex: '1',
                                            }}
                                            paddingTop={4}
                                            paddingBottom={4}
                                            justifyContent="center"
                                            onClick={(e) => {
                                                navigator.clipboard.writeText(
                                                    colour
                                                );
                                            }}
                                        >
                                            {colour}
                                        </Flex>
                                    );
                                })}
                            </Flex>

                            <TextField
                                id="test-field"
                                name="test-field"
                                label="Test Field"
                                value={testFieldValue}
                                onChange={(e) =>
                                    setTestFieldValue(e.currentTarget.value)
                                }
                            />

                            <TextAreaField
                                id="test-field"
                                name="test-field"
                                label="Test Field"
                                value={testFieldValue}
                                onChange={(e) =>
                                    setTestFieldValue(e.currentTarget.value)
                                }
                            />

                            <CheckboxInput
                                checked={checked}
                                onChange={(e) => setChecked((prev) => !prev)}
                            />
                        </Flex>
                    </Flex>
                </Container>
            </main>
        </>
    );
}
