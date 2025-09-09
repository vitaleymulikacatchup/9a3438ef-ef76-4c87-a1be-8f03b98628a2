"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterBase from '@/components/footer/FooterBase';

const links = [{ name: 'Hero', id: 'hero' }, { name: 'About', id: 'about' }, { name: 'How to Buy', id: 'how-to-buy' }, { name: 'Tokenomics', id: 'tokenomics' }, { name: 'Footer', id: 'footer' }];

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <NavbarStyleApple navItems={links} brandName={'MemeWave'} />

      <div id="hero" className="scroll-mt-24 bg-[radial-gradient(56%_44%_at_50%_25%,rgba(255,77,109,1)_0%,rgba(255,255,255,0)_100%)]">
        <FrameHero title="Welcome to MemeWave" description="A fun, vibrant meme paradise!" primaryButtonText="Join Now" secondaryButtonText="Explore More" />
      </div>

      <div id="about" className="scroll-mt-24">
        <CtaAbout title="About MemeWave" descriptions={["MemeWave is a platform designed for lovers of memes.", "Join us for a fun-filled meme experience!"]} />
      </div>

      <div id="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D variant="reveal" />
      </div>

      <div id="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics title="Tokenomics" description="Here’s how our tokens operate." cardItems={[{ id: 1, title: 'Total Supply', description: '1 million tokens' }, { id: 2, title: 'Liquidity', description: '500K tokens in liquidity' }, { id: 3, title: 'Burn Rate', description: '2% burn on every transaction' }]} />
      </div>

      <div id="footer" className="scroll-mt-24">
        <FooterBase logoSrc="/images/logo.svg" copyrightText="© 2023 MemeWave. All rights reserved." columns={[{ title: 'Links', items: [{ label: 'Home', onClick: () => {} }, { label: 'About', onClick: () => {} }] }, { title: 'Resources', items: [{ label: 'Blog', onClick: () => {} }, { label: 'Support', onClick: () => {} }] }, { title: 'Socials', items: [{ label: 'Twitter', onClick: () => {} }, { label: 'Discord', onClick: () => {} }] }]} onPrivacyClick={() => {}} />
      </div>
    </SiteThemeProvider>
  );
}
