import React from 'react';

export const iconData = {
  "id": "VillicoRegion",
  "name": "VillicoRegion",
  "category": "UC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.91 12.00 a 9.09 9.09 0 1 0 18.17 0 a 9.09 9.09 0 1 0 -18.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.91 12.00 a 9.09 2.7261704976204784 0 1 0 18.17 0 a 9.09 2.7261704976204784 0 1 0 -18.17 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.43 5.57 A 2 2 0 0 0 18.43 18.43"
      }
    ],
    [
      "path",
      {
        "d": "M 18.43 5.57 A 2 2 0 0 1 18.43 18.43"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.91 A 2 2 0 0 0 12.00 21.09"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.91 A 2 2 0 0 1 12.00 21.09"
      }
    ],
    [
      "path",
      {
        "d": "M 5.57 5.57 A 2 2 0 0 0 5.57 18.43"
      }
    ],
    [
      "path",
      {
        "d": "M 5.57 5.57 A 2 2 0 0 1 5.57 18.43"
      }
    ]
  ]
};

export const VillicoRegion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.91 12.00 a 9.09 9.09 0 1 0 18.17 0 a 9.09 9.09 0 1 0 -18.17 0" />
      <path d="M 2.91 12.00 a 9.09 2.7261704976204784 0 1 0 18.17 0 a 9.09 2.7261704976204784 0 1 0 -18.17 0" />
      <path d="M 18.43 5.57 A 2 2 0 0 0 18.43 18.43" />
      <path d="M 18.43 5.57 A 2 2 0 0 1 18.43 18.43" />
      <path d="M 12.00 2.91 A 2 2 0 0 0 12.00 21.09" />
      <path d="M 12.00 2.91 A 2 2 0 0 1 12.00 21.09" />
      <path d="M 5.57 5.57 A 2 2 0 0 0 5.57 18.43" />
      <path d="M 5.57 5.57 A 2 2 0 0 1 5.57 18.43" />
      {children}
    </svg>
  );
});

export default VillicoRegion;
