import React from 'react';

export const iconData = {
  "id": "YachtPeer",
  "name": "YachtPeer",
  "category": "PT",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.55 6.27 L 20.45 6.27 L 20.45 17.73 L 3.55 17.73 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.55 6.27 L 6.82 3.00 L 23.73 3.00 L 20.45 6.27"
      }
    ],
    [
      "path",
      {
        "d": "M 20.45 6.27 L 23.73 3.00 L 23.73 14.45 L 20.45 17.73"
      }
    ]
  ]
};

export const YachtPeer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.55 6.27 L 20.45 6.27 L 20.45 17.73 L 3.55 17.73 Z" />
      <path d="M 3.55 6.27 L 6.82 3.00 L 23.73 3.00 L 20.45 6.27" />
      <path d="M 20.45 6.27 L 23.73 3.00 L 23.73 14.45 L 20.45 17.73" />
      {children}
    </svg>
  );
});

export default YachtPeer;
