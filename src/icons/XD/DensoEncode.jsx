import React from 'react';

export const iconData = {
  "id": "DensoEncode",
  "name": "DensoEncode",
  "category": "XD",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.65 20.08 L 8.58 20.67 L 3.09 14.73 L 4.31 6.74 L 11.32 2.70 L 18.84 5.67 L 21.21 13.41 Z"
      }
    ]
  ]
};

export const DensoEncode = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.65 20.08 L 8.58 20.67 L 3.09 14.73 L 4.31 6.74 L 11.32 2.70 L 18.84 5.67 L 21.21 13.41 Z" />
      {children}
    </svg>
  );
});

export default DensoEncode;
