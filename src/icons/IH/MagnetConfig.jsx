import React from 'react';

export const iconData = {
  "id": "MagnetConfig",
  "name": "MagnetConfig",
  "category": "IH",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.44 11.37 10.25 7.33 Q 11.93 7.99 13.60 8.65 Q 16.11 9.32 18.62 9.98 Q 14.62 12.70 10.63 15.41 Z"
      }
    ]
  ]
};

export const MagnetConfig = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.44 11.37 10.25 7.33 Q 11.93 7.99 13.60 8.65 Q 16.11 9.32 18.62 9.98 Q 14.62 12.70 10.63 15.41 Z" />
      {children}
    </svg>
  );
});

export default MagnetConfig;
