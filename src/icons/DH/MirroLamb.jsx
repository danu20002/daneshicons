import React from 'react';

export const iconData = {
  "id": "MirroLamb",
  "name": "MirroLamb",
  "category": "DH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.98 12.00 a 8.02 8.02 0 1 0 16.05 0 a 8.02 8.02 0 1 0 -16.05 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.43 9.33 a 7.57 2.2697684449029105 0 1 0 15.13 0 a 7.57 2.2697684449029105 0 1 0 -15.13 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.43 14.67 a 7.57 2.2697684449029105 0 1 0 15.13 0 a 7.57 2.2697684449029105 0 1 0 -15.13 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.98 A 2 2 0 0 0 12.00 20.02"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.98 A 2 2 0 0 1 12.00 20.02"
      }
    ]
  ]
};

export const MirroLamb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.98 12.00 a 8.02 8.02 0 1 0 16.05 0 a 8.02 8.02 0 1 0 -16.05 0" />
      <path d="M 4.43 9.33 a 7.57 2.2697684449029105 0 1 0 15.13 0 a 7.57 2.2697684449029105 0 1 0 -15.13 0" />
      <path d="M 4.43 14.67 a 7.57 2.2697684449029105 0 1 0 15.13 0 a 7.57 2.2697684449029105 0 1 0 -15.13 0" />
      <path d="M 12.00 3.98 A 2 2 0 0 0 12.00 20.02" />
      <path d="M 12.00 3.98 A 2 2 0 0 1 12.00 20.02" />
      {children}
    </svg>
  );
});

export default MirroLamb;
