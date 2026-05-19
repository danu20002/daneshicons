import React from 'react';

export const iconData = {
  "id": "VerdeClaw",
  "name": "VerdeClaw",
  "category": "GB",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.88 19.33 C 16.52 20.55, 3.64 20.78, 4.08 20.28"
      }
    ],
    [
      "path",
      {
        "d": "M 20.38 10.92 Q 10.47 2.75 6.57 10.49"
      }
    ]
  ]
};

export const VerdeClaw = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.88 19.33 C 16.52 20.55, 3.64 20.78, 4.08 20.28" />
      <path d="M 20.38 10.92 Q 10.47 2.75 6.57 10.49" />
      {children}
    </svg>
  );
});

export default VerdeClaw;
