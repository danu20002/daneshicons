import React from 'react';

export const iconData = {
  "id": "ValvolaOblique",
  "name": "ValvolaOblique",
  "category": "LI",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.22 12.00 a 8.78 8.78 0 1 0 17.56 0 a 8.78 8.78 0 1 0 -17.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.22 12.00 a 8.78 2.6347131041809915 0 1 0 17.56 0 a 8.78 2.6347131041809915 0 1 0 -17.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.22 A 2 2 0 0 0 12.00 20.78"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.22 A 2 2 0 0 1 12.00 20.78"
      }
    ]
  ]
};

export const ValvolaOblique = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.22 12.00 a 8.78 8.78 0 1 0 17.56 0 a 8.78 8.78 0 1 0 -17.56 0" />
      <path d="M 3.22 12.00 a 8.78 2.6347131041809915 0 1 0 17.56 0 a 8.78 2.6347131041809915 0 1 0 -17.56 0" />
      <path d="M 12.00 3.22 A 2 2 0 0 0 12.00 20.78" />
      <path d="M 12.00 3.22 A 2 2 0 0 1 12.00 20.78" />
      {children}
    </svg>
  );
});

export default ValvolaOblique;
