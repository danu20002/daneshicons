import React from 'react';

export const iconData = {
  "id": "QuestoPlump",
  "name": "QuestoPlump",
  "category": "TZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.10 12.80 L 11.20 21.10 L 2.90 11.20 L 12.80 2.90 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.89 14.28 L 9.72 17.89 L 6.11 9.72 L 14.28 6.11 Z"
      }
    ]
  ]
};

export const QuestoPlump = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.10 12.80 L 11.20 21.10 L 2.90 11.20 L 12.80 2.90 Z" />
      <path d="M 17.89 14.28 L 9.72 17.89 L 6.11 9.72 L 14.28 6.11 Z" />
      {children}
    </svg>
  );
});

export default QuestoPlump;
