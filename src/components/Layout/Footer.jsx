/* eslint-disable react/no-array-index-key */
import {
  LogoWhite,
  Twitter,
  FaceBook,
  Tiktok,
  Instagram,
} from '../../assets/icons';

const SOCIAL_ICONS = [
  { src: Twitter, alt: 'Twitter' },
  { src: FaceBook, alt: 'Facebook' },
  { src: Tiktok, alt: 'TikTok' },
  { src: Instagram, alt: 'Instagram' },
];

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
  return (
    <footer className="flex h-[744px] flex-col items-center justify-between bg-[#181313] py-16 md:h-[464px] md:px-[15%] md:py-[104px]">
      <section className="flex w-full flex-col justify-between gap-8 text-center text-[13px] font-light text-[#cfcfcf] md:flex-row md:text-left">
        <div className="mx-auto flex max-w-[384px] flex-col gap-4 md:mx-0">
          <img
            src={LogoWhite}
            alt="logo"
            className="mx-auto h-8 w-24 md:mx-0"
          />
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
      <nav className="flex w-[173px] justify-between md:mr-auto">
        {SOCIAL_ICONS.map((icon) => (
          <img key={icon.alt} src={icon.src} alt={icon.alt} />
        ))}
      </nav>
    </footer>
  );
}

export default Footer;
