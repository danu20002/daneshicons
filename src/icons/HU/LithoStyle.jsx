import React from 'react';

export const iconData = {
  "id": "LithoStyle",
  "name": "LithoStyle",
  "category": "HU",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.13 4.02 L 17.69 6.35 L 19.97 12.93 L 16.24 18.81 L 9.32 19.56 L 4.42 14.62 L 5.22 7.71 Z"
      }
    ]
  ]
};

export const LithoStyle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.13 4.02 L 17.69 6.35 L 19.97 12.93 L 16.24 18.81 L 9.32 19.56 L 4.42 14.62 L 5.22 7.71 Z" />
      {children}
    </svg>
  );
});

export default LithoStyle;
