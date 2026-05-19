import React from 'react';

export const iconData = {
  "id": "SpectroRemark",
  "name": "SpectroRemark",
  "category": "EB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.05 6.98 L 20.95 6.98 L 20.95 17.02 L 3.05 17.02 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.05 6.98 L 6.40 3.63 L 24.30 3.63 L 20.95 6.98"
      }
    ],
    [
      "path",
      {
        "d": "M 20.95 6.98 L 24.30 3.63 L 24.30 13.67 L 20.95 17.02"
      }
    ]
  ]
};

export const SpectroRemark = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.05 6.98 L 20.95 6.98 L 20.95 17.02 L 3.05 17.02 Z" />
      <path d="M 3.05 6.98 L 6.40 3.63 L 24.30 3.63 L 20.95 6.98" />
      <path d="M 20.95 6.98 L 24.30 3.63 L 24.30 13.67 L 20.95 17.02" />
      {children}
    </svg>
  );
});

export default SpectroRemark;
