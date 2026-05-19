import React from 'react';

export const iconData = {
  "id": "StereoSaw",
  "name": "StereoSaw",
  "category": "D",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.67 19.96 L 11.65 16.01 L 4.04 18.67 L 7.99 11.65 L 5.33 4.04 L 12.35 7.99 L 19.96 5.33 L 16.01 12.35 Z"
      }
    ]
  ]
};

export const StereoSaw = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.67 19.96 L 11.65 16.01 L 4.04 18.67 L 7.99 11.65 L 5.33 4.04 L 12.35 7.99 L 19.96 5.33 L 16.01 12.35 Z" />
      {children}
    </svg>
  );
});

export default StereoSaw;
