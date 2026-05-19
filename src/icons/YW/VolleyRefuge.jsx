import React from 'react';

export const iconData = {
  "id": "VolleyRefuge",
  "name": "VolleyRefuge",
  "category": "YW",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.43 2.06 C 11.00 6.07, 15.47 4.50, 15.74 16.84"
      }
    ],
    [
      "path",
      {
        "d": "M 3.50 8.99 C 13.65 7.07, 9.49 11.47, 19.97 20.35"
      }
    ],
    [
      "path",
      {
        "d": "M 4.41 4.03 C 14.35 13.53, 5.93 12.03, 15.04 15.96"
      }
    ],
    [
      "path",
      {
        "d": "M 4.97 7.53 C 17.17 15.59, 8.19 16.32, 20.22 20.68"
      }
    ]
  ]
};

export const VolleyRefuge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.43 2.06 C 11.00 6.07, 15.47 4.50, 15.74 16.84" />
      <path d="M 3.50 8.99 C 13.65 7.07, 9.49 11.47, 19.97 20.35" />
      <path d="M 4.41 4.03 C 14.35 13.53, 5.93 12.03, 15.04 15.96" />
      <path d="M 4.97 7.53 C 17.17 15.59, 8.19 16.32, 20.22 20.68" />
      {children}
    </svg>
  );
});

export default VolleyRefuge;
