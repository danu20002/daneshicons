import React from 'react';

export const iconData = {
  "id": "UndatoProud",
  "name": "UndatoProud",
  "category": "WY",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.04 14.57 L 13.60 19.16 L 10.47 4.81 L 4.19 21.40 L 17.29 10.94 L 12.48 9.96"
      }
    ],
    [
      "circle",
      {
        "cx": "11.04",
        "cy": "14.57",
        "r": "1.47"
      }
    ],
    [
      "circle",
      {
        "cx": "13.60",
        "cy": "19.16",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "10.47",
        "cy": "4.81",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "4.19",
        "cy": "21.40",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "17.29",
        "cy": "10.94",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "12.48",
        "cy": "9.96",
        "r": "0.80"
      }
    ]
  ]
};

export const UndatoProud = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.04 14.57 L 13.60 19.16 L 10.47 4.81 L 4.19 21.40 L 17.29 10.94 L 12.48 9.96" />
      <circle cx="11.04" cy="14.57" r="1.47" />
      <circle cx="13.60" cy="19.16" r="0.54" />
      <circle cx="10.47" cy="4.81" r="0.60" />
      <circle cx="4.19" cy="21.40" r="1.43" />
      <circle cx="17.29" cy="10.94" r="0.82" />
      <circle cx="12.48" cy="9.96" r="0.80" />
      {children}
    </svg>
  );
});

export default UndatoProud;
