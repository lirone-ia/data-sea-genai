import { useEffect, useState } from 'react';
import { removeBackground, loadImageFromUrl } from '@/utils/backgroundRemoval';
import logoImage from "@/assets/datasea-logo-waves.png";

const LogoWithBackgroundRemoval = () => {
  const [processedLogoUrl, setProcessedLogoUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const processLogo = async () => {
      try {
        console.log('Loading logo image...');
        const img = await loadImageFromUrl(logoImage);
        console.log('Removing background...');
        const processedBlob = await removeBackground(img);
        const url = URL.createObjectURL(processedBlob);
        setProcessedLogoUrl(url);
        setIsProcessing(false);
        console.log('Logo processing completed!');
      } catch (error) {
        console.error('Error processing logo:', error);
        // Fallback to original logo
        setProcessedLogoUrl(logoImage);
        setIsProcessing(false);
      }
    };

    processLogo();
  }, []);

  if (isProcessing) {
    return (
      <img 
        src={logoImage} 
        alt="DataSea - Enterprise AI Solutions" 
        className="h-16 sm:h-20 w-auto object-contain opacity-80"
      />
    );
  }

  return (
    <img 
      src={processedLogoUrl || logoImage} 
      alt="DataSea - Enterprise AI Solutions" 
      className="h-16 sm:h-20 w-auto object-contain"
    />
  );
};

export default LogoWithBackgroundRemoval;