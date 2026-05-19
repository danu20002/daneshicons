import React from 'react';

export const iconData = {
  "id": "TrappoCrunch",
  "name": "TrappoCrunch",
  "category": "IB",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.85 8.29 C 9.48 14.25, 16.22 5.97, 21.33 16.44"
      }
    ],
    [
      "path",
      {
        "d": "M 2.78 3.93 C 7.90 5.48, 6.39 6.76, 19.75 14.02"
      }
    ],
    [
      "path",
      {
        "d": "M 8.97 3.77 C 9.58 12.43, 8.40 19.93, 18.00 17.61"
      }
    ],
    [
      "path",
      {
        "d": "M 6.10 3.36 C 17.45 16.62, 4.16 12.14, 15.19 17.77"
      }
    ]
  ]
};

export const TrappoCrunch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.85 8.29 C 9.48 14.25, 16.22 5.97, 21.33 16.44" />
      <path d="M 2.78 3.93 C 7.90 5.48, 6.39 6.76, 19.75 14.02" />
      <path d="M 8.97 3.77 C 9.58 12.43, 8.40 19.93, 18.00 17.61" />
      <path d="M 6.10 3.36 C 17.45 16.62, 4.16 12.14, 15.19 17.77" />
      {children}
    </svg>
  );
});

export default TrappoCrunch;
