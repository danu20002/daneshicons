import React from 'react';

export const iconData = {
  "id": "HelioTulip",
  "name": "HelioTulip",
  "category": "OD",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.61 14.31 5.80 11.67 Q 4.74 7.42 3.67 3.17 Q 8.79 5.53 13.91 7.89 Q 14.72 10.78 15.52 13.66 Q 17.47 15.31 19.41 16.95 Z"
      }
    ]
  ]
};

export const HelioTulip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.61 14.31 5.80 11.67 Q 4.74 7.42 3.67 3.17 Q 8.79 5.53 13.91 7.89 Q 14.72 10.78 15.52 13.66 Q 17.47 15.31 19.41 16.95 Z" />
      {children}
    </svg>
  );
});

export default HelioTulip;
