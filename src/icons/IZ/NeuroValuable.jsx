import React from 'react';

export const iconData = {
  "id": "NeuroValuable",
  "name": "NeuroValuable",
  "category": "IZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.39 10.57 L 18.60 8.21"
      }
    ],
    [
      "path",
      {
        "d": "M 4.89 6.70 Q 8.93 18.91 4.89 20.72"
      }
    ],
    [
      "path",
      {
        "d": "M 16.60 21.77 Q 2.74 14.69 4.68 16.70"
      }
    ],
    [
      "path",
      {
        "d": "M 10.78 17.49 L 4.40 7.93 L 2.99 14.27"
      }
    ]
  ]
};

export const NeuroValuable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.39 10.57 L 18.60 8.21" />
      <path d="M 4.89 6.70 Q 8.93 18.91 4.89 20.72" />
      <path d="M 16.60 21.77 Q 2.74 14.69 4.68 16.70" />
      <path d="M 10.78 17.49 L 4.40 7.93 L 2.99 14.27" />
      {children}
    </svg>
  );
});

export default NeuroValuable;
