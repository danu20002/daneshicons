import React from 'react';

export const iconData = {
  id: "UnfoldVertical",
  name: "UnfoldVertical",
  category: "U",
  nodes: [["path",{"d":"M12 22v-6"}],["path",{"d":"M12 8V2"}],["path",{"d":"M4 12H2"}],["path",{"d":"M10 12H8"}],["path",{"d":"M16 12h-2"}],["path",{"d":"M22 12h-2"}],["path",{"d":"m15 19-3 3-3-3"}],["path",{"d":"m15 5-3-3-3 3"}]]
};

export const UnfoldVertical = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M12 22v-6" />
      <path d="M12 8V2" />
      <path d="M4 12H2" />
      <path d="M10 12H8" />
      <path d="M16 12h-2" />
      <path d="M22 12h-2" />
      <path d="m15 19-3 3-3-3" />
      <path d="m15 5-3-3-3 3" />
      {children}
    </svg>
  );
});

export default UnfoldVertical;
