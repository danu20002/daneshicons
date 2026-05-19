import React from 'react';

export const iconData = {
  "id": "SteatoHappen",
  "name": "SteatoHappen",
  "category": "DV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.40 12.00 L 20.60 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.40 L 12.00 20.60"
      }
    ],
    [
      "path",
      {
        "d": "M 5.98 5.98 L 18.02 18.02"
      }
    ],
    [
      "path",
      {
        "d": "M 5.98 18.02 L 18.02 5.98"
      }
    ],
    [
      "path",
      {
        "d": "M 1.32 12.00 a 10.68 10.68 0 1 0 21.36 0 a 10.68 10.68 0 1 0 -21.36 0"
      }
    ]
  ]
};

export const SteatoHappen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.40 12.00 L 20.60 12.00" />
      <path d="M 12.00 3.40 L 12.00 20.60" />
      <path d="M 5.98 5.98 L 18.02 18.02" />
      <path d="M 5.98 18.02 L 18.02 5.98" />
      <path d="M 1.32 12.00 a 10.68 10.68 0 1 0 21.36 0 a 10.68 10.68 0 1 0 -21.36 0" />
      {children}
    </svg>
  );
});

export default SteatoHappen;
