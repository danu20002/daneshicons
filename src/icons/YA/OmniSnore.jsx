import React from 'react';

export const iconData = {
  "id": "OmniSnore",
  "name": "OmniSnore",
  "category": "YA",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.96 20.53 L 9.00 12.55 L 6.13 5.11 L 13.02 9.13 L 20.91 10.36 L 13.98 14.32 Z"
      }
    ]
  ]
};

export const OmniSnore = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.96 20.53 L 9.00 12.55 L 6.13 5.11 L 13.02 9.13 L 20.91 10.36 L 13.98 14.32 Z" />
      {children}
    </svg>
  );
});

export default OmniSnore;
