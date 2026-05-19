import React from 'react';

export const iconData = {
  "id": "OpticMask",
  "name": "OpticMask",
  "category": "SM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.62 6.77 Q 19.10 10.43 16.14 14.49"
      }
    ],
    [
      "path",
      {
        "d": "M 21.10 9.91 L 7.20 14.06"
      }
    ],
    [
      "path",
      {
        "d": "M 12.26 6.61 A 5.33 5.64 105 0 1 5.36 21.65"
      }
    ],
    [
      "path",
      {
        "d": "M 9.61 9.03 L 12.58 21.37 L 19.68 3.42 L 10.71 4.92 L 6.02 15.42 L 13.88 20.00 L 6.07 13.46 L 15.96 10.98"
      }
    ]
  ]
};

export const OpticMask = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.62 6.77 Q 19.10 10.43 16.14 14.49" />
      <path d="M 21.10 9.91 L 7.20 14.06" />
      <path d="M 12.26 6.61 A 5.33 5.64 105 0 1 5.36 21.65" />
      <path d="M 9.61 9.03 L 12.58 21.37 L 19.68 3.42 L 10.71 4.92 L 6.02 15.42 L 13.88 20.00 L 6.07 13.46 L 15.96 10.98" />
      {children}
    </svg>
  );
});

export default OpticMask;
