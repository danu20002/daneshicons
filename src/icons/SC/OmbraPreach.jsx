import React from 'react';

export const iconData = {
  "id": "OmbraPreach",
  "name": "OmbraPreach",
  "category": "SC",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.91 21.92 L 6.33 20.18 L 2.39 14.62 L 2.96 7.83 L 7.75 2.99 L 14.53 2.37 L 20.13 6.25 L 21.92 12.82 L 19.07 19.01 Z"
      }
    ]
  ]
};

export const OmbraPreach = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.91 21.92 L 6.33 20.18 L 2.39 14.62 L 2.96 7.83 L 7.75 2.99 L 14.53 2.37 L 20.13 6.25 L 21.92 12.82 L 19.07 19.01 Z" />
      {children}
    </svg>
  );
});

export default OmbraPreach;
