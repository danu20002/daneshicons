import React from 'react';

export const iconData = {
  "id": "UsignolMystery",
  "name": "UsignolMystery",
  "category": "KP",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.02 12.00 a 9.98 9.98 0 1 0 19.97 0 a 9.98 9.98 0 1 0 -19.97 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.59 8.67 a 9.41 2.823708186043311 0 1 0 18.82 0 a 9.41 2.823708186043311 0 1 0 -18.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.59 15.33 a 9.41 2.8237081860433113 0 1 0 18.82 0 a 9.41 2.8237081860433113 0 1 0 -18.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.06 4.94 A 2 2 0 0 0 19.06 19.06"
      }
    ],
    [
      "path",
      {
        "d": "M 19.06 4.94 A 2 2 0 0 1 19.06 19.06"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.02 A 2 2 0 0 0 12.00 21.98"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.02 A 2 2 0 0 1 12.00 21.98"
      }
    ],
    [
      "path",
      {
        "d": "M 4.94 4.94 A 2 2 0 0 0 4.94 19.06"
      }
    ],
    [
      "path",
      {
        "d": "M 4.94 4.94 A 2 2 0 0 1 4.94 19.06"
      }
    ]
  ]
};

export const UsignolMystery = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.02 12.00 a 9.98 9.98 0 1 0 19.97 0 a 9.98 9.98 0 1 0 -19.97 0" />
      <path d="M 2.59 8.67 a 9.41 2.823708186043311 0 1 0 18.82 0 a 9.41 2.823708186043311 0 1 0 -18.82 0" />
      <path d="M 2.59 15.33 a 9.41 2.8237081860433113 0 1 0 18.82 0 a 9.41 2.8237081860433113 0 1 0 -18.82 0" />
      <path d="M 19.06 4.94 A 2 2 0 0 0 19.06 19.06" />
      <path d="M 19.06 4.94 A 2 2 0 0 1 19.06 19.06" />
      <path d="M 12.00 2.02 A 2 2 0 0 0 12.00 21.98" />
      <path d="M 12.00 2.02 A 2 2 0 0 1 12.00 21.98" />
      <path d="M 4.94 4.94 A 2 2 0 0 0 4.94 19.06" />
      <path d="M 4.94 4.94 A 2 2 0 0 1 4.94 19.06" />
      {children}
    </svg>
  );
});

export default UsignolMystery;
