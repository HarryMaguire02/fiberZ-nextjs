// Root-level not-found — used by Next.js for any URL that doesn't match a
// route pattern at all (e.g. /blog/some-unknown-slug, since there's no
// [slug] page yet). Unlike app/[locale]/not-found.tsx (which only fires for
// an explicit notFound() call from within an already-matched [locale]
// segment), this one never enters app/[locale]/layout.tsx, so it needs its
// own <html>/<body> — app/layout.tsx is an intentional passthrough.
export default function RootNotFound() {
  return (
    <html lang="sr">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '24px',
          fontFamily: "'Montserrat', 'Helvetica Neue', sans-serif",
          color: '#3D3129',
          background: '#F6F2EA',
        }}
      >
        <h1 style={{ fontSize: '28px', fontWeight: 700, color: '#502C1E', marginBottom: '12px' }}>
          Stranica nije pronađena
        </h1>
        <p style={{ fontSize: '15px', lineHeight: 1.6, maxWidth: '420px', marginBottom: '24px' }}>
          Nažalost, nismo pronašli stranicu koju tražite. Možda je premeštena ili više ne postoji.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#fff',
            background: '#D4AC77',
            borderRadius: '9999px',
            padding: '12px 32px',
            textDecoration: 'none',
          }}
        >
          Nazad na početnu
        </a>
      </body>
    </html>
  );
}
