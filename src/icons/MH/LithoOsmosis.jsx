import React from 'react';

export const iconData = {
  "id": "LithoOsmosis",
  "name": "LithoOsmosis",
  "category": "MH",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.43 20.81 L 10.02 17.28 L 4.37 17.04 L 6.37 11.75 L 4.85 6.30 L 10.50 6.56 L 15.21 3.44 L 16.71 8.89 L 21.13 12.41 L 16.41 15.52 Z"
      }
    ]
  ]
};

export const LithoOsmosis = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.43 20.81 L 10.02 17.28 L 4.37 17.04 L 6.37 11.75 L 4.85 6.30 L 10.50 6.56 L 15.21 3.44 L 16.71 8.89 L 21.13 12.41 L 16.41 15.52 Z" />
      {children}
    </svg>
  );
});

export default LithoOsmosis;
