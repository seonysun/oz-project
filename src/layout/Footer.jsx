/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import {
  LogoWhite,
  Twitter,
  FaceBook,
  Tiktok,
  Instagram,
} from '../assets/icons/index';

function FooterList({ title, items, divClass }) {
  return (
    <div className={`${divClass}`}>
      <h5 className="mb-4 text-lg font-medium text-white">{title}</h5>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  const socialIcons = [
    { src: Twitter, alt: 'Twitter' },
    { src: FaceBook, alt: 'Facebook' },
    { src: Tiktok, alt: 'TikTok' },
    { src: Instagram, alt: 'Instagram' },
  ];

  return (
    <footer className="flex h-[744px] flex-col items-center gap-10 bg-[#181313] px-[10vw] py-12 text-white md:h-[464px] md:items-start md:gap-6 md:px-[80px] md:py-[104px] xl:px-[160px]">
      <section className="flex w-full flex-col items-center justify-between gap-8 text-center text-[13px] font-light text-[#cfcfcf] md:h-[273px] md:flex-row md:items-start md:text-left">
        <div className="flex max-w-[384px] flex-col items-center gap-4">
          <img src={LogoWhite} alt="logo" />
          <p>
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>
        <FooterList
          title="Services"
          items={[
            'Bonus program',
            'Gift cards',
            'Credit and payment',
            'Service contracts',
            'Non-cash account',
            'payment',
          ]}
          divClass="min-w-[130px]"
        />
        <FooterList
          title="Assistance to the buyer"
          items={[
            'Find an order',
            'Terms of delivery',
            'Exchange and return of goods',
            'Guarantee',
            'Frequently asked questions',
            'Terms of use of the site',
          ]}
          divClass="min-w-[210px]"
        />
      </section>
      <nav className="flex w-[173px] justify-between">
        {socialIcons.map((icon) => (
          <img key={icon.alt} src={icon.src} alt={icon.alt} />
        ))}
      </nav>
    </footer>
  );
}

export default Footer;
