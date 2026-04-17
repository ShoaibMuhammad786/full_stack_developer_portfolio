import HomePage from "@/components/home/HomePage";

export const metadata = {
  title:
    "Frontend Web Developer (React, Next.js, Tailwind CSS) | Shoaib Muhammad",
  description:
    "Shoaib Muhammad is a Frontend Web Developer specializing in React, Next.js, and Tailwind CSS. I build fast, scalable, and SEO-friendly web applications with a focus on performance, clean architecture, and user experience.",
};

export default function Home() {
  return <HomePage />;
}

// export const metadata = {
//   // 🔹 Basic SEO
//   title: "Full Stack Web Developer (MERN, React, Next.js) | Shoaib Muhammad",
//   description:
//     "Shoaib Muhammad is a Full Stack Web Developer specializing in MERN stack, React, and Next.js. I build fast, scalable, and SEO-friendly web applications with a strong focus on performance and user experience.",

//   // 🔹 Canonical URL
//   alternates: {
//     canonical: "https://yourdomain.com",
//   },

//   // 🔹 Open Graph (LinkedIn, Facebook, WhatsApp)
//   openGraph: {
//     title: "Full Stack Web Developer | Shoaib Muhammad",
//     description:
//       "Full Stack Web Developer specializing in MERN stack, React, and Next.js. Building fast, scalable, and SEO-friendly web applications.",
//     url: "https://yourdomain.com",
//     siteName: "Shoaib Muhammad",
//     images: [
//       {
//         url: "https://yourdomain.com/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "Shoaib Muhammad – Full Stack Web Developer",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },

//   // 🔹 Twitter Card
//   twitter: {
//     card: "summary_large_image",
//     title: "Full Stack Web Developer | Shoaib Muhammad",
//     description:
//       "Building fast, scalable, and SEO-friendly web applications using MERN stack, React, and Next.js.",
//     images: ["https://yourdomain.com/og-image.png"],
//     creator: "@yourtwitterhandle", // optional
//   },

//   // 🔹 Robots (Indexing Control)
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },

//   // 🔹 App Metadata
//   metadataBase: new URL("https://yourdomain.com"),
// };
