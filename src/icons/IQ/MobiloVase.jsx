import React from 'react';

export const iconData = {
  "id": "MobiloVase",
  "name": "MobiloVase",
  "category": "IQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.82 15.95 L 14.09 14.89 L 12.99 21.61 L 10.54 15.26 L 4.17 17.66 L 8.45 12.37 L 3.18 8.05 L 9.91 9.11 L 11.01 2.39 L 13.46 8.74 L 19.83 6.34 L 15.55 11.63 Z"
      }
    ]
  ]
};

export const MobiloVase = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.82 15.95 L 14.09 14.89 L 12.99 21.61 L 10.54 15.26 L 4.17 17.66 L 8.45 12.37 L 3.18 8.05 L 9.91 9.11 L 11.01 2.39 L 13.46 8.74 L 19.83 6.34 L 15.55 11.63 Z" />
      {children}
    </svg>
  );
});

export default MobiloVase;
