import React from 'react';

export const iconData = {
  "id": "VolutoTexture",
  "name": "VolutoTexture",
  "category": "OW",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.03 14.41 L 13.51 8.19"
      }
    ],
    [
      "path",
      {
        "d": "M 18.03 14.41 L 8.00 12.05"
      }
    ],
    [
      "path",
      {
        "d": "M 13.51 8.19 L 8.00 12.05"
      }
    ],
    [
      "circle",
      {
        "cx": "20.62",
        "cy": "14.12",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "18.03",
        "cy": "14.41",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "13.51",
        "cy": "8.19",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "8.00",
        "cy": "12.05",
        "r": "1.5"
      }
    ]
  ]
};

export const VolutoTexture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.03 14.41 L 13.51 8.19" />
      <path d="M 18.03 14.41 L 8.00 12.05" />
      <path d="M 13.51 8.19 L 8.00 12.05" />
      <circle cx="20.62" cy="14.12" r="1.5" />
      <circle cx="18.03" cy="14.41" r="1.5" />
      <circle cx="13.51" cy="8.19" r="1.5" />
      <circle cx="8.00" cy="12.05" r="1.5" />
      {children}
    </svg>
  );
});

export default VolutoTexture;
