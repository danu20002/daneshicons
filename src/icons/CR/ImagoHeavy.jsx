import React from 'react';

export const iconData = {
  "id": "ImagoHeavy",
  "name": "ImagoHeavy",
  "category": "CR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.95 9.62 L 10.03 3.84 L 18.09 6.21 L 20.05 14.38 L 13.97 20.16 L 5.91 17.79 Z"
      }
    ]
  ]
};

export const ImagoHeavy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.95 9.62 L 10.03 3.84 L 18.09 6.21 L 20.05 14.38 L 13.97 20.16 L 5.91 17.79 Z" />
      {children}
    </svg>
  );
});

export default ImagoHeavy;
