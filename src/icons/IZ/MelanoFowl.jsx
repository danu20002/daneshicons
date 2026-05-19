import React from 'react';

export const iconData = {
  "id": "MelanoFowl",
  "name": "MelanoFowl",
  "category": "IZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.63 11.97 L 21.92 19.57 L 17.17 8.41 L 21.03 14.86 L 20.23 12.33"
      }
    ],
    [
      "path",
      {
        "d": "M 21.08 15.29 A 3.71 3.41 135 0 0 14.46 3.20"
      }
    ]
  ]
};

export const MelanoFowl = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.63 11.97 L 21.92 19.57 L 17.17 8.41 L 21.03 14.86 L 20.23 12.33" />
      <path d="M 21.08 15.29 A 3.71 3.41 135 0 0 14.46 3.20" />
      {children}
    </svg>
  );
});

export default MelanoFowl;
