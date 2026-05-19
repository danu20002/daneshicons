import React from 'react';

export const iconData = {
  "id": "VertigoBell",
  "name": "VertigoBell",
  "category": "KP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.49 12.00 a 8.51 8.51 0 1 0 17.03 0 a 8.51 8.51 0 1 0 -17.03 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.49 12.00 a 8.51 2.55416737832129 0 1 0 17.03 0 a 8.51 2.55416737832129 0 1 0 -17.03 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.49 A 2 2 0 0 0 12.00 20.51"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.49 A 2 2 0 0 1 12.00 20.51"
      }
    ]
  ]
};

export const VertigoBell = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.49 12.00 a 8.51 8.51 0 1 0 17.03 0 a 8.51 8.51 0 1 0 -17.03 0" />
      <path d="M 3.49 12.00 a 8.51 2.55416737832129 0 1 0 17.03 0 a 8.51 2.55416737832129 0 1 0 -17.03 0" />
      <path d="M 12.00 3.49 A 2 2 0 0 0 12.00 20.51" />
      <path d="M 12.00 3.49 A 2 2 0 0 1 12.00 20.51" />
      {children}
    </svg>
  );
});

export default VertigoBell;
