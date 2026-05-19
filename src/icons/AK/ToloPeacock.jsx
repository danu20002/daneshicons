import React from 'react';

export const iconData = {
  "id": "ToloPeacock",
  "name": "ToloPeacock",
  "category": "AK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.48 6.27 L 19.52 6.27 L 19.52 17.73 L 4.48 17.73 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.48 6.27 L 7.60 3.14 L 22.65 3.14 L 19.52 6.27"
      }
    ],
    [
      "path",
      {
        "d": "M 19.52 6.27 L 22.65 3.14 L 22.65 14.60 L 19.52 17.73"
      }
    ]
  ]
};

export const ToloPeacock = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.48 6.27 L 19.52 6.27 L 19.52 17.73 L 4.48 17.73 Z" />
      <path d="M 4.48 6.27 L 7.60 3.14 L 22.65 3.14 L 19.52 6.27" />
      <path d="M 19.52 6.27 L 22.65 3.14 L 22.65 14.60 L 19.52 17.73" />
      {children}
    </svg>
  );
});

export default ToloPeacock;
