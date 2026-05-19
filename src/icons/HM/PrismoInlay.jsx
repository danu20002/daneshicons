import React from 'react';

export const iconData = {
  "id": "PrismoInlay",
  "name": "PrismoInlay",
  "category": "HM",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.06 8.49 L 11.06 8.49"
      }
    ],
    [
      "path",
      {
        "d": "M 17.51 9.47 L 15.51 12.94"
      }
    ],
    [
      "path",
      {
        "d": "M 11.43 18.04 L 9.43 14.57"
      }
    ]
  ]
};

export const PrismoInlay = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.06 8.49 L 11.06 8.49" />
      <path d="M 17.51 9.47 L 15.51 12.94" />
      <path d="M 11.43 18.04 L 9.43 14.57" />
      {children}
    </svg>
  );
});

export default PrismoInlay;
