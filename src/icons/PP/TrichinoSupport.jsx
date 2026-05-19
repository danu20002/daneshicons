import React from 'react';

export const iconData = {
  "id": "TrichinoSupport",
  "name": "TrichinoSupport",
  "category": "PP",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.95 13.03 5.99 11.98 Q 7.72 11.59 9.46 11.20 Q 12.33 7.78 15.20 4.36 Q 16.97 6.73 18.74 9.09 Q 11.53 15.01 4.32 20.92 Q 4.11 17.50 3.91 14.07 Z"
      }
    ]
  ]
};

export const TrichinoSupport = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.95 13.03 5.99 11.98 Q 7.72 11.59 9.46 11.20 Q 12.33 7.78 15.20 4.36 Q 16.97 6.73 18.74 9.09 Q 11.53 15.01 4.32 20.92 Q 4.11 17.50 3.91 14.07 Z" />
      {children}
    </svg>
  );
});

export default TrichinoSupport;
