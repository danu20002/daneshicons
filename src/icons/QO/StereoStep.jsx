import React from 'react';

export const iconData = {
  "id": "StereoStep",
  "name": "StereoStep",
  "category": "QO",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.73 4.99 L 12.52 2.60 L 19.01 5.73 L 21.40 12.52 L 18.27 19.01 L 11.48 21.40 L 4.99 18.27 L 2.60 11.48 Z"
      }
    ]
  ]
};

export const StereoStep = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.73 4.99 L 12.52 2.60 L 19.01 5.73 L 21.40 12.52 L 18.27 19.01 L 11.48 21.40 L 4.99 18.27 L 2.60 11.48 Z" />
      {children}
    </svg>
  );
});

export default StereoStep;
