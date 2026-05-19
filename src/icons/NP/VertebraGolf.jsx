import React from 'react';

export const iconData = {
  "id": "VertebraGolf",
  "name": "VertebraGolf",
  "category": "NP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.48 12.00 a 8.52 8.52 0 1 0 17.04 0 a 8.52 8.52 0 1 0 -17.04 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.46 12.00 a 5.54 5.54 0 1 1 11.07 0 a 5.54 5.54 0 1 1 -11.07 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.02 12.00 L 22.02 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.67 17.67 L 19.09 19.09"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.02 L 12.00 22.02"
      }
    ],
    [
      "path",
      {
        "d": "M 6.33 17.67 L 4.91 19.09"
      }
    ],
    [
      "path",
      {
        "d": "M 3.98 12.00 L 1.98 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 6.33 6.33 L 4.91 4.91"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.98 L 12.00 1.98"
      }
    ],
    [
      "path",
      {
        "d": "M 17.67 6.33 L 19.09 4.91"
      }
    ]
  ]
};

export const VertebraGolf = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.48 12.00 a 8.52 8.52 0 1 0 17.04 0 a 8.52 8.52 0 1 0 -17.04 0" />
      <path d="M 6.46 12.00 a 5.54 5.54 0 1 1 11.07 0 a 5.54 5.54 0 1 1 -11.07 0" />
      <path d="M 20.02 12.00 L 22.02 12.00" />
      <path d="M 17.67 17.67 L 19.09 19.09" />
      <path d="M 12.00 20.02 L 12.00 22.02" />
      <path d="M 6.33 17.67 L 4.91 19.09" />
      <path d="M 3.98 12.00 L 1.98 12.00" />
      <path d="M 6.33 6.33 L 4.91 4.91" />
      <path d="M 12.00 3.98 L 12.00 1.98" />
      <path d="M 17.67 6.33 L 19.09 4.91" />
      {children}
    </svg>
  );
});

export default VertebraGolf;
