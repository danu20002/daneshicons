import React from 'react';

export const iconData = {
  "id": "ImagoHilt",
  "name": "ImagoHilt",
  "category": "BR",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.90 16.54 L 12.38 20.20"
      }
    ],
    [
      "path",
      {
        "d": "M 3.75 8.58 L 2.53 15.41 L 15.26 12.74 L 12.66 18.77 L 14.45 2.17 L 14.82 10.38 L 12.70 9.44 L 3.78 3.55"
      }
    ]
  ]
};

export const ImagoHilt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.90 16.54 L 12.38 20.20" />
      <path d="M 3.75 8.58 L 2.53 15.41 L 15.26 12.74 L 12.66 18.77 L 14.45 2.17 L 14.82 10.38 L 12.70 9.44 L 3.78 3.55" />
      {children}
    </svg>
  );
});

export default ImagoHilt;
