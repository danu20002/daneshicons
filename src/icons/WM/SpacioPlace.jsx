import React from 'react';

export const iconData = {
  "id": "SpacioPlace",
  "name": "SpacioPlace",
  "category": "WM",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.49 14.40 L 16.31 19.70 L 9.60 20.49 L 4.30 16.31 L 3.51 9.60 L 7.69 4.30 L 14.40 3.51 L 19.70 7.69 Z"
      }
    ]
  ]
};

export const SpacioPlace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.49 14.40 L 16.31 19.70 L 9.60 20.49 L 4.30 16.31 L 3.51 9.60 L 7.69 4.30 L 14.40 3.51 L 19.70 7.69 Z" />
      {children}
    </svg>
  );
});

export default SpacioPlace;
