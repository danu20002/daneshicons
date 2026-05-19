import React from 'react';

export const iconData = {
  "id": "VerificaBuffer",
  "name": "VerificaBuffer",
  "category": "SU",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.32 19.00 L 2.99 11.93 L 6.44 4.91 L 14.08 3.23 L 20.15 8.15 L 20.09 15.97 L 13.94 20.80 Z"
      }
    ]
  ]
};

export const VerificaBuffer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.32 19.00 L 2.99 11.93 L 6.44 4.91 L 14.08 3.23 L 20.15 8.15 L 20.09 15.97 L 13.94 20.80 Z" />
      {children}
    </svg>
  );
});

export default VerificaBuffer;
