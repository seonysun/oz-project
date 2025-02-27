import { LogoWhite } from '../../assets/icons';
import { FOOTER_MENU, SOCIAL_ICONS } from '../../constants/uiData';

function FooterMenu({ menu, size }) {
  return (
    <div className={`${size}`}>
      <h5 className="mb-4 text-lg font-medium text-white">{menu.title}</h5>
      <ul className="space-y-2">
        {menu.items.map((item) => (
          <li key={item.id}>{item.name}</li>
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
        {FOOTER_MENU.map((menu) => (
          <FooterMenu key={menu.title} menu={menu} size="min-w-[130px]" />
        ))}
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
