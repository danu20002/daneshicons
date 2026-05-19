import React from 'react';

export const iconData = {
  "id": "SedimenFan",
  "name": "SedimenFan",
  "category": "LF",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.73 12.00 L 16.27 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.27 12.00 L 11.35 9.04"
      }
    ],
    [
      "path",
      {
        "d": "M 16.27 12.00 L 11.35 14.96"
      }
    ]
  ]
};

export const SedimenFan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.73 12.00 L 16.27 12.00" />
      <path d="M 16.27 12.00 L 11.35 9.04" />
      <path d="M 16.27 12.00 L 11.35 14.96" />
      {children}
    </svg>
  );
});

export default SedimenFan;
