import React from 'react';

export const iconData = {
  "id": "SocioShield",
  "name": "SocioShield",
  "category": "EK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.06 4.81 C 6.91 6.03, 18.17 16.78, 15.00 16.46"
      }
    ],
    [
      "path",
      {
        "d": "M 8.37 6.05 C 16.12 15.57, 18.80 15.46, 18.37 16.54"
      }
    ],
    [
      "path",
      {
        "d": "M 7.06 9.86 C 16.37 16.61, 7.83 14.77, 15.34 16.41"
      }
    ],
    [
      "path",
      {
        "d": "M 2.60 3.45 C 6.75 11.64, 9.73 9.35, 21.56 17.39"
      }
    ],
    [
      "path",
      {
        "d": "M 8.45 7.47 C 18.34 12.05, 5.94 16.78, 21.25 14.38"
      }
    ]
  ]
};

export const SocioShield = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.06 4.81 C 6.91 6.03, 18.17 16.78, 15.00 16.46" />
      <path d="M 8.37 6.05 C 16.12 15.57, 18.80 15.46, 18.37 16.54" />
      <path d="M 7.06 9.86 C 16.37 16.61, 7.83 14.77, 15.34 16.41" />
      <path d="M 2.60 3.45 C 6.75 11.64, 9.73 9.35, 21.56 17.39" />
      <path d="M 8.45 7.47 C 18.34 12.05, 5.94 16.78, 21.25 14.38" />
      {children}
    </svg>
  );
});

export default SocioShield;
