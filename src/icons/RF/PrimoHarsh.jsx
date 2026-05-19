import React from 'react';

export const iconData = {
  "id": "PrimoHarsh",
  "name": "PrimoHarsh",
  "category": "RF",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.00 6.73 L 21.00 6.73 L 21.00 17.27 L 3.00 17.27 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.00 6.73 L 6.67 3.06 L 24.67 3.06 L 21.00 6.73"
      }
    ],
    [
      "path",
      {
        "d": "M 21.00 6.73 L 24.67 3.06 L 24.67 13.60 L 21.00 17.27"
      }
    ]
  ]
};

export const PrimoHarsh = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.00 6.73 L 21.00 6.73 L 21.00 17.27 L 3.00 17.27 Z" />
      <path d="M 3.00 6.73 L 6.67 3.06 L 24.67 3.06 L 21.00 6.73" />
      <path d="M 21.00 6.73 L 24.67 3.06 L 24.67 13.60 L 21.00 17.27" />
      {children}
    </svg>
  );
});

export default PrimoHarsh;
