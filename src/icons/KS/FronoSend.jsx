import React from 'react';

export const iconData = {
  "id": "FronoSend",
  "name": "FronoSend",
  "category": "KS",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.39 12.81 L 5.38 5.00 L 13.35 2.46 L 20.30 7.10 L 21.01 15.44 L 14.93 21.18 L 6.64 20.01 Z"
      }
    ]
  ]
};

export const FronoSend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.39 12.81 L 5.38 5.00 L 13.35 2.46 L 20.30 7.10 L 21.01 15.44 L 14.93 21.18 L 6.64 20.01 Z" />
      {children}
    </svg>
  );
});

export default FronoSend;
