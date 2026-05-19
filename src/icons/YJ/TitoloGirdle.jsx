import React from 'react';

export const iconData = {
  "id": "TitoloGirdle",
  "name": "TitoloGirdle",
  "category": "YJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.33 19.00 L 11.34 3.38"
      }
    ],
    [
      "circle",
      {
        "cx": "15.33",
        "cy": "19.00",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "16.50",
        "cy": "14.12",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "11.34",
        "cy": "3.38",
        "r": "1.5"
      }
    ]
  ]
};

export const TitoloGirdle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.33 19.00 L 11.34 3.38" />
      <circle cx="15.33" cy="19.00" r="1.5" />
      <circle cx="16.50" cy="14.12" r="1.5" />
      <circle cx="11.34" cy="3.38" r="1.5" />
      {children}
    </svg>
  );
});

export default TitoloGirdle;
