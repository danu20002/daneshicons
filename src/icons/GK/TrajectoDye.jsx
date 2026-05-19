import React from 'react';

export const iconData = {
  "id": "TrajectoDye",
  "name": "TrajectoDye",
  "category": "GK",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.60 4.30 L 19.97 10.41 L 17.36 18.10 L 9.40 19.70 L 4.03 13.59 L 6.64 5.90 Z"
      }
    ]
  ]
};

export const TrajectoDye = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.60 4.30 L 19.97 10.41 L 17.36 18.10 L 9.40 19.70 L 4.03 13.59 L 6.64 5.90 Z" />
      {children}
    </svg>
  );
});

export default TrajectoDye;
