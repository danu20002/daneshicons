import React from 'react';

export const iconData = {
  "id": "PlastoMoist",
  "name": "PlastoMoist",
  "category": "ZM",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.09 5.70 L 12.99 7.46 L 20.91 9.17 L 15.43 15.13 L 10.00 21.14 L 7.57 13.41 Z"
      }
    ]
  ]
};

export const PlastoMoist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.09 5.70 L 12.99 7.46 L 20.91 9.17 L 15.43 15.13 L 10.00 21.14 L 7.57 13.41 Z" />
      {children}
    </svg>
  );
});

export default PlastoMoist;
