import React from 'react';

export const iconData = {
  "id": "VividoReward",
  "name": "VividoReward",
  "category": "KD",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.09 5.26 L 15.67 11.81 L 18.74 18.09 L 12.19 15.67 L 5.91 18.74 L 8.33 12.19 L 5.26 5.91 L 11.81 8.33 Z"
      }
    ]
  ]
};

export const VividoReward = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.09 5.26 L 15.67 11.81 L 18.74 18.09 L 12.19 15.67 L 5.91 18.74 L 8.33 12.19 L 5.26 5.91 L 11.81 8.33 Z" />
      {children}
    </svg>
  );
});

export default VividoReward;
