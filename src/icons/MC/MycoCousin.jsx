import React from 'react';

export const iconData = {
  "id": "MycoCousin",
  "name": "MycoCousin",
  "category": "MC",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.66 5.82 L 19.34 5.82 L 19.34 18.18 L 4.66 18.18 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.66 5.82 L 7.88 2.60 L 22.56 2.60 L 19.34 5.82"
      }
    ],
    [
      "path",
      {
        "d": "M 19.34 5.82 L 22.56 2.60 L 22.56 14.96 L 19.34 18.18"
      }
    ]
  ]
};

export const MycoCousin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.66 5.82 L 19.34 5.82 L 19.34 18.18 L 4.66 18.18 Z" />
      <path d="M 4.66 5.82 L 7.88 2.60 L 22.56 2.60 L 19.34 5.82" />
      <path d="M 19.34 5.82 L 22.56 2.60 L 22.56 14.96 L 19.34 18.18" />
      {children}
    </svg>
  );
});

export default MycoCousin;
