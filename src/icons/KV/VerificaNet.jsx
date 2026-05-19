import React from 'react';

export const iconData = {
  "id": "VerificaNet",
  "name": "VerificaNet",
  "category": "KV",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.16 11.05 L 8.05 9.65 L 5.99 2.94 L 11.37 7.45 L 15.34 1.65 L 15.17 8.67 L 22.18 8.15 L 16.57 12.40 L 21.35 17.56 L 14.54 15.83 L 13.49 22.78 L 10.59 16.37 L 4.50 19.88 L 7.70 13.62 Z"
      }
    ]
  ]
};

export const VerificaNet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.16 11.05 L 8.05 9.65 L 5.99 2.94 L 11.37 7.45 L 15.34 1.65 L 15.17 8.67 L 22.18 8.15 L 16.57 12.40 L 21.35 17.56 L 14.54 15.83 L 13.49 22.78 L 10.59 16.37 L 4.50 19.88 L 7.70 13.62 Z" />
      {children}
    </svg>
  );
});

export default VerificaNet;
