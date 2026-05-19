import React from 'react';

export const iconData = {
  "id": "DilithioZone",
  "name": "DilithioZone",
  "category": "JJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.35 21.31 L 10.71 15.47 L 5.67 18.83 L 8.64 13.55 L 2.69 12.35 L 8.53 10.71 L 5.17 5.67 L 10.45 8.64 L 11.65 2.69 L 13.29 8.53 L 18.33 5.17 L 15.36 10.45 L 21.31 11.65 L 15.47 13.29 L 18.83 18.33 L 13.55 15.36 Z"
      }
    ]
  ]
};

export const DilithioZone = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.35 21.31 L 10.71 15.47 L 5.67 18.83 L 8.64 13.55 L 2.69 12.35 L 8.53 10.71 L 5.17 5.67 L 10.45 8.64 L 11.65 2.69 L 13.29 8.53 L 18.33 5.17 L 15.36 10.45 L 21.31 11.65 L 15.47 13.29 L 18.83 18.33 L 13.55 15.36 Z" />
      {children}
    </svg>
  );
});

export default DilithioZone;
