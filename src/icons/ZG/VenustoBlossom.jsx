import React from 'react';

export const iconData = {
  "id": "VenustoBlossom",
  "name": "VenustoBlossom",
  "category": "ZG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.43 6.53 L 20.57 6.53 L 20.57 17.47 L 3.43 17.47 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.43 6.53 L 7.39 2.57 L 24.53 2.57 L 20.57 6.53"
      }
    ],
    [
      "path",
      {
        "d": "M 20.57 6.53 L 24.53 2.57 L 24.53 13.51 L 20.57 17.47"
      }
    ]
  ]
};

export const VenustoBlossom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.43 6.53 L 20.57 6.53 L 20.57 17.47 L 3.43 17.47 Z" />
      <path d="M 3.43 6.53 L 7.39 2.57 L 24.53 2.57 L 20.57 6.53" />
      <path d="M 20.57 6.53 L 24.53 2.57 L 24.53 13.51 L 20.57 17.47" />
      {children}
    </svg>
  );
});

export default VenustoBlossom;
