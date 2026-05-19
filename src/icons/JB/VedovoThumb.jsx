import React from 'react';

export const iconData = {
  "id": "VedovoThumb",
  "name": "VedovoThumb",
  "category": "JB",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.41 6.83 L 3.70 16.56 L 20.54 18.98 L 9.64 20.77 L 9.62 19.54 L 10.05 2.63"
      }
    ],
    [
      "circle",
      {
        "cx": "17.41",
        "cy": "6.83",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "3.70",
        "cy": "16.56",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "20.54",
        "cy": "18.98",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "9.64",
        "cy": "20.77",
        "r": "1.27"
      }
    ],
    [
      "circle",
      {
        "cx": "9.62",
        "cy": "19.54",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "10.05",
        "cy": "2.63",
        "r": "0.63"
      }
    ]
  ]
};

export const VedovoThumb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.41 6.83 L 3.70 16.56 L 20.54 18.98 L 9.64 20.77 L 9.62 19.54 L 10.05 2.63" />
      <circle cx="17.41" cy="6.83" r="0.58" />
      <circle cx="3.70" cy="16.56" r="0.94" />
      <circle cx="20.54" cy="18.98" r="0.76" />
      <circle cx="9.64" cy="20.77" r="1.27" />
      <circle cx="9.62" cy="19.54" r="0.82" />
      <circle cx="10.05" cy="2.63" r="0.63" />
      {children}
    </svg>
  );
});

export default VedovoThumb;
