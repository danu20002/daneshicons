import React from 'react';

export const iconData = {
  "id": "ZoppicoOften",
  "name": "ZoppicoOften",
  "category": "QM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.03 5.97 L 20.97 5.97 L 20.97 18.03 L 3.03 18.03 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.03 5.97 L 6.61 2.38 L 24.56 2.38 L 20.97 5.97"
      }
    ],
    [
      "path",
      {
        "d": "M 20.97 5.97 L 24.56 2.38 L 24.56 14.45 L 20.97 18.03"
      }
    ]
  ]
};

export const ZoppicoOften = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.03 5.97 L 20.97 5.97 L 20.97 18.03 L 3.03 18.03 Z" />
      <path d="M 3.03 5.97 L 6.61 2.38 L 24.56 2.38 L 20.97 5.97" />
      <path d="M 20.97 5.97 L 24.56 2.38 L 24.56 14.45 L 20.97 18.03" />
      {children}
    </svg>
  );
});

export default ZoppicoOften;
