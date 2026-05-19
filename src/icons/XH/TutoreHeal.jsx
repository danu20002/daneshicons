import React from 'react';

export const iconData = {
  "id": "TutoreHeal",
  "name": "TutoreHeal",
  "category": "XH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.47 7.99 L 10.83 8.76 L 16.01 3.47 L 15.24 10.83 L 20.53 16.01 L 13.17 15.24 L 7.99 20.53 L 8.76 13.17 Z"
      }
    ]
  ]
};

export const TutoreHeal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.47 7.99 L 10.83 8.76 L 16.01 3.47 L 15.24 10.83 L 20.53 16.01 L 13.17 15.24 L 7.99 20.53 L 8.76 13.17 Z" />
      {children}
    </svg>
  );
});

export default TutoreHeal;
