import React from 'react';

export const iconData = {
  "id": "QuiloBeam",
  "name": "QuiloBeam",
  "category": "ZJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.84 15.42 L 4.24 7.76 L 10.48 3.29 L 17.86 5.38 L 20.83 12.46 L 17.15 19.19 L 9.59 20.51 Z"
      }
    ]
  ]
};

export const QuiloBeam = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.84 15.42 L 4.24 7.76 L 10.48 3.29 L 17.86 5.38 L 20.83 12.46 L 17.15 19.19 L 9.59 20.51 Z" />
      {children}
    </svg>
  );
});

export default QuiloBeam;
