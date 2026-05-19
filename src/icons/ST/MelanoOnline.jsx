import React from 'react';

export const iconData = {
  "id": "MelanoOnline",
  "name": "MelanoOnline",
  "category": "ST",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.25 10.03 L 18.68 17.23 L 12.08 20.48 L 5.42 17.35 L 3.71 10.19 L 8.24 4.39 L 15.61 4.32 Z"
      }
    ]
  ]
};

export const MelanoOnline = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.25 10.03 L 18.68 17.23 L 12.08 20.48 L 5.42 17.35 L 3.71 10.19 L 8.24 4.39 L 15.61 4.32 Z" />
      {children}
    </svg>
  );
});

export default MelanoOnline;
