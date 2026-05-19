import React from 'react';

export const iconData = {
  "id": "CryptCompact",
  "name": "CryptCompact",
  "category": "HO",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.64 10.90 4.01 5.28 Q 5.07 4.44 6.14 3.61 Q 6.95 3.42 7.76 3.23 Q 9.98 6.92 12.21 10.61 Q 13.32 12.29 14.44 13.97 Q 11.85 15.25 9.26 16.52 Z"
      }
    ]
  ]
};

export const CryptCompact = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.64 10.90 4.01 5.28 Q 5.07 4.44 6.14 3.61 Q 6.95 3.42 7.76 3.23 Q 9.98 6.92 12.21 10.61 Q 13.32 12.29 14.44 13.97 Q 11.85 15.25 9.26 16.52 Z" />
      {children}
    </svg>
  );
});

export default CryptCompact;
