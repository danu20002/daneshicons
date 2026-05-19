import React from 'react';

export const iconData = {
  "id": "VolieraClasp",
  "name": "VolieraClasp",
  "category": "RU",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.20 14.45 5.20 8.07 Q 7.73 6.00 10.26 3.93 Q 13.31 3.68 16.35 3.44 Q 15.79 4.63 15.24 5.83 Q 16.19 5.59 17.15 5.36 Q 17.50 5.65 17.86 5.94 Q 13.53 13.39 9.20 20.84 Z"
      }
    ]
  ]
};

export const VolieraClasp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.20 14.45 5.20 8.07 Q 7.73 6.00 10.26 3.93 Q 13.31 3.68 16.35 3.44 Q 15.79 4.63 15.24 5.83 Q 16.19 5.59 17.15 5.36 Q 17.50 5.65 17.86 5.94 Q 13.53 13.39 9.20 20.84 Z" />
      {children}
    </svg>
  );
});

export default VolieraClasp;
