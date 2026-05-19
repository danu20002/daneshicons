import React from 'react';

export const iconData = {
  "id": "MacroScan",
  "name": "MacroScan",
  "category": "X",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.33 4.20 L 15.37 10.38 L 21.42 12.71 L 15.09 14.11 L 16.09 20.52 L 11.72 15.73 L 6.67 19.80 L 8.63 13.62 L 2.58 11.29 L 8.91 9.89 L 7.91 3.48 L 12.28 8.27 Z"
      }
    ]
  ]
};

export const MacroScan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.33 4.20 L 15.37 10.38 L 21.42 12.71 L 15.09 14.11 L 16.09 20.52 L 11.72 15.73 L 6.67 19.80 L 8.63 13.62 L 2.58 11.29 L 8.91 9.89 L 7.91 3.48 L 12.28 8.27 Z" />
      {children}
    </svg>
  );
});

export default MacroScan;
