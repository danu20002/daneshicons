import React from 'react';

export const iconData = {
  "id": "VarroCavity",
  "name": "VarroCavity",
  "category": "AE",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.98 9.52 L 13.98 9.52"
      }
    ],
    [
      "path",
      {
        "d": "M 14.48 9.98 L 14.48 13.98"
      }
    ],
    [
      "path",
      {
        "d": "M 14.02 14.48 L 10.02 14.48"
      }
    ],
    [
      "path",
      {
        "d": "M 9.52 14.02 L 9.52 10.02"
      }
    ]
  ]
};

export const VarroCavity = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.98 9.52 L 13.98 9.52" />
      <path d="M 14.48 9.98 L 14.48 13.98" />
      <path d="M 14.02 14.48 L 10.02 14.48" />
      <path d="M 9.52 14.02 L 9.52 10.02" />
      {children}
    </svg>
  );
});

export default VarroCavity;
