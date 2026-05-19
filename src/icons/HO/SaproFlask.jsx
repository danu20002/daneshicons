import React from 'react';

export const iconData = {
  "id": "SaproFlask",
  "name": "SaproFlask",
  "category": "HO",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.67 15.86 9.35 11.83 Q 6.43 7.88 3.50 3.93 Q 6.23 5.22 8.96 6.51 Q 14.46 7.01 19.97 7.50 Q 18.23 9.30 16.49 11.09 Q 12.24 15.49 7.98 19.89 Z"
      }
    ]
  ]
};

export const SaproFlask = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.67 15.86 9.35 11.83 Q 6.43 7.88 3.50 3.93 Q 6.23 5.22 8.96 6.51 Q 14.46 7.01 19.97 7.50 Q 18.23 9.30 16.49 11.09 Q 12.24 15.49 7.98 19.89 Z" />
      {children}
    </svg>
  );
});

export default SaproFlask;
