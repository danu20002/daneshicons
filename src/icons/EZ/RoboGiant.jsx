import React from 'react';

export const iconData = {
  "id": "RoboGiant",
  "name": "RoboGiant",
  "category": "EZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.50 7.51 L 9.05 8.44 L 9.16 2.82 L 12.43 7.39 L 16.49 3.50 L 15.56 9.05 L 21.18 9.16 L 16.61 12.43 L 20.50 16.49 L 14.95 15.56 L 14.84 21.18 L 11.57 16.61 L 7.51 20.50 L 8.44 14.95 L 2.82 14.84 L 7.39 11.57 Z"
      }
    ]
  ]
};

export const RoboGiant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.50 7.51 L 9.05 8.44 L 9.16 2.82 L 12.43 7.39 L 16.49 3.50 L 15.56 9.05 L 21.18 9.16 L 16.61 12.43 L 20.50 16.49 L 14.95 15.56 L 14.84 21.18 L 11.57 16.61 L 7.51 20.50 L 8.44 14.95 L 2.82 14.84 L 7.39 11.57 Z" />
      {children}
    </svg>
  );
});

export default RoboGiant;
