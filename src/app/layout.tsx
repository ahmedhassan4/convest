"use client";
import NextProgress from "@/componnets/next-progress";
import GlobalDrawer from "@/shared/drawer-views/container";
import GlobalModal from "@/shared/modal-views/container";
import { Slide, ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <html
      lang="en"
      dir="ltr"
      // required this one for next-themes, remove it if you are not using next-theme
      suppressHydrationWarning
    >
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
                
      </Head>
      <body
        // to prevent any warning that is caused by third party extensions like Grammarly
        suppressHydrationWarning
      >
        <ToastContainer position="bottom-right" transition={Slide} />
        <QueryClientProvider client={queryClient}>
          <NextProgress />
          {children}
          <GlobalDrawer />
          <GlobalModal />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
}
