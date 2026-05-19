import React from 'react';

export const iconData = {
  "id": "SubliTrill",
  "name": "SubliTrill",
  "category": "KL",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.74 3.33 L 13.54 6.61 L 10.01 6.88 L 5.04 15.67"
      }
    ],
    [
      "path",
      {
        "d": "M 20.44 8.34 A 2.61 6.83 84 0 1 13.22 5.43"
      }
    ],
    [
      "path",
      {
        "d": "M 13.32 20.42 L 13.95 15.11"
      }
    ],
    [
      "path",
      {
        "d": "M 17.33 12.82 L 10.07 10.01"
      }
    ],
    [
      "path",
      {
        "d": "M 13.53 6.26 Q 16.22 21.42 21.83 11.01"
      }
    ],
    [
      "path",
      {
        "d": "M 3.38 9.09 L 21.37 21.87 L 3.24 18.58 L 10.56 2.45"
      }
    ]
  ]
};

export const SubliTrill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.74 3.33 L 13.54 6.61 L 10.01 6.88 L 5.04 15.67" />
      <path d="M 20.44 8.34 A 2.61 6.83 84 0 1 13.22 5.43" />
      <path d="M 13.32 20.42 L 13.95 15.11" />
      <path d="M 17.33 12.82 L 10.07 10.01" />
      <path d="M 13.53 6.26 Q 16.22 21.42 21.83 11.01" />
      <path d="M 3.38 9.09 L 21.37 21.87 L 3.24 18.58 L 10.56 2.45" />
      {children}
    </svg>
  );
});

export default SubliTrill;
