import React from 'react';

export const iconData = {
  "id": "UmidiPact",
  "name": "UmidiPact",
  "category": "IG",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.27 6.19 L 4.52 14.56"
      }
    ],
    [
      "path",
      {
        "d": "M 14.29 12.00 C 7.37 17.74, 18.04 21.34, 3.47 11.67"
      }
    ],
    [
      "path",
      {
        "d": "M 21.04 6.99 L 11.69 12.88"
      }
    ]
  ]
};

export const UmidiPact = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.27 6.19 L 4.52 14.56" />
      <path d="M 14.29 12.00 C 7.37 17.74, 18.04 21.34, 3.47 11.67" />
      <path d="M 21.04 6.99 L 11.69 12.88" />
      {children}
    </svg>
  );
});

export default UmidiPact;
