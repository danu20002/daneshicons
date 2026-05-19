import React from 'react';

export const iconData = {
  "id": "UsignolMode",
  "name": "UsignolMode",
  "category": "FJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.58 8.90 7.97 3.77 Q 13.49 5.08 19.02 6.39 Q 20.01 9.45 21.00 12.52 Q 18.73 12.48 16.47 12.45 Q 18.40 13.90 20.33 15.35 Q 11.76 14.69 3.20 14.02 Z"
      }
    ]
  ]
};

export const UsignolMode = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.58 8.90 7.97 3.77 Q 13.49 5.08 19.02 6.39 Q 20.01 9.45 21.00 12.52 Q 18.73 12.48 16.47 12.45 Q 18.40 13.90 20.33 15.35 Q 11.76 14.69 3.20 14.02 Z" />
      {children}
    </svg>
  );
});

export default UsignolMode;
