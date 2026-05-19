import React from 'react';

export const iconData = {
  "id": "HeteroSupper",
  "name": "HeteroSupper",
  "category": "JR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.97 12.00 L 20.03 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.97 L 12.00 20.03"
      }
    ],
    [
      "path",
      {
        "d": "M 6.38 6.38 L 17.62 17.62"
      }
    ],
    [
      "path",
      {
        "d": "M 6.38 17.62 L 17.62 6.38"
      }
    ],
    [
      "path",
      {
        "d": "M 2.04 12.00 a 9.96 9.96 0 1 0 19.92 0 a 9.96 9.96 0 1 0 -19.92 0"
      }
    ]
  ]
};

export const HeteroSupper = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.97 12.00 L 20.03 12.00" />
      <path d="M 12.00 3.97 L 12.00 20.03" />
      <path d="M 6.38 6.38 L 17.62 17.62" />
      <path d="M 6.38 17.62 L 17.62 6.38" />
      <path d="M 2.04 12.00 a 9.96 9.96 0 1 0 19.92 0 a 9.96 9.96 0 1 0 -19.92 0" />
      {children}
    </svg>
  );
});

export default HeteroSupper;
