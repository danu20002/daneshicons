import React from 'react';

export const iconData = {
  "id": "VicinoPrior",
  "name": "VicinoPrior",
  "category": "BJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.66 1.46 L 15.37 7.04 L 21.92 8.42 L 17.76 13.67 L 18.47 20.33 L 12.19 17.99 L 6.08 20.73 L 6.36 14.04 L 1.87 9.07 L 8.32 7.27 Z"
      }
    ]
  ]
};

export const VicinoPrior = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.66 1.46 L 15.37 7.04 L 21.92 8.42 L 17.76 13.67 L 18.47 20.33 L 12.19 17.99 L 6.08 20.73 L 6.36 14.04 L 1.87 9.07 L 8.32 7.27 Z" />
      {children}
    </svg>
  );
});

export default VicinoPrior;
