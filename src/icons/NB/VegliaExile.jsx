import React from 'react';

export const iconData = {
  "id": "VegliaExile",
  "name": "VegliaExile",
  "category": "NB",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.23 5.10 L 15.15 11.78 L 21.11 17.70 L 13.18 14.93 L 9.39 22.42 L 9.58 14.03 L 1.28 12.74 L 9.32 10.32 L 7.98 2.04 L 12.77 8.94 Z"
      }
    ]
  ]
};

export const VegliaExile = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.23 5.10 L 15.15 11.78 L 21.11 17.70 L 13.18 14.93 L 9.39 22.42 L 9.58 14.03 L 1.28 12.74 L 9.32 10.32 L 7.98 2.04 L 12.77 8.94 Z" />
      {children}
    </svg>
  );
});

export default VegliaExile;
