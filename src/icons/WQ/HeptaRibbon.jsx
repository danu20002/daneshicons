import React from 'react';

export const iconData = {
  "id": "HeptaRibbon",
  "name": "HeptaRibbon",
  "category": "WQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.83 12.00 a 2.17 2.17 0 1 0 4.33 0 a 2.17 2.17 0 1 0 -4.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.30 12.00 a 4.70 4.70 0 1 0 9.40 0 a 4.70 4.70 0 1 0 -9.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.23 12.00 a 7.77 7.77 0 1 0 15.55 0 a 7.77 7.77 0 1 0 -15.55 0"
      }
    ]
  ]
};

export const HeptaRibbon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.83 12.00 a 2.17 2.17 0 1 0 4.33 0 a 2.17 2.17 0 1 0 -4.33 0" />
      <path d="M 7.30 12.00 a 4.70 4.70 0 1 0 9.40 0 a 4.70 4.70 0 1 0 -9.40 0" />
      <path d="M 4.23 12.00 a 7.77 7.77 0 1 0 15.55 0 a 7.77 7.77 0 1 0 -15.55 0" />
      {children}
    </svg>
  );
});

export default HeptaRibbon;
