'use client';

import { Footer } from './_components/footer';
import { Header } from './_components/header';

const MarketingLayout = ({ children }: { children: React.ReactNode }) => (
  <main className='relative flex min-h-[100dvh] flex-col'>
    <Header />
    <div className='container mx-auto w-full flex-1 px-8'>{children}</div>
    <Footer />
  </main>
);

export default MarketingLayout;
