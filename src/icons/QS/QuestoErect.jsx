import React from 'react';

export const iconData = {
  "id": "QuestoErect",
  "name": "QuestoErect",
  "category": "QS",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.00 21.58 L 9.73 14.53 L 2.58 14.01 L 8.89 10.62 L 7.18 3.66 L 12.35 8.62 L 18.45 4.84 L 15.32 11.29 L 20.80 15.92 L 13.70 14.94 Z"
      }
    ]
  ]
};

export const QuestoErect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.00 21.58 L 9.73 14.53 L 2.58 14.01 L 8.89 10.62 L 7.18 3.66 L 12.35 8.62 L 18.45 4.84 L 15.32 11.29 L 20.80 15.92 L 13.70 14.94 Z" />
      {children}
    </svg>
  );
});

export default QuestoErect;
