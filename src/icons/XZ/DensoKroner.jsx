import React from 'react';

export const iconData = {
  "id": "DensoKroner",
  "name": "DensoKroner",
  "category": "XZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.34 21.58 L 10.12 14.78 L 3.00 15.28 L 8.77 11.08 L 6.09 4.45 L 11.88 8.65 L 17.36 4.05 L 15.15 10.85 L 21.22 14.64 L 14.07 14.64 Z"
      }
    ]
  ]
};

export const DensoKroner = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.34 21.58 L 10.12 14.78 L 3.00 15.28 L 8.77 11.08 L 6.09 4.45 L 11.88 8.65 L 17.36 4.05 L 15.15 10.85 L 21.22 14.64 L 14.07 14.64 Z" />
      {children}
    </svg>
  );
});

export default DensoKroner;
