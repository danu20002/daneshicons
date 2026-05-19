import React from 'react';

export const iconData = {
  "id": "SeroTap",
  "name": "SeroTap",
  "category": "KW",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.48 12.71 L 6.68 9.44 L 6.63 4.11 L 11.56 6.11 L 16.14 3.40 L 16.88 8.68 L 21.52 11.29 L 17.32 14.56 L 17.37 19.89 L 12.44 17.89 L 7.86 20.60 L 7.12 15.32 Z"
      }
    ]
  ]
};

export const SeroTap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.48 12.71 L 6.68 9.44 L 6.63 4.11 L 11.56 6.11 L 16.14 3.40 L 16.88 8.68 L 21.52 11.29 L 17.32 14.56 L 17.37 19.89 L 12.44 17.89 L 7.86 20.60 L 7.12 15.32 Z" />
      {children}
    </svg>
  );
});

export default SeroTap;
