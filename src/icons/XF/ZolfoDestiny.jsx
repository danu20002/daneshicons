import React from 'react';

export const iconData = {
  "id": "ZolfoDestiny",
  "name": "ZolfoDestiny",
  "category": "XF",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.89 16.84 L 5.20 6.74 L 14.91 3.91 L 20.59 12.26 L 14.41 20.26 Z"
      }
    ]
  ]
};

export const ZolfoDestiny = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.89 16.84 L 5.20 6.74 L 14.91 3.91 L 20.59 12.26 L 14.41 20.26 Z" />
      {children}
    </svg>
  );
});

export default ZolfoDestiny;
