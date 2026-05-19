import React from 'react';

export const iconData = {
  "id": "HemaVideo",
  "name": "HemaVideo",
  "category": "HM",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.02 11.52 L 13.02 11.52"
      }
    ],
    [
      "path",
      {
        "d": "M 13.90 9.66 L 11.90 13.12"
      }
    ],
    [
      "path",
      {
        "d": "M 13.08 14.82 L 11.08 11.36"
      }
    ]
  ]
};

export const HemaVideo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.02 11.52 L 13.02 11.52" />
      <path d="M 13.90 9.66 L 11.90 13.12" />
      <path d="M 13.08 14.82 L 11.08 11.36" />
      {children}
    </svg>
  );
});

export default HemaVideo;
