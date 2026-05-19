import React from 'react';

export const iconData = {
  "id": "SinterMarshal",
  "name": "SinterMarshal",
  "category": "SB",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.23 19.85 L 7.88 19.42 L 3.63 13.40 L 5.68 6.33 L 12.50 3.53 L 18.93 7.11 L 20.15 14.37 Z"
      }
    ]
  ]
};

export const SinterMarshal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.23 19.85 L 7.88 19.42 L 3.63 13.40 L 5.68 6.33 L 12.50 3.53 L 18.93 7.11 L 20.15 14.37 Z" />
      {children}
    </svg>
  );
});

export default SinterMarshal;
