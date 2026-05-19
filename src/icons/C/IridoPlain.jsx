import React from 'react';

export const iconData = {
  "id": "IridoPlain",
  "name": "IridoPlain",
  "category": "C",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.67 7.33 L 8.62 3.07 L 15.15 2.98 L 20.21 7.12 L 21.42 13.53 L 18.23 19.23 L 12.13 21.55 L 5.96 19.39 L 2.62 13.78 Z"
      }
    ]
  ]
};

export const IridoPlain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.67 7.33 L 8.62 3.07 L 15.15 2.98 L 20.21 7.12 L 21.42 13.53 L 18.23 19.23 L 12.13 21.55 L 5.96 19.39 L 2.62 13.78 Z" />
      {children}
    </svg>
  );
});

export default IridoPlain;
