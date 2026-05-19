import React from 'react';

export const iconData = {
  "id": "ColoYield",
  "name": "ColoYield",
  "category": "DC",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.12 12.00 Q 14.38 12.99 18.45 18.45"
      }
    ],
    [
      "path",
      {
        "d": "M 18.45 18.45 Q 12.99 14.38 12.00 21.12"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 21.12 Q 11.01 14.38 5.55 18.45"
      }
    ],
    [
      "path",
      {
        "d": "M 5.55 18.45 Q 9.62 12.99 2.88 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.88 12.00 Q 9.62 11.01 5.55 5.55"
      }
    ],
    [
      "path",
      {
        "d": "M 5.55 5.55 Q 11.01 9.62 12.00 2.88"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.88 Q 12.99 9.62 18.45 5.55"
      }
    ],
    [
      "path",
      {
        "d": "M 18.45 5.55 Q 14.38 11.01 21.12 12.00"
      }
    ]
  ]
};

export const ColoYield = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.12 12.00 Q 14.38 12.99 18.45 18.45" />
      <path d="M 18.45 18.45 Q 12.99 14.38 12.00 21.12" />
      <path d="M 12.00 21.12 Q 11.01 14.38 5.55 18.45" />
      <path d="M 5.55 18.45 Q 9.62 12.99 2.88 12.00" />
      <path d="M 2.88 12.00 Q 9.62 11.01 5.55 5.55" />
      <path d="M 5.55 5.55 Q 11.01 9.62 12.00 2.88" />
      <path d="M 12.00 2.88 Q 12.99 9.62 18.45 5.55" />
      <path d="M 18.45 5.55 Q 14.38 11.01 21.12 12.00" />
      {children}
    </svg>
  );
});

export default ColoYield;
