import React from 'react';

export const iconData = {
  "id": "NucleoLaundry",
  "name": "NucleoLaundry",
  "category": "MH",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.25 2.90 L 14.36 8.93 L 20.73 9.43 L 15.65 13.30 L 17.14 19.51 L 11.89 15.87 L 6.44 19.21 L 8.29 13.09 L 3.42 8.95 L 9.81 8.81 Z"
      }
    ]
  ]
};

export const NucleoLaundry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.25 2.90 L 14.36 8.93 L 20.73 9.43 L 15.65 13.30 L 17.14 19.51 L 11.89 15.87 L 6.44 19.21 L 8.29 13.09 L 3.42 8.95 L 9.81 8.81 Z" />
      {children}
    </svg>
  );
});

export default NucleoLaundry;
