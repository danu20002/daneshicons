import React from 'react';

export const iconData = {
  "id": "NucleoProfile",
  "name": "NucleoProfile",
  "category": "WV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.45 12.00 L 19.55 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.45 L 12.00 19.55"
      }
    ],
    [
      "path",
      {
        "d": "M 6.72 6.72 L 17.28 17.28"
      }
    ],
    [
      "path",
      {
        "d": "M 6.72 17.28 L 17.28 6.72"
      }
    ],
    [
      "path",
      {
        "d": "M 2.61 12.00 a 9.39 9.39 0 1 0 18.79 0 a 9.39 9.39 0 1 0 -18.79 0"
      }
    ]
  ]
};

export const NucleoProfile = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.45 12.00 L 19.55 12.00" />
      <path d="M 12.00 4.45 L 12.00 19.55" />
      <path d="M 6.72 6.72 L 17.28 17.28" />
      <path d="M 6.72 17.28 L 17.28 6.72" />
      <path d="M 2.61 12.00 a 9.39 9.39 0 1 0 18.79 0 a 9.39 9.39 0 1 0 -18.79 0" />
      {children}
    </svg>
  );
});

export default NucleoProfile;
