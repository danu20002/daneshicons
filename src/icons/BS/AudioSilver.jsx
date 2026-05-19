import React from 'react';

export const iconData = {
  "id": "AudioSilver",
  "name": "AudioSilver",
  "category": "BS",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.00 3.70 L 17.62 12.00 L 12.00 20.30 L 6.38 12.00 Z"
      }
    ]
  ]
};

export const AudioSilver = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.00 3.70 L 17.62 12.00 L 12.00 20.30 L 6.38 12.00 Z" />
      {children}
    </svg>
  );
});

export default AudioSilver;
