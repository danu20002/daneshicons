import React from 'react';

export const iconData = {
  "id": "NimbusProfile",
  "name": "NimbusProfile",
  "category": "TM",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.64 2.02 L 18.80 4.69 L 21.98 11.64 L 19.31 18.80 L 12.36 21.98 L 5.20 19.31 L 2.02 12.36 L 4.69 5.20 Z"
      }
    ]
  ]
};

export const NimbusProfile = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.64 2.02 L 18.80 4.69 L 21.98 11.64 L 19.31 18.80 L 12.36 21.98 L 5.20 19.31 L 2.02 12.36 L 4.69 5.20 Z" />
      {children}
    </svg>
  );
});

export default NimbusProfile;
