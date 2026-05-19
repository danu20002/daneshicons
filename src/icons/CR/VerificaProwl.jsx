import React from 'react';

export const iconData = {
  "id": "VerificaProwl",
  "name": "VerificaProwl",
  "category": "CR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.92 16.49 L 11.65 3.63 L 19.42 15.88 Z"
      }
    ]
  ]
};

export const VerificaProwl = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.92 16.49 L 11.65 3.63 L 19.42 15.88 Z" />
      {children}
    </svg>
  );
});

export default VerificaProwl;
