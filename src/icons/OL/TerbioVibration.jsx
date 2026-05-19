import React from 'react';

export const iconData = {
  "id": "TerbioVibration",
  "name": "TerbioVibration",
  "category": "OL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.55 4.29 L 15.72 4.81 L 19.71 9.55 L 19.19 15.72 L 14.45 19.71 L 8.28 19.19 L 4.29 14.45 L 4.81 8.28 Z"
      }
    ]
  ]
};

export const TerbioVibration = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.55 4.29 L 15.72 4.81 L 19.71 9.55 L 19.19 15.72 L 14.45 19.71 L 8.28 19.19 L 4.29 14.45 L 4.81 8.28 Z" />
      {children}
    </svg>
  );
});

export default TerbioVibration;
