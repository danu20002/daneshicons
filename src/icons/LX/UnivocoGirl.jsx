import React from 'react';

export const iconData = {
  "id": "UnivocoGirl",
  "name": "UnivocoGirl",
  "category": "LX",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.79 13.58 Q 9.62 4.37 6.53 18.37"
      }
    ],
    [
      "path",
      {
        "d": "M 7.01 16.23 C 18.86 17.89, 6.88 15.99, 14.09 14.40"
      }
    ],
    [
      "path",
      {
        "d": "M 21.74 8.07 A 5.91 4.07 150 0 0 11.69 16.01"
      }
    ],
    [
      "path",
      {
        "d": "M 2.72 11.72 L 8.88 5.66 L 20.24 16.13 L 13.13 13.13 L 5.34 10.13 L 3.33 10.74 L 6.54 8.67"
      }
    ],
    [
      "path",
      {
        "d": "M 10.32 18.53 Q 18.07 21.44 14.14 18.15"
      }
    ]
  ]
};

export const UnivocoGirl = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.79 13.58 Q 9.62 4.37 6.53 18.37" />
      <path d="M 7.01 16.23 C 18.86 17.89, 6.88 15.99, 14.09 14.40" />
      <path d="M 21.74 8.07 A 5.91 4.07 150 0 0 11.69 16.01" />
      <path d="M 2.72 11.72 L 8.88 5.66 L 20.24 16.13 L 13.13 13.13 L 5.34 10.13 L 3.33 10.74 L 6.54 8.67" />
      <path d="M 10.32 18.53 Q 18.07 21.44 14.14 18.15" />
      {children}
    </svg>
  );
});

export default UnivocoGirl;
