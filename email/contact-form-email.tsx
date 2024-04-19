import React from 'react';
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
};

export const ContactFormEmail = ({
    message,
    senderEmail,
}: ContactFormEmailProps) => {
    return (
        <Html>
            <Head/>
            <Preview>New message from koreana.restaurant website</Preview>
            <Tailwind>
                <Body className=
            </Tailwind>
        </Html>
    )
}