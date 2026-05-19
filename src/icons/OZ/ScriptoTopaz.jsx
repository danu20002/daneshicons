import React from 'react';

export const iconData = {
  "id": "ScriptoTopaz",
  "name": "ScriptoTopaz",
  "category": "OZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.50 12.00 a 9.50 9.50 0 1 0 18.99 0 a 9.50 9.50 0 1 0 -18.99 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.05 8.83 a 8.95 2.686200072494007 0 1 0 17.91 0 a 8.95 2.686200072494007 0 1 0 -17.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.05 15.17 a 8.95 2.6862000724940067 0 1 0 17.91 0 a 8.95 2.6862000724940067 0 1 0 -17.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.50 A 2 2 0 0 0 12.00 21.50"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.50 A 2 2 0 0 1 12.00 21.50"
      }
    ]
  ]
};

export const ScriptoTopaz = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.50 12.00 a 9.50 9.50 0 1 0 18.99 0 a 9.50 9.50 0 1 0 -18.99 0" />
      <path d="M 3.05 8.83 a 8.95 2.686200072494007 0 1 0 17.91 0 a 8.95 2.686200072494007 0 1 0 -17.91 0" />
      <path d="M 3.05 15.17 a 8.95 2.6862000724940067 0 1 0 17.91 0 a 8.95 2.6862000724940067 0 1 0 -17.91 0" />
      <path d="M 12.00 2.50 A 2 2 0 0 0 12.00 21.50" />
      <path d="M 12.00 2.50 A 2 2 0 0 1 12.00 21.50" />
      {children}
    </svg>
  );
});

export default ScriptoTopaz;
