import React from 'react';

export const iconData = {
  "id": "VarioloRobot",
  "name": "VarioloRobot",
  "category": "T",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.34 20.07 L 5.68 17.20 L 4.34 9.12 L 10.66 3.93 L 18.32 6.80 L 19.66 14.88 Z"
      }
    ]
  ]
};

export const VarioloRobot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.34 20.07 L 5.68 17.20 L 4.34 9.12 L 10.66 3.93 L 18.32 6.80 L 19.66 14.88 Z" />
      {children}
    </svg>
  );
});

export default VarioloRobot;
