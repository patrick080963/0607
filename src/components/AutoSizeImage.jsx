import Image from "next/image";
import { useState, useEffect } from "react";

const AutoSizeImage = ({ src, alt }) => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      setSize({ width: img.width, height: img.height });
    };
  }, [src]);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="contain"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default AutoSizeImage;
