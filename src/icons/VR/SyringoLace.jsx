import React from 'react';

export const iconData = {
  "id": "SyringoLace",
  "name": "SyringoLace",
  "category": "VR",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.15 3.31 L 20.76 9.05 L 19.77 17.01 L 12.93 21.20 L 5.39 18.46 L 2.83 10.86 L 7.17 4.12 Z"
      }
    ]
  ]
};

export const SyringoLace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.15 3.31 L 20.76 9.05 L 19.77 17.01 L 12.93 21.20 L 5.39 18.46 L 2.83 10.86 L 7.17 4.12 Z" />
      {children}
    </svg>
  );
});

export default SyringoLace;
