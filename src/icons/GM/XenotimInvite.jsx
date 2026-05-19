import React from 'react';

export const iconData = {
  "id": "XenotimInvite",
  "name": "XenotimInvite",
  "category": "GM",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.74 21.20 L 8.73 14.79 L 2.41 13.78 L 7.95 10.56 L 5.67 4.58 L 11.22 7.77 L 15.26 2.80 L 15.27 9.21 L 21.59 10.22 L 16.05 13.44 L 18.33 19.42 L 12.78 16.23 Z"
      }
    ]
  ]
};

export const XenotimInvite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.74 21.20 L 8.73 14.79 L 2.41 13.78 L 7.95 10.56 L 5.67 4.58 L 11.22 7.77 L 15.26 2.80 L 15.27 9.21 L 21.59 10.22 L 16.05 13.44 L 18.33 19.42 L 12.78 16.23 Z" />
      {children}
    </svg>
  );
});

export default XenotimInvite;
