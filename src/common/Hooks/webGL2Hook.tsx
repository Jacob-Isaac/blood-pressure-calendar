import React, { useEffect, useState } from 'react';

const WebGL2Checker: React.FC = () => {
  const [isWebGL2Supported, setIsWebGL2Supported] = useState(false);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('experimental-webgl2');

    setIsWebGL2Supported(!!gl);
  }, []);

  return (
    <div>
      {!isWebGL2Supported && (
        <div>
          WebGL2 is not supported. Please ensure your browser and system meet the requirements.
        </div>
      )}
    </div>
  );
};

export default WebGL2Checker;