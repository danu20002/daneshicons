import React from 'react';

export const iconData = {
  "id": "StomatoBulge",
  "name": "StomatoBulge",
  "category": "DC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.30 12.00 L 19.70 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.30 L 12.00 19.70"
      }
    ],
    [
      "path",
      {
        "d": "M 6.61 6.61 L 17.39 17.39"
      }
    ],
    [
      "path",
      {
        "d": "M 6.61 17.39 L 17.39 6.61"
      }
    ],
    [
      "path",
      {
        "d": "M 1.45 12.00 a 10.55 10.55 0 1 0 21.10 0 a 10.55 10.55 0 1 0 -21.10 0"
      }
    ]
  ]
};

export const StomatoBulge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.30 12.00 L 19.70 12.00" />
      <path d="M 12.00 4.30 L 12.00 19.70" />
      <path d="M 6.61 6.61 L 17.39 17.39" />
      <path d="M 6.61 17.39 L 17.39 6.61" />
      <path d="M 1.45 12.00 a 10.55 10.55 0 1 0 21.10 0 a 10.55 10.55 0 1 0 -21.10 0" />
      {children}
    </svg>
  );
});

export default StomatoBulge;
