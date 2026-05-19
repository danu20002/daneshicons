import React from 'react';

export const iconData = {
  "id": "SyndesmoOunce",
  "name": "SyndesmoOunce",
  "category": "GZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.67 6.21 L 20.33 6.21 L 20.33 17.79 L 3.67 17.79 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.67 6.21 L 7.77 2.11 L 24.43 2.11 L 20.33 6.21"
      }
    ],
    [
      "path",
      {
        "d": "M 20.33 6.21 L 24.43 2.11 L 24.43 13.69 L 20.33 17.79"
      }
    ]
  ]
};

export const SyndesmoOunce = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.67 6.21 L 20.33 6.21 L 20.33 17.79 L 3.67 17.79 Z" />
      <path d="M 3.67 6.21 L 7.77 2.11 L 24.43 2.11 L 20.33 6.21" />
      <path d="M 20.33 6.21 L 24.43 2.11 L 24.43 13.69 L 20.33 17.79" />
      {children}
    </svg>
  );
});

export default SyndesmoOunce;
