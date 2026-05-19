import React from 'react';

export const iconData = {
  "id": "VermiglioDocument",
  "name": "VermiglioDocument",
  "category": "IH",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.66 7.06 L 3.04 12.74"
      }
    ],
    [
      "circle",
      {
        "cx": "18.31",
        "cy": "9.48",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "13.66",
        "cy": "7.06",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "3.04",
        "cy": "12.74",
        "r": "1.5"
      }
    ]
  ]
};

export const VermiglioDocument = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.66 7.06 L 3.04 12.74" />
      <circle cx="18.31" cy="9.48" r="1.5" />
      <circle cx="13.66" cy="7.06" r="1.5" />
      <circle cx="3.04" cy="12.74" r="1.5" />
      {children}
    </svg>
  );
});

export default VermiglioDocument;
