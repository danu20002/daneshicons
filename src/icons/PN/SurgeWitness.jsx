import React from 'react';

export const iconData = {
  "id": "SurgeWitness",
  "name": "SurgeWitness",
  "category": "PN",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.02 12.00 Q 15.23 15.23 12.00 21.02"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 21.02 Q 8.77 15.23 2.98 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.98 12.00 Q 8.77 8.77 12.00 2.98"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.98 Q 15.23 8.77 21.02 12.00"
      }
    ]
  ]
};

export const SurgeWitness = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.02 12.00 Q 15.23 15.23 12.00 21.02" />
      <path d="M 12.00 21.02 Q 8.77 15.23 2.98 12.00" />
      <path d="M 2.98 12.00 Q 8.77 8.77 12.00 2.98" />
      <path d="M 12.00 2.98 Q 15.23 8.77 21.02 12.00" />
      {children}
    </svg>
  );
});

export default SurgeWitness;
