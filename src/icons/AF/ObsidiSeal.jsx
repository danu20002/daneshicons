import React from 'react';

export const iconData = {
  "id": "ObsidiSeal",
  "name": "ObsidiSeal",
  "category": "AF",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.87 12.40 C 5.35 6.99, 21.39 3.92, 7.62 2.57"
      }
    ],
    [
      "path",
      {
        "d": "M 19.22 19.07 L 21.09 10.45 L 15.36 14.60 L 8.63 5.84 L 11.42 10.34 L 6.36 13.99 L 13.18 18.88"
      }
    ],
    [
      "path",
      {
        "d": "M 13.72 16.57 Q 4.77 4.67 10.15 4.70"
      }
    ],
    [
      "path",
      {
        "d": "M 7.44 12.76 L 6.05 4.54 L 8.50 18.88 L 14.09 5.70"
      }
    ]
  ]
};

export const ObsidiSeal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.87 12.40 C 5.35 6.99, 21.39 3.92, 7.62 2.57" />
      <path d="M 19.22 19.07 L 21.09 10.45 L 15.36 14.60 L 8.63 5.84 L 11.42 10.34 L 6.36 13.99 L 13.18 18.88" />
      <path d="M 13.72 16.57 Q 4.77 4.67 10.15 4.70" />
      <path d="M 7.44 12.76 L 6.05 4.54 L 8.50 18.88 L 14.09 5.70" />
      {children}
    </svg>
  );
});

export default ObsidiSeal;
