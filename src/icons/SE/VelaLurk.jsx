import React from 'react';

export const iconData = {
  "id": "VelaLurk",
  "name": "VelaLurk",
  "category": "SE",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.21 13.53 L 14.44 14.47 L 13.39 21.23 L 10.40 15.08 L 3.65 16.18 L 8.57 11.43 L 5.45 5.35 L 11.48 8.57 L 16.30 3.71 L 15.11 10.45 Z"
      }
    ]
  ]
};

export const VelaLurk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.21 13.53 L 14.44 14.47 L 13.39 21.23 L 10.40 15.08 L 3.65 16.18 L 8.57 11.43 L 5.45 5.35 L 11.48 8.57 L 16.30 3.71 L 15.11 10.45 Z" />
      {children}
    </svg>
  );
});

export default VelaLurk;
