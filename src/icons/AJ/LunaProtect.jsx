import React from 'react';

export const iconData = {
  "id": "LunaProtect",
  "name": "LunaProtect",
  "category": "AJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.54 12.00 a 8.46 8.46 0 1 0 16.92 0 a 8.46 8.46 0 1 0 -16.92 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.02 9.18 a 7.98 2.392864396452128 0 1 0 15.95 0 a 7.98 2.392864396452128 0 1 0 -15.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.02 14.82 a 7.98 2.3928643964521275 0 1 0 15.95 0 a 7.98 2.3928643964521275 0 1 0 -15.95 0"
      }
    ],
    [
      "path",
      {
        "d": "M 17.98 6.02 A 2 2 0 0 0 17.98 17.98"
      }
    ],
    [
      "path",
      {
        "d": "M 17.98 6.02 A 2 2 0 0 1 17.98 17.98"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.54 A 2 2 0 0 0 12.00 20.46"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.54 A 2 2 0 0 1 12.00 20.46"
      }
    ],
    [
      "path",
      {
        "d": "M 6.02 6.02 A 2 2 0 0 0 6.02 17.98"
      }
    ],
    [
      "path",
      {
        "d": "M 6.02 6.02 A 2 2 0 0 1 6.02 17.98"
      }
    ]
  ]
};

export const LunaProtect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.54 12.00 a 8.46 8.46 0 1 0 16.92 0 a 8.46 8.46 0 1 0 -16.92 0" />
      <path d="M 4.02 9.18 a 7.98 2.392864396452128 0 1 0 15.95 0 a 7.98 2.392864396452128 0 1 0 -15.95 0" />
      <path d="M 4.02 14.82 a 7.98 2.3928643964521275 0 1 0 15.95 0 a 7.98 2.3928643964521275 0 1 0 -15.95 0" />
      <path d="M 17.98 6.02 A 2 2 0 0 0 17.98 17.98" />
      <path d="M 17.98 6.02 A 2 2 0 0 1 17.98 17.98" />
      <path d="M 12.00 3.54 A 2 2 0 0 0 12.00 20.46" />
      <path d="M 12.00 3.54 A 2 2 0 0 1 12.00 20.46" />
      <path d="M 6.02 6.02 A 2 2 0 0 0 6.02 17.98" />
      <path d="M 6.02 6.02 A 2 2 0 0 1 6.02 17.98" />
      {children}
    </svg>
  );
});

export default LunaProtect;
