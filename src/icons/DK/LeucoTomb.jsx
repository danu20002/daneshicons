import React from 'react';

export const iconData = {
  "id": "LeucoTomb",
  "name": "LeucoTomb",
  "category": "DK",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.19 13.43 L 10.57 20.19 L 3.81 10.57 L 13.43 3.81 Z"
      }
    ]
  ]
};

export const LeucoTomb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.19 13.43 L 10.57 20.19 L 3.81 10.57 L 13.43 3.81 Z" />
      {children}
    </svg>
  );
});

export default LeucoTomb;
