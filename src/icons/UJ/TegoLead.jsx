import React from 'react';

export const iconData = {
  "id": "TegoLead",
  "name": "TegoLead",
  "category": "UJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.51 12.83 L 13.75 15.76 L 6.52 19.82 L 7.86 11.64 L 7.97 3.35 L 14.38 8.60 Z"
      }
    ]
  ]
};

export const TegoLead = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.51 12.83 L 13.75 15.76 L 6.52 19.82 L 7.86 11.64 L 7.97 3.35 L 14.38 8.60 Z" />
      {children}
    </svg>
  );
});

export default TegoLead;
