import React from 'react';

export const iconData = {
  "id": "RigoWear",
  "name": "RigoWear",
  "category": "NQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.09 19.45 L 5.87 17.24 L 5.13 7.79 L 13.88 4.16 L 20.03 11.37 Z"
      }
    ]
  ]
};

export const RigoWear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.09 19.45 L 5.87 17.24 L 5.13 7.79 L 13.88 4.16 L 20.03 11.37 Z" />
      {children}
    </svg>
  );
});

export default RigoWear;
