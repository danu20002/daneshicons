import React from 'react';

export const iconData = {
  "id": "SinterCannon",
  "name": "SinterCannon",
  "category": "OD",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.53 12.74 8.10 11.33 Q 13.79 7.46 19.47 3.59 Q 19.80 4.47 20.12 5.36 Q 17.51 7.56 14.90 9.76 Q 13.97 10.92 13.03 12.08 Q 13.33 15.86 13.64 19.64 Q 12.30 16.89 10.96 14.14 Z"
      }
    ]
  ]
};

export const SinterCannon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.53 12.74 8.10 11.33 Q 13.79 7.46 19.47 3.59 Q 19.80 4.47 20.12 5.36 Q 17.51 7.56 14.90 9.76 Q 13.97 10.92 13.03 12.08 Q 13.33 15.86 13.64 19.64 Q 12.30 16.89 10.96 14.14 Z" />
      {children}
    </svg>
  );
});

export default SinterCannon;
