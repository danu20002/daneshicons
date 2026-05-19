import React from 'react';

export const iconData = {
  "id": "NanoSteal",
  "name": "NanoSteal",
  "category": "DD",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.31 11.87 L 8.48 4.12 L 3.91 13.98 L 5.46 18.77 L 6.39 2.54 L 16.47 19.07 L 8.58 13.56 L 16.36 5.72"
      }
    ],
    [
      "path",
      {
        "d": "M 3.87 10.21 C 17.76 13.26, 10.26 21.90, 19.00 8.83"
      }
    ]
  ]
};

export const NanoSteal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.31 11.87 L 8.48 4.12 L 3.91 13.98 L 5.46 18.77 L 6.39 2.54 L 16.47 19.07 L 8.58 13.56 L 16.36 5.72" />
      <path d="M 3.87 10.21 C 17.76 13.26, 10.26 21.90, 19.00 8.83" />
      {children}
    </svg>
  );
});

export default NanoSteal;
