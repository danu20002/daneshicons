import React from 'react';

export const iconData = {
  "id": "StereoGrowth",
  "name": "StereoGrowth",
  "category": "RJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.64 12.53 L 17.74 18.48 L 11.47 20.64 L 5.52 17.74 L 3.36 11.47 L 6.26 5.52 L 12.53 3.36 L 18.48 6.26 Z"
      }
    ]
  ]
};

export const StereoGrowth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.64 12.53 L 17.74 18.48 L 11.47 20.64 L 5.52 17.74 L 3.36 11.47 L 6.26 5.52 L 12.53 3.36 L 18.48 6.26 Z" />
      {children}
    </svg>
  );
});

export default StereoGrowth;
