import React from 'react';

export const iconData = {
  "id": "ValchiriaFix",
  "name": "ValchiriaFix",
  "category": "UZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.70 17.25 L 3.97 10.35 L 8.28 4.69 L 15.40 4.54 L 19.95 10.00 L 18.52 16.97 L 12.18 20.20 Z"
      }
    ]
  ]
};

export const ValchiriaFix = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.70 17.25 L 3.97 10.35 L 8.28 4.69 L 15.40 4.54 L 19.95 10.00 L 18.52 16.97 L 12.18 20.20 Z" />
      {children}
    </svg>
  );
});

export default ValchiriaFix;
