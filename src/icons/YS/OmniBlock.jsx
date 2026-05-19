import React from 'react';

export const iconData = {
  "id": "OmniBlock",
  "name": "OmniBlock",
  "category": "YS",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.75 5.16 L 15.06 10.71 L 21.61 11.94 L 15.07 13.25 L 18.84 18.75 L 13.29 15.06 L 12.06 21.61 L 10.75 15.07 L 5.25 18.84 L 8.94 13.29 L 2.39 12.06 L 8.93 10.75 L 5.16 5.25 L 10.71 8.94 L 11.94 2.39 L 13.25 8.93 Z"
      }
    ]
  ]
};

export const OmniBlock = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.75 5.16 L 15.06 10.71 L 21.61 11.94 L 15.07 13.25 L 18.84 18.75 L 13.29 15.06 L 12.06 21.61 L 10.75 15.07 L 5.25 18.84 L 8.94 13.29 L 2.39 12.06 L 8.93 10.75 L 5.16 5.25 L 10.71 8.94 L 11.94 2.39 L 13.25 8.93 Z" />
      {children}
    </svg>
  );
});

export default OmniBlock;
