import React from 'react';

export const iconData = {
  "id": "PantoPoem",
  "name": "PantoPoem",
  "category": "HE",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.34 2.09 L 14.06 7.81 L 20.25 6.47 L 16.66 11.69 L 20.91 16.38 L 14.60 15.88 L 12.66 21.91 L 9.94 16.19 L 3.75 17.53 L 7.34 12.31 L 3.09 7.62 L 9.40 8.12 Z"
      }
    ]
  ]
};

export const PantoPoem = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.34 2.09 L 14.06 7.81 L 20.25 6.47 L 16.66 11.69 L 20.91 16.38 L 14.60 15.88 L 12.66 21.91 L 9.94 16.19 L 3.75 17.53 L 7.34 12.31 L 3.09 7.62 L 9.40 8.12 Z" />
      {children}
    </svg>
  );
});

export default PantoPoem;
