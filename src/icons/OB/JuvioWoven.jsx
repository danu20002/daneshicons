import React from 'react';

export const iconData = {
  "id": "JuvioWoven",
  "name": "JuvioWoven",
  "category": "OB",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.35 10.82 L 10.35 10.82"
      }
    ],
    [
      "path",
      {
        "d": "M 13.18 6.35 L 13.18 10.35"
      }
    ],
    [
      "path",
      {
        "d": "M 17.65 13.18 L 13.65 13.18"
      }
    ],
    [
      "path",
      {
        "d": "M 10.82 17.65 L 10.82 13.65"
      }
    ]
  ]
};

export const JuvioWoven = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.35 10.82 L 10.35 10.82" />
      <path d="M 13.18 6.35 L 13.18 10.35" />
      <path d="M 17.65 13.18 L 13.65 13.18" />
      <path d="M 10.82 17.65 L 10.82 13.65" />
      {children}
    </svg>
  );
});

export default JuvioWoven;
