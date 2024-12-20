import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-gray-800 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h5 className="font-bold">О проекте</h5>
            <ul>
              <li>
                <Link href="/about">Планировки</Link>
              </li>
              <li>
                <Link href="/developer">Застройщик</Link>
              </li>
              <li>
                <Link href="/contact">Контакты</Link>
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h5 className="font-bold">Контакты</h5>
            <p>+7 (928) 210-00-00</p>
            <p>Каспийск, проспект Акулиничева, 21</p>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p>© 2024 Jumeira House.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
