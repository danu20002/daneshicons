import React from 'react';

export const iconData = {
  id: "ChevronsLeftRightEllipsis",
  name: "ChevronsLeftRightEllipsis",
  category: "C",
  nodes: [["path",{"d":"M12 12h.01"}],["path",{"d":"M16 12h.01"}],["path",{"d":"m17 7 5 5-5 5"}],["path",{"d":"m7 7-5 5 5 5"}],["path",{"d":"M8 12h.01"}]]
};

export const ChevronsLeftRightEllipsis = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M12 12h.01" />
      <path d="M16 12h.01" />
      <path d="m17 7 5 5-5 5" />
      <path d="m7 7-5 5 5 5" />
      <path d="M8 12h.01" />
      {children}
    </svg>
  );
});

export default ChevronsLeftRightEllipsis;
