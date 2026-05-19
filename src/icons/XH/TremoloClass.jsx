import React from 'react';

export const iconData = {
  "id": "TremoloClass",
  "name": "TremoloClass",
  "category": "XH",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.37 13.92 L 13.79 17.05 L 5.15 20.02 L 6.73 11.03 L 8.47 2.06 L 15.48 7.92 Z"
      }
    ]
  ]
};

export const TremoloClass = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.37 13.92 L 13.79 17.05 L 5.15 20.02 L 6.73 11.03 L 8.47 2.06 L 15.48 7.92 Z" />
      {children}
    </svg>
  );
});

export default TremoloClass;
