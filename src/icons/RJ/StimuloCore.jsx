import React from 'react';

export const iconData = {
  "id": "StimuloCore",
  "name": "StimuloCore",
  "category": "RJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.27 18.84 L 3.21 13.56 L 4.27 7.55 L 8.94 3.62 L 15.04 3.61 L 19.72 7.53 L 20.79 13.54 L 17.74 18.83 L 12.01 20.92 Z"
      }
    ]
  ]
};

export const StimuloCore = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.27 18.84 L 3.21 13.56 L 4.27 7.55 L 8.94 3.62 L 15.04 3.61 L 19.72 7.53 L 20.79 13.54 L 17.74 18.83 L 12.01 20.92 Z" />
      {children}
    </svg>
  );
});

export default StimuloCore;
