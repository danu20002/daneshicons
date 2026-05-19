import React from 'react';

export const iconData = {
  "id": "SeroSpec",
  "name": "SeroSpec",
  "category": "EO",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.49 12.00 Q 15.13 15.13 12.00 21.49"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 21.49 Q 8.87 15.13 2.51 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.51 12.00 Q 8.87 8.87 12.00 2.51"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.51 Q 15.13 8.87 21.49 12.00"
      }
    ]
  ]
};

export const SeroSpec = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.49 12.00 Q 15.13 15.13 12.00 21.49" />
      <path d="M 12.00 21.49 Q 8.87 15.13 2.51 12.00" />
      <path d="M 2.51 12.00 Q 8.87 8.87 12.00 2.51" />
      <path d="M 12.00 2.51 Q 15.13 8.87 21.49 12.00" />
      {children}
    </svg>
  );
});

export default SeroSpec;
