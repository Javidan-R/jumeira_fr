import Link from "next/link";

interface PropertyInfoProps {
  address: string;
  apartmentsCount: number;
  apartmentArea: string;
  presentationLink: string;
  floorPlansLink: string;
}

const PropertyInfo: React.FC<PropertyInfoProps> = ({
  address,
  apartmentsCount,
  apartmentArea,
  presentationLink,
  floorPlansLink,
}) => {
  return (
    <section id="propery_info" className="p-4  rounded">
      <h2 className="mb-4 text-xl font-bold">Адрес</h2>
      <p className="mb-4">{address}</p>

      <h2 className="mb-4 text-xl font-bold">Количество квартир</h2>
      <p className="mb-4">{apartmentsCount} квартир</p>

      <h2 className="mb-4 text-xl font-bold">Площадь квартир</h2>
      <p className="mb-4">{apartmentArea}</p>

      <div className="flex space-x-4">
        <Link href={presentationLink} passHref>
          <span className="p-2 text-white bg-blue-500 rounded cursor-pointer">
            СКАЧАТЬ ПРЕЗЕНТАЦИЮ
          </span>
        </Link>
        <Link href={floorPlansLink} passHref>
          <span className="p-2 text-white bg-blue-500 rounded cursor-pointer">
            СМОТРЕТЬ ПЛАНИРОВКИ
          </span>
        </Link>
      </div>
    </section>
  );
};

export default PropertyInfo;
