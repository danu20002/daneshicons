import React from 'react';

export const iconData = {
  "id": "IsoPitch",
  "name": "IsoPitch",
  "category": "BQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.11 10.26 L 13.11 10.26"
      }
    ],
    [
      "path",
      {
        "d": "M 14.95 10.37 L 12.95 13.84"
      }
    ],
    [
      "path",
      {
        "d": "M 11.94 15.37 L 9.94 11.91"
      }
    ]
  ]
};

export const IsoPitch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.11 10.26 L 13.11 10.26" />
      <path d="M 14.95 10.37 L 12.95 13.84" />
      <path d="M 11.94 15.37 L 9.94 11.91" />
      {children}
    </svg>
  );
});

export default IsoPitch;
