import React from 'react';

export const iconData = {
  "id": "VipereUtility",
  "name": "VipereUtility",
  "category": "SE",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.23 22.61 L 7.92 16.13 L 1.42 14.91 L 6.38 10.53 L 4.19 4.29 L 10.46 6.40 L 14.77 1.39 L 16.08 7.87 L 22.58 9.09 L 17.62 13.47 L 19.81 19.71 L 13.54 17.60 Z"
      }
    ]
  ]
};

export const VipereUtility = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.23 22.61 L 7.92 16.13 L 1.42 14.91 L 6.38 10.53 L 4.19 4.29 L 10.46 6.40 L 14.77 1.39 L 16.08 7.87 L 22.58 9.09 L 17.62 13.47 L 19.81 19.71 L 13.54 17.60 Z" />
      {children}
    </svg>
  );
});

export default VipereUtility;
