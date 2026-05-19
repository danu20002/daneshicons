import React from 'react';

export const iconData = {
  "id": "VolumePreach",
  "name": "VolumePreach",
  "category": "EY",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.25 21.86 L 6.61 20.36 L 2.50 14.94 L 2.83 8.15 L 7.46 3.16 L 14.20 2.30 L 19.92 5.99 L 21.93 12.49 L 19.29 18.76 Z"
      }
    ]
  ]
};

export const VolumePreach = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.25 21.86 L 6.61 20.36 L 2.50 14.94 L 2.83 8.15 L 7.46 3.16 L 14.20 2.30 L 19.92 5.99 L 21.93 12.49 L 19.29 18.76 Z" />
      {children}
    </svg>
  );
});

export default VolumePreach;
