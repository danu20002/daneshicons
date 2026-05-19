import React from 'react';

export const iconData = {
  "id": "VespaHail",
  "name": "VespaHail",
  "category": "NO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.11 5.91 L 19.89 5.91 L 19.89 18.09 L 4.11 18.09 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.11 5.91 L 7.50 2.53 L 23.27 2.53 L 19.89 5.91"
      }
    ],
    [
      "path",
      {
        "d": "M 19.89 5.91 L 23.27 2.53 L 23.27 14.70 L 19.89 18.09"
      }
    ]
  ]
};

export const VespaHail = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.11 5.91 L 19.89 5.91 L 19.89 18.09 L 4.11 18.09 Z" />
      <path d="M 4.11 5.91 L 7.50 2.53 L 23.27 2.53 L 19.89 5.91" />
      <path d="M 19.89 5.91 L 23.27 2.53 L 23.27 14.70 L 19.89 18.09" />
      {children}
    </svg>
  );
});

export default VespaHail;
