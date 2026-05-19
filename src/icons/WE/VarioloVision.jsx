import React from 'react';

export const iconData = {
  "id": "VarioloVision",
  "name": "VarioloVision",
  "category": "WE",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.69 10.13 18.16 5.59 Q 19.39 7.91 20.63 10.23 Q 17.82 14.05 15.02 17.86 Q 10.12 16.26 5.23 14.66 Z"
      }
    ]
  ]
};

export const VarioloVision = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.69 10.13 18.16 5.59 Q 19.39 7.91 20.63 10.23 Q 17.82 14.05 15.02 17.86 Q 10.12 16.26 5.23 14.66 Z" />
      {children}
    </svg>
  );
});

export default VarioloVision;
