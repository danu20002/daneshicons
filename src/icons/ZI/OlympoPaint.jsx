import React from 'react';

export const iconData = {
  "id": "OlympoPaint",
  "name": "OlympoPaint",
  "category": "ZI",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.04 15.90 L 8.10 21.04 L 2.96 8.10 L 15.90 2.96 Z"
      }
    ]
  ]
};

export const OlympoPaint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.04 15.90 L 8.10 21.04 L 2.96 8.10 L 15.90 2.96 Z" />
      {children}
    </svg>
  );
});

export default OlympoPaint;
