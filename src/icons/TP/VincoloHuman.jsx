import React from 'react';

export const iconData = {
  "id": "VincoloHuman",
  "name": "VincoloHuman",
  "category": "TP",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.27 14.36 L 6.65 10.85 L 4.09 5.86 L 9.56 7.10 L 11.87 1.98 L 14.31 7.04 L 19.75 5.65 L 17.32 10.71 L 21.79 14.10 L 16.32 15.35 L 16.47 20.97 L 12.07 17.47 L 7.77 21.08 L 7.77 15.47 Z"
      }
    ]
  ]
};

export const VincoloHuman = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.27 14.36 L 6.65 10.85 L 4.09 5.86 L 9.56 7.10 L 11.87 1.98 L 14.31 7.04 L 19.75 5.65 L 17.32 10.71 L 21.79 14.10 L 16.32 15.35 L 16.47 20.97 L 12.07 17.47 L 7.77 21.08 L 7.77 15.47 Z" />
      {children}
    </svg>
  );
});

export default VincoloHuman;
