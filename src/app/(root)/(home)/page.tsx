import { ScrollButtonBottom } from '@/components/scroll-button-bottom';
import { ScrollButtonTop } from '@/components/scroll-button-top';
import { About } from '@/components/section/about';
import { Blogs } from '@/components/section/blogs';
import { Contact } from '@/components/section/contact';
import { Hero } from '@/components/section/hero';
import { Projects } from '@/components/section/projects';
import { SocialMedia } from '@/components/social-media';

export default function Home() {
  return (
    <section>
      <Hero />
      <SocialMedia />
      <ScrollButtonTop />
      <ScrollButtonBottom />
      <About />
      <Projects />
      <Blogs />
      <Contact />
    </section>
  );
}
