import React from 'react';

export const iconData = {
  "id": "UnctoSlice",
  "name": "UnctoSlice",
  "category": "WL",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.69 5.34 L 20.11 12.73 L 15.42 19.39 L 7.31 18.66 L 3.89 11.27 L 8.58 4.61 Z"
      }
    ]
  ]
};

export const UnctoSlice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.69 5.34 L 20.11 12.73 L 15.42 19.39 L 7.31 18.66 L 3.89 11.27 L 8.58 4.61 Z" />
      {children}
    </svg>
  );
});

export default UnctoSlice;
