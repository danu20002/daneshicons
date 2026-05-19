import React from 'react';

export const iconData = {
  "id": "StoloniVouch",
  "name": "StoloniVouch",
  "category": "XY",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.98 19.48 L 7.52 19.19 L 3.53 11.71 L 8.02 4.52 L 16.48 4.81 L 20.47 12.29 Z"
      }
    ]
  ]
};

export const StoloniVouch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.98 19.48 L 7.52 19.19 L 3.53 11.71 L 8.02 4.52 L 16.48 4.81 L 20.47 12.29 Z" />
      {children}
    </svg>
  );
});

export default StoloniVouch;
