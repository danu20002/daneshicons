import React from 'react';

export const iconData = {
  "id": "OlympoDilute",
  "name": "OlympoDilute",
  "category": "KS",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.75 14.43 L 16.47 19.90 L 9.57 20.75 L 4.10 16.47 L 3.25 9.57 L 7.53 4.10 L 14.43 3.25 L 19.90 7.53 Z"
      }
    ]
  ]
};

export const OlympoDilute = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.75 14.43 L 16.47 19.90 L 9.57 20.75 L 4.10 16.47 L 3.25 9.57 L 7.53 4.10 L 14.43 3.25 L 19.90 7.53 Z" />
      {children}
    </svg>
  );
});

export default OlympoDilute;
