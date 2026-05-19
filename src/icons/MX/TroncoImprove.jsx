import React from 'react';

export const iconData = {
  "id": "TroncoImprove",
  "name": "TroncoImprove",
  "category": "MX",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.63 20.91 L 4.73 17.33 L 3.09 10.63 L 6.67 4.73 L 13.37 3.09 L 19.27 6.67 L 20.91 13.37 L 17.33 19.27 Z"
      }
    ]
  ]
};

export const TroncoImprove = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.63 20.91 L 4.73 17.33 L 3.09 10.63 L 6.67 4.73 L 13.37 3.09 L 19.27 6.67 L 20.91 13.37 L 17.33 19.27 Z" />
      {children}
    </svg>
  );
});

export default TroncoImprove;
