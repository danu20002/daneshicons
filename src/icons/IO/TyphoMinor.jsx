import React from 'react';

export const iconData = {
  "id": "TyphoMinor",
  "name": "TyphoMinor",
  "category": "IO",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.99 19.06 L 9.59 20.30 L 4.01 15.29 L 4.45 7.80 L 10.57 3.48 L 17.77 5.57 L 20.63 12.50 Z"
      }
    ]
  ]
};

export const TyphoMinor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.99 19.06 L 9.59 20.30 L 4.01 15.29 L 4.45 7.80 L 10.57 3.48 L 17.77 5.57 L 20.63 12.50 Z" />
      {children}
    </svg>
  );
});

export default TyphoMinor;
