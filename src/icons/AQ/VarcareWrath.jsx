import React from 'react';

export const iconData = {
  "id": "VarcareWrath",
  "name": "VarcareWrath",
  "category": "AQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.13 16.46 L 8.36 11.64 L 3.20 5.69 L 10.49 8.67 L 13.07 1.22 L 14.13 9.03 L 21.87 7.54 L 15.64 12.36 L 20.80 18.31 L 13.51 15.33 L 10.93 22.78 L 9.87 14.97 Z"
      }
    ]
  ]
};

export const VarcareWrath = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.13 16.46 L 8.36 11.64 L 3.20 5.69 L 10.49 8.67 L 13.07 1.22 L 14.13 9.03 L 21.87 7.54 L 15.64 12.36 L 20.80 18.31 L 13.51 15.33 L 10.93 22.78 L 9.87 14.97 Z" />
      {children}
    </svg>
  );
});

export default VarcareWrath;
