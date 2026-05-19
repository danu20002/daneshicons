import React from 'react';

export const iconData = {
  "id": "IonoTerritory",
  "name": "IonoTerritory",
  "category": "ZY",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.65 12.00 a 9.35 9.35 0 1 0 18.69 0 a 9.35 9.35 0 1 0 -18.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.91 7.33 a 8.09 2.4280821514117688 0 1 0 16.19 0 a 8.09 2.4280821514117688 0 1 0 -16.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.65 12.00 a 9.35 2.8037077674642203 0 1 0 18.69 0 a 9.35 2.8037077674642203 0 1 0 -18.69 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.91 16.67 a 8.09 2.4280821514117688 0 1 0 16.19 0 a 8.09 2.4280821514117688 0 1 0 -16.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.67 3.91 A 2 2 0 0 0 16.67 20.09"
      }
    ],
    [
      "path",
      {
        "d": "M 16.67 3.91 A 2 2 0 0 1 16.67 20.09"
      }
    ],
    [
      "path",
      {
        "d": "M 7.33 3.91 A 2 2 0 0 0 7.33 20.09"
      }
    ],
    [
      "path",
      {
        "d": "M 7.33 3.91 A 2 2 0 0 1 7.33 20.09"
      }
    ]
  ]
};

export const IonoTerritory = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.65 12.00 a 9.35 9.35 0 1 0 18.69 0 a 9.35 9.35 0 1 0 -18.69 0" />
      <path d="M 3.91 7.33 a 8.09 2.4280821514117688 0 1 0 16.19 0 a 8.09 2.4280821514117688 0 1 0 -16.19 0" />
      <path d="M 2.65 12.00 a 9.35 2.8037077674642203 0 1 0 18.69 0 a 9.35 2.8037077674642203 0 1 0 -18.69 0" />
      <path d="M 3.91 16.67 a 8.09 2.4280821514117688 0 1 0 16.19 0 a 8.09 2.4280821514117688 0 1 0 -16.19 0" />
      <path d="M 16.67 3.91 A 2 2 0 0 0 16.67 20.09" />
      <path d="M 16.67 3.91 A 2 2 0 0 1 16.67 20.09" />
      <path d="M 7.33 3.91 A 2 2 0 0 0 7.33 20.09" />
      <path d="M 7.33 3.91 A 2 2 0 0 1 7.33 20.09" />
      {children}
    </svg>
  );
});

export default IonoTerritory;
