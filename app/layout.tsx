// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Strings Technologies",
//   description: "Top Leading Software Development Company",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
//       className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
//     >
//       // Inside your layout.tsx or a Head component
//       <head>
//         <link
//           rel="stylesheet"
//           type='text/css'
//           href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
//         />
//       </head>

//       <body className="flex min-h-full flex-col bg-[#0A1116]">
//         <Header />

//         {/* 
//       flex-grow ensures the main content pushes the footer to the bottom 
//       on pages with very little content.
//     */}
//         <main className="flex-grow ">
//           {children}
//         </main>

//         <Footer />
//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Strings Technologies",
  description: "Top Leading Software Development Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          type='text/css'
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>

      <body className="flex min-h-full flex-col bg-[#0A1116]">
        <Header />

        {/* flex-grow ensures the main content pushes the footer to the bottom 
          on pages with very little content.
        */}
        <main className="flex-grow mt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}