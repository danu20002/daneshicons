import React from 'react';

export const iconData = {
  "id": "TonicoPoint",
  "name": "TonicoPoint",
  "category": "A",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.70 21.91 L 2.76 15.83 L 4.07 5.91 L 13.30 2.09 L 21.24 8.17 L 19.93 18.09 Z"
      }
    ]
  ]
};

export const TonicoPoint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.70 21.91 L 2.76 15.83 L 4.07 5.91 L 13.30 2.09 L 21.24 8.17 L 19.93 18.09 Z" />
      {children}
    </svg>
  );
});

export default TonicoPoint;
