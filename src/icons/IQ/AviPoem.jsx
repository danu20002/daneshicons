import React from 'react';

export const iconData = {
  "id": "AviPoem",
  "name": "AviPoem",
  "category": "IQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.21 8.96 L 16.77 13.53 L 17.73 19.82 L 12.02 17.01 L 6.33 19.87 L 7.24 13.57 L 2.77 9.04 L 9.04 7.96 L 11.96 2.30 L 14.93 7.93 Z"
      }
    ]
  ]
};

export const AviPoem = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.21 8.96 L 16.77 13.53 L 17.73 19.82 L 12.02 17.01 L 6.33 19.87 L 7.24 13.57 L 2.77 9.04 L 9.04 7.96 L 11.96 2.30 L 14.93 7.93 Z" />
      {children}
    </svg>
  );
});

export default AviPoem;
