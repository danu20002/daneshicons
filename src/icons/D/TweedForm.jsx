import React from 'react';

export const iconData = {
  "id": "TweedForm",
  "name": "TweedForm",
  "category": "D",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.73 21.47 L 10.10 14.76 L 2.53 13.73 L 9.24 10.10 L 10.27 2.53 L 13.90 9.24 L 21.47 10.27 L 14.76 13.90 Z"
      }
    ]
  ]
};

export const TweedForm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.73 21.47 L 10.10 14.76 L 2.53 13.73 L 9.24 10.10 L 10.27 2.53 L 13.90 9.24 L 21.47 10.27 L 14.76 13.90 Z" />
      {children}
    </svg>
  );
});

export default TweedForm;
