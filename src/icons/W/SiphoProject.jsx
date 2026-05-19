import React from 'react';

export const iconData = {
  "id": "SiphoProject",
  "name": "SiphoProject",
  "category": "W",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.40 13.52 L 14.38 14.32 L 13.77 22.36 L 10.53 14.98 L 2.70 16.89 L 8.71 11.52 L 4.48 4.66 L 11.44 8.72 L 16.65 2.58 L 14.95 10.45 Z"
      }
    ]
  ]
};

export const SiphoProject = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.40 13.52 L 14.38 14.32 L 13.77 22.36 L 10.53 14.98 L 2.70 16.89 L 8.71 11.52 L 4.48 4.66 L 11.44 8.72 L 16.65 2.58 L 14.95 10.45 Z" />
      {children}
    </svg>
  );
});

export default SiphoProject;
