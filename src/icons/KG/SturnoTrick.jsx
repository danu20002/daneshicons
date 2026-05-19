import React from 'react';

export const iconData = {
  "id": "SturnoTrick",
  "name": "SturnoTrick",
  "category": "KG",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.93 6.11 C 9.57 5.98, 17.13 17.33, 19.54 18.38"
      }
    ],
    [
      "path",
      {
        "d": "M 3.34 7.27 C 4.60 10.43, 7.28 6.80, 17.23 14.99"
      }
    ],
    [
      "path",
      {
        "d": "M 9.54 4.04 C 15.99 7.47, 5.58 16.00, 18.12 14.51"
      }
    ],
    [
      "path",
      {
        "d": "M 9.31 4.82 C 16.70 7.00, 17.27 6.26, 16.00 17.68"
      }
    ]
  ]
};

export const SturnoTrick = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.93 6.11 C 9.57 5.98, 17.13 17.33, 19.54 18.38" />
      <path d="M 3.34 7.27 C 4.60 10.43, 7.28 6.80, 17.23 14.99" />
      <path d="M 9.54 4.04 C 15.99 7.47, 5.58 16.00, 18.12 14.51" />
      <path d="M 9.31 4.82 C 16.70 7.00, 17.27 6.26, 16.00 17.68" />
      {children}
    </svg>
  );
});

export default SturnoTrick;
