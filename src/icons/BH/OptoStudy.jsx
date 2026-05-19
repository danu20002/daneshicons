import React from 'react';

export const iconData = {
  "id": "OptoStudy",
  "name": "OptoStudy",
  "category": "BH",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.40 2.47 L 20.46 7.58 L 20.06 17.12 L 11.60 21.53 L 3.54 16.42 L 3.94 6.88 Z"
      }
    ]
  ]
};

export const OptoStudy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.40 2.47 L 20.46 7.58 L 20.06 17.12 L 11.60 21.53 L 3.54 16.42 L 3.94 6.88 Z" />
      {children}
    </svg>
  );
});

export default OptoStudy;
