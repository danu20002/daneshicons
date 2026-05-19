import React from 'react';

export const iconData = {
  "id": "UmbelWeek",
  "name": "UmbelWeek",
  "category": "RX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.99 12.00 a 8.01 8.01 0 1 0 16.01 0 a 8.01 8.01 0 1 0 -16.01 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.45 9.33 a 7.55 2.2644469427167477 0 1 0 15.10 0 a 7.55 2.2644469427167477 0 1 0 -15.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.45 14.67 a 7.55 2.2644469427167477 0 1 0 15.10 0 a 7.55 2.2644469427167477 0 1 0 -15.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.00 5.07 A 2 2 0 0 0 16.00 18.93"
      }
    ],
    [
      "path",
      {
        "d": "M 16.00 5.07 A 2 2 0 0 1 16.00 18.93"
      }
    ],
    [
      "path",
      {
        "d": "M 8.00 5.07 A 2 2 0 0 0 8.00 18.93"
      }
    ],
    [
      "path",
      {
        "d": "M 8.00 5.07 A 2 2 0 0 1 8.00 18.93"
      }
    ]
  ]
};

export const UmbelWeek = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.99 12.00 a 8.01 8.01 0 1 0 16.01 0 a 8.01 8.01 0 1 0 -16.01 0" />
      <path d="M 4.45 9.33 a 7.55 2.2644469427167477 0 1 0 15.10 0 a 7.55 2.2644469427167477 0 1 0 -15.10 0" />
      <path d="M 4.45 14.67 a 7.55 2.2644469427167477 0 1 0 15.10 0 a 7.55 2.2644469427167477 0 1 0 -15.10 0" />
      <path d="M 16.00 5.07 A 2 2 0 0 0 16.00 18.93" />
      <path d="M 16.00 5.07 A 2 2 0 0 1 16.00 18.93" />
      <path d="M 8.00 5.07 A 2 2 0 0 0 8.00 18.93" />
      <path d="M 8.00 5.07 A 2 2 0 0 1 8.00 18.93" />
      {children}
    </svg>
  );
});

export default UmbelWeek;
