import { QrCode } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2 text-blue-600 font-bold text-xl">
      <QrCode className="w-6 h-6" />
      <span>QRTools</span>
    </div>
  );
};

export default Logo;