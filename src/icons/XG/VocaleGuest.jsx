import React from 'react';

export const iconData = {
  "id": "VocaleGuest",
  "name": "VocaleGuest",
  "category": "XG",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.98 22.31 L 10.45 17.04 L 5.40 19.98 L 7.34 14.47 L 1.69 12.98 L 6.96 10.45 L 4.02 5.40 L 9.53 7.34 L 11.02 1.69 L 13.55 6.96 L 18.60 4.02 L 16.66 9.53 L 22.31 11.02 L 17.04 13.55 L 19.98 18.60 L 14.47 16.66 Z"
      }
    ]
  ]
};

export const VocaleGuest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.98 22.31 L 10.45 17.04 L 5.40 19.98 L 7.34 14.47 L 1.69 12.98 L 6.96 10.45 L 4.02 5.40 L 9.53 7.34 L 11.02 1.69 L 13.55 6.96 L 18.60 4.02 L 16.66 9.53 L 22.31 11.02 L 17.04 13.55 L 19.98 18.60 L 14.47 16.66 Z" />
      {children}
    </svg>
  );
});

export default VocaleGuest;
