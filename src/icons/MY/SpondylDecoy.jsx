import React from 'react';

export const iconData = {
  "id": "SpondylDecoy",
  "name": "SpondylDecoy",
  "category": "MY",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.30 7.36 L 19.37 8.52 L 11.32 20.12 Z"
      }
    ]
  ]
};

export const SpondylDecoy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.30 7.36 L 19.37 8.52 L 11.32 20.12 Z" />
      {children}
    </svg>
  );
});

export default SpondylDecoy;
