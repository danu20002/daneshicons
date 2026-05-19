import React from 'react';

export const iconData = {
  "id": "ObsidiForever",
  "name": "ObsidiForever",
  "category": "XH",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.80 6.46 L 17.77 12.38 L 19.99 18.65 L 13.42 17.61 L 8.14 21.65 L 7.11 15.08 L 1.63 11.31 L 7.56 8.30 L 9.45 1.92 L 14.15 6.63 Z"
      }
    ]
  ]
};

export const ObsidiForever = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.80 6.46 L 17.77 12.38 L 19.99 18.65 L 13.42 17.61 L 8.14 21.65 L 7.11 15.08 L 1.63 11.31 L 7.56 8.30 L 9.45 1.92 L 14.15 6.63 Z" />
      {children}
    </svg>
  );
});

export default ObsidiForever;
