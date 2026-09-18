import { cn } from "@/lib/utils";

const variants = {
  h1: "heading-1",
  h2: "heading-2",
  h3: "heading-3",
  body: "body",
  "body-sm": "body-sm",
  caption: "caption",
  label: "label",
  legend: "legend",
};

const defaultElement = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  "body-sm": "p",
  caption: "span",
  label: "label",
  legend: "legend",
};

export default function Typography({ as, variant = "body", className, ...props }) {
  const Component = as || defaultElement[variant];

  return (
    <Component
      className={cn("text-inherit", variants[variant], className)}
      {...props}
    />
  );
}
