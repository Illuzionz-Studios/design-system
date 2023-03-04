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

export default function Home() {
    const [testFieldValue, setTestFieldValue] = useState('');
    const [checked, setChecked] = useState(false);

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
            <main>
                <Container>
                    <Flex direction="column" gap={7} paddingTop={6}>
                        <Flex direction="column" gap={4}>
                            <Heading element="h2" variant="heading-2">
                                Badges
                            </Heading>
                            <Flex direction="row" gap={4} alignItems="center">
                                <Badge variant="default">Default</Badge>
                                <Badge variant="active">Active</Badge>
                            </Flex>
                        </Flex>

                        <Flex direction="column" gap={4}>
                            <Heading element="h2" variant="heading-2">
                                Buttons
                            </Heading>
                            <Flex direction="row" gap={4} alignItems="center">
                                <Button variant="primary" colorScheme="primary">
                                    Primary Button
                                </Button>
                                <Button
                                    variant="secondary"
                                    colorScheme="primary"
                                >
                                    Secondary Button
                                </Button>
                                <Button
                                    variant="tertiary"
                                    colorScheme="primary"
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
