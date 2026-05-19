import React from 'react';

export const iconData = {
  "id": "TangoWrite",
  "name": "TangoWrite",
  "category": "PS",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.30 12.00 a 9.70 9.70 0 1 0 19.41 0 a 9.70 9.70 0 1 0 -19.41 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.30 12.00 a 9.70 2.9110580743756143 0 1 0 19.41 0 a 9.70 2.9110580743756143 0 1 0 -19.41 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.30 A 2 2 0 0 0 12.00 21.70"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.30 A 2 2 0 0 1 12.00 21.70"
      }
    ]
  ]
};

export const TangoWrite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.30 12.00 a 9.70 9.70 0 1 0 19.41 0 a 9.70 9.70 0 1 0 -19.41 0" />
      <path d="M 2.30 12.00 a 9.70 2.9110580743756143 0 1 0 19.41 0 a 9.70 2.9110580743756143 0 1 0 -19.41 0" />
      <path d="M 12.00 2.30 A 2 2 0 0 0 12.00 21.70" />
      <path d="M 12.00 2.30 A 2 2 0 0 1 12.00 21.70" />
      {children}
    </svg>
  );
});

export default TangoWrite;
