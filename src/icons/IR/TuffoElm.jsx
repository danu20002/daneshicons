import React from 'react';

export const iconData = {
  "id": "TuffoElm",
  "name": "TuffoElm",
  "category": "IR",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.47 2.76 L 14.63 8.09 L 22.27 12.70 L 14.07 16.23 L 6.26 20.55 L 7.30 11.68 Z"
      }
    ]
  ]
};

export const TuffoElm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.47 2.76 L 14.63 8.09 L 22.27 12.70 L 14.07 16.23 L 6.26 20.55 L 7.30 11.68 Z" />
      {children}
    </svg>
  );
});

export default TuffoElm;
