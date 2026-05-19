import React from 'react';

export const iconData = {
  "id": "VincoloDuke",
  "name": "VincoloDuke",
  "category": "DV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.61 12.00 L 20.39 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.61 L 12.00 20.39"
      }
    ],
    [
      "path",
      {
        "d": "M 2.27 12.00 a 9.73 9.73 0 1 0 19.46 0 a 9.73 9.73 0 1 0 -19.46 0"
      }
    ]
  ]
};

export const VincoloDuke = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.61 12.00 L 20.39 12.00" />
      <path d="M 12.00 3.61 L 12.00 20.39" />
      <path d="M 2.27 12.00 a 9.73 9.73 0 1 0 19.46 0 a 9.73 9.73 0 1 0 -19.46 0" />
      {children}
    </svg>
  );
});

export default VincoloDuke;
