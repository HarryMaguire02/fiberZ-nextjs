import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Link,
  Hr,
  Preview,
} from '@react-email/components';

interface WelcomeEmailProps {
  unsubscribeUrl: string;
}

export default function WelcomeEmail({ unsubscribeUrl }: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to the FiberZ newsletter — tips on fiber, digestion &amp; healthy living.</Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={logoText}>FiberZ</Text>
          </Section>

          {/* Content */}
          <Section style={content}>
            <Text style={heading}>Welcome to FiberZ!</Text>
            <Text style={paragraph}>
              Thank you for subscribing to our newsletter. We&apos;re glad to have you on board.
            </Text>
            <Text style={paragraph}>
              Here&apos;s what you can expect:
            </Text>
            <Text style={listItem}>
              &bull; Expert tips on dietary fiber and digestive health
            </Text>
            <Text style={listItem}>
              &bull; The latest research on gut health and nutrition
            </Text>
            <Text style={listItem}>
              &bull; Exclusive recipes and healthy living advice
            </Text>
            <Text style={listItem}>
              &bull; Product updates and special offers
            </Text>
            <Text style={paragraph}>
              Stay tuned — our next newsletter is on its way!
            </Text>
          </Section>

          {/* Footer */}
          <Hr style={hr} />
          <Section style={footer}>
            <Text style={footerText}>
              &copy; {new Date().getFullYear()} FiberZ. All rights reserved.
            </Text>
            <Text style={footerText}>
              <Link href={unsubscribeUrl} style={unsubscribeLink}>
                Unsubscribe
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const body = {
  backgroundColor: '#F6F2EA',
  fontFamily: '"Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif',
  margin: '0' as const,
  padding: '0' as const,
};

const container = {
  maxWidth: '560px',
  margin: '0 auto',
  padding: '40px 20px',
};

const header = {
  textAlign: 'center' as const,
  paddingBottom: '24px',
};

const logoText = {
  fontSize: '28px',
  fontWeight: '700' as const,
  color: '#502C1E',
  letterSpacing: '2px',
  margin: '0' as const,
};

const content = {
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  padding: '32px',
};

const heading = {
  fontSize: '24px',
  fontWeight: '700' as const,
  color: '#502C1E',
  marginBottom: '16px',
  marginTop: '0' as const,
};

const paragraph = {
  fontSize: '15px',
  lineHeight: '1.6',
  color: '#3D3129',
  marginBottom: '12px',
};

const listItem = {
  fontSize: '15px',
  lineHeight: '1.6',
  color: '#3D3129',
  marginBottom: '4px',
  paddingLeft: '8px',
};

const hr = {
  borderColor: '#D4AC77',
  borderWidth: '1px',
  marginTop: '32px',
  marginBottom: '16px',
};

const footer = {
  textAlign: 'center' as const,
};

const footerText = {
  fontSize: '12px',
  color: '#A07546',
  marginBottom: '4px',
};

const unsubscribeLink = {
  color: '#A07546',
  textDecoration: 'underline',
};
