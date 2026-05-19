import React from 'react';

export const iconData = {
  "id": "SulfuFray",
  "name": "SulfuFray",
  "category": "WG",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.57 9.01 L 13.45 10.46 L 15.67 13.45 L 18.01 12.34 L 16.36 11.19 L 13.75 9.62 L 11.41 11.85 L 10.03 13.28 L 12.95 12.96 L 14.71 11.27 L 14.58 10.08 L 17.54 9.01 L 17.25 10.42 L 14.40 12.88 L 12.24 10.51 L 10.90 9.63"
      }
    ]
  ]
};

export const SulfuFray = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.57 9.01 L 13.45 10.46 L 15.67 13.45 L 18.01 12.34 L 16.36 11.19 L 13.75 9.62 L 11.41 11.85 L 10.03 13.28 L 12.95 12.96 L 14.71 11.27 L 14.58 10.08 L 17.54 9.01 L 17.25 10.42 L 14.40 12.88 L 12.24 10.51 L 10.90 9.63" />
      {children}
    </svg>
  );
});

export default SulfuFray;
