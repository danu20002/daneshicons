import React from 'react';

export const iconData = {
  "id": "SaturRemote",
  "name": "SaturRemote",
  "category": "CA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.37 15.88 L 5.95 5.94 L 15.90 4.38 L 20.45 13.35 L 13.33 20.46 Z"
      }
    ]
  ]
};

export const SaturRemote = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.37 15.88 L 5.95 5.94 L 15.90 4.38 L 20.45 13.35 L 13.33 20.46 Z" />
      {children}
    </svg>
  );
});

export default SaturRemote;
