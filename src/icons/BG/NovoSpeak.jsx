import React from 'react';

export const iconData = {
  "id": "NovoSpeak",
  "name": "NovoSpeak",
  "category": "BG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.90 16.63 L 7.37 3.90 L 20.10 7.37 L 16.63 20.10 Z"
      }
    ]
  ]
};

export const NovoSpeak = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.90 16.63 L 7.37 3.90 L 20.10 7.37 L 16.63 20.10 Z" />
      {children}
    </svg>
  );
});

export default NovoSpeak;
