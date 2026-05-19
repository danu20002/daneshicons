import React from 'react';

export const iconData = {
  "id": "VeteroVolcano",
  "name": "VeteroVolcano",
  "category": "WO",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.33 20.46 L 9.85 17.03 L 1.51 13.26 L 8.72 7.62 L 16.16 2.28 L 17.43 11.35 Z"
      }
    ]
  ]
};

export const VeteroVolcano = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.33 20.46 L 9.85 17.03 L 1.51 13.26 L 8.72 7.62 L 16.16 2.28 L 17.43 11.35 Z" />
      {children}
    </svg>
  );
});

export default VeteroVolcano;
