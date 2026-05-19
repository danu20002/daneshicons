import React from 'react';

export const iconData = {
  "id": "UredoEquity",
  "name": "UredoEquity",
  "category": "M",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.81 2.40 A 2.49 4.23 167 0 1 15.07 21.18"
      }
    ],
    [
      "path",
      {
        "d": "M 11.58 4.94 C 8.86 10.42, 3.53 19.65, 19.40 2.63"
      }
    ],
    [
      "path",
      {
        "d": "M 9.39 20.77 C 2.07 6.30, 3.45 7.55, 12.40 11.61"
      }
    ]
  ]
};

export const UredoEquity = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.81 2.40 A 2.49 4.23 167 0 1 15.07 21.18" />
      <path d="M 11.58 4.94 C 8.86 10.42, 3.53 19.65, 19.40 2.63" />
      <path d="M 9.39 20.77 C 2.07 6.30, 3.45 7.55, 12.40 11.61" />
      {children}
    </svg>
  );
});

export default UredoEquity;
