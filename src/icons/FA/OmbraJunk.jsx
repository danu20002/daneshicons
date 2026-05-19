import React from 'react';

export const iconData = {
  "id": "OmbraJunk",
  "name": "OmbraJunk",
  "category": "FA",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.08 2.79 L 13.70 6.88 L 19.86 6.38 L 17.39 12.04 L 19.78 17.73 L 13.63 17.14 L 8.95 21.17 L 7.61 15.14 L 2.34 11.93 L 7.66 8.80 Z"
      }
    ]
  ]
};

export const OmbraJunk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.08 2.79 L 13.70 6.88 L 19.86 6.38 L 17.39 12.04 L 19.78 17.73 L 13.63 17.14 L 8.95 21.17 L 7.61 15.14 L 2.34 11.93 L 7.66 8.80 Z" />
      {children}
    </svg>
  );
});

export default OmbraJunk;
