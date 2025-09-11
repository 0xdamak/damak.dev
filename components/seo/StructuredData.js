import Head from "next/head";

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Damilola Akinlade",
    jobTitle: "Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and modern web technologies",
    url: "https://damak.dev",
    sameAs: [
      "https://github.com/0xdamak",
      "https://linkedin.com/in/0xdamak",
      "https://twitter.com/0xdamak",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Frontend Development",
      "Web Development",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </Head>
  );
};

export default StructuredData;
