import React from 'react';

export const iconData = {
  "id": "SulfuOrchestra",
  "name": "SulfuOrchestra",
  "category": "GJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.20 17.56 L 10.59 3.34 L 20.21 15.11 Z"
      }
    ]
  ]
};

export const SulfuOrchestra = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.20 17.56 L 10.59 3.34 L 20.21 15.11 Z" />
      {children}
    </svg>
  );
});

export default SulfuOrchestra;
