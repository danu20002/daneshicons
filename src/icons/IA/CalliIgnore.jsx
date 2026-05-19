import React from 'react';

export const iconData = {
  "id": "CalliIgnore",
  "name": "CalliIgnore",
  "category": "IA",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.77 12.00 a 2.23 2.23 0 1 0 4.45 0 a 2.23 2.23 0 1 0 -4.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.72 12.00 a 6.28 6.28 0 1 0 12.56 0 a 6.28 6.28 0 1 0 -12.56 0"
      }
    ]
  ]
};

export const CalliIgnore = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.77 12.00 a 2.23 2.23 0 1 0 4.45 0 a 2.23 2.23 0 1 0 -4.45 0" />
      <path d="M 5.72 12.00 a 6.28 6.28 0 1 0 12.56 0 a 6.28 6.28 0 1 0 -12.56 0" />
      {children}
    </svg>
  );
});

export default CalliIgnore;
