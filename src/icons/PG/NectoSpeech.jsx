import React from 'react';

export const iconData = {
  "id": "NectoSpeech",
  "name": "NectoSpeech",
  "category": "PG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.65 4.31 L 13.67 6.28 L 22.33 9.48 L 16.12 16.30 L 9.02 22.21 L 6.21 13.41 Z"
      }
    ]
  ]
};

export const NectoSpeech = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M 4.65 4.31 L 13.67 6.28 L 22.33 9.48 L 16.12 16.30 L 9.02 22.21 L 6.21 13.41 Z" />
      {children}
    </svg>
  );
});

export default NectoSpeech;
