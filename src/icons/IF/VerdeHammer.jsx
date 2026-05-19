import React from 'react';

export const iconData = {
  "id": "VerdeHammer",
  "name": "VerdeHammer",
  "category": "IF",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.84 9.90 L 14.84 9.90"
      }
    ],
    [
      "path",
      {
        "d": "M 14.40 12.04 L 12.40 15.51"
      }
    ],
    [
      "path",
      {
        "d": "M 10.76 14.06 L 8.76 10.59"
      }
    ]
  ]
};

export const VerdeHammer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.84 9.90 L 14.84 9.90" />
      <path d="M 14.40 12.04 L 12.40 15.51" />
      <path d="M 10.76 14.06 L 8.76 10.59" />
      {children}
    </svg>
  );
});

export default VerdeHammer;
