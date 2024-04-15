import {
    Html,
    Head,
    Font,
    Preview,
    Heading,
    Row,
    Section,
    Text,
    Button
} from '@react-email/components';

interface VarificationEmailProps{
    username : string;
    otp: string;
}

export default function VarificationEmail({username, otp} : VarificationEmailProps){
    return(
        <Html lang='en' dir='ltr'>
            <Head>
                <title>Varification Code</title>
                <Font fontFamily='Roboto'
                    fallbackFontFamily='Verdana'
                    webFont={{
                        url:'https://fonts.gstatic.com/s/robot/v27/KF0mCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
                        format:'woff2'
                    }}
                    fontStyle='normal'
                    fontWeight={400}
                />
            </Head>
            <Preview>Here&apos;s your varification code: {otp}</Preview>
            <Section>
                <Row>
                    <Heading as='h2'>Hello {username},</Heading>
                </Row>
                <Row>
                    <Text>
                        Thank you for registering. Please use the following varification
                        code to complete your registration:
                    </Text>
                </Row>
                <Row>
                    <Text>{otp}</Text>
                </Row>
                <Row>
                    <Text>
                        If you did not request this code,
                        please ignore this email.
                    </Text>
                </Row>
            </Section>
        </Html>
    );
}
