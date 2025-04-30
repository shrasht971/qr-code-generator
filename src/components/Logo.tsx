import { QrCode } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2 font-bold text-xl">
      <QrCode className="sm:w-6 sm:h-6 text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text" />
      <span className="text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text">
        QRTools
      </span>
    </div>
  );
};

export default Logo;
