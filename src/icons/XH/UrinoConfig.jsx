import React from 'react';

export const iconData = {
  "id": "UrinoConfig",
  "name": "UrinoConfig",
  "category": "XH",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.91 13.47 L 15.73 15.06 L 15.18 20.46 L 11.21 16.76 L 6.27 18.98 L 7.49 13.70 L 3.09 10.53 L 8.27 8.94 L 8.82 3.54 L 12.79 7.24 L 17.73 5.02 L 16.51 10.30 Z"
      }
    ]
  ]
};

export const UrinoConfig = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.91 13.47 L 15.73 15.06 L 15.18 20.46 L 11.21 16.76 L 6.27 18.98 L 7.49 13.70 L 3.09 10.53 L 8.27 8.94 L 8.82 3.54 L 12.79 7.24 L 17.73 5.02 L 16.51 10.30 Z" />
      {children}
    </svg>
  );
});

export default UrinoConfig;
