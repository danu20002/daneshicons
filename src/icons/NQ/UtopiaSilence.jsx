import React from 'react';

export const iconData = {
  "id": "UtopiaSilence",
  "name": "UtopiaSilence",
  "category": "NQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.00 19.14 L 8.91 19.58 L 4.15 14.31 L 5.30 7.30 L 11.49 3.83 L 18.07 6.51 L 20.08 13.32 Z"
      }
    ]
  ]
};

export const UtopiaSilence = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.00 19.14 L 8.91 19.58 L 4.15 14.31 L 5.30 7.30 L 11.49 3.83 L 18.07 6.51 L 20.08 13.32 Z" />
      {children}
    </svg>
  );
});

export default UtopiaSilence;
