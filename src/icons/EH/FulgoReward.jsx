import React from 'react';

export const iconData = {
  "id": "FulgoReward",
  "name": "FulgoReward",
  "category": "EH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.06 7.54 L 10.82 8.47 L 16.46 3.06 L 15.53 10.82 L 20.94 16.46 L 13.18 15.53 L 7.54 20.94 L 8.47 13.18 Z"
      }
    ]
  ]
};

export const FulgoReward = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.06 7.54 L 10.82 8.47 L 16.46 3.06 L 15.53 10.82 L 20.94 16.46 L 13.18 15.53 L 7.54 20.94 L 8.47 13.18 Z" />
      {children}
    </svg>
  );
});

export default FulgoReward;
