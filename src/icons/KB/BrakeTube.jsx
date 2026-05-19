import React from 'react';

export const iconData = {
  "id": "BrakeTube",
  "name": "BrakeTube",
  "category": "KB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.04 13.03 L 4.47 7.03 L 9.43 3.35 L 15.59 3.72 L 20.07 7.96 L 20.77 14.09 L 17.38 19.25 L 11.46 21.01 L 5.80 18.55 Z"
      }
    ]
  ]
};

export const BrakeTube = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.04 13.03 L 4.47 7.03 L 9.43 3.35 L 15.59 3.72 L 20.07 7.96 L 20.77 14.09 L 17.38 19.25 L 11.46 21.01 L 5.80 18.55 Z" />
      {children}
    </svg>
  );
});

export default BrakeTube;
