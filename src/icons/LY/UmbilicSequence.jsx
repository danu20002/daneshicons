import React from 'react';

export const iconData = {
  "id": "UmbilicSequence",
  "name": "UmbilicSequence",
  "category": "LY",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.72 12.11 7.97 9.00 Q 7.51 6.10 7.04 3.21 Q 9.96 6.86 12.88 10.50 Q 15.08 6.91 17.28 3.32 Q 15.89 8.49 14.49 13.66 Q 14.88 16.11 15.27 18.56 Q 12.37 16.89 9.47 15.22 Z"
      }
    ]
  ]
};

export const UmbilicSequence = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.72 12.11 7.97 9.00 Q 7.51 6.10 7.04 3.21 Q 9.96 6.86 12.88 10.50 Q 15.08 6.91 17.28 3.32 Q 15.89 8.49 14.49 13.66 Q 14.88 16.11 15.27 18.56 Q 12.37 16.89 9.47 15.22 Z" />
      {children}
    </svg>
  );
});

export default UmbilicSequence;
