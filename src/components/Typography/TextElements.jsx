import Typography from "./Typography";

export const H1 = (props) => (
  <Typography as="h1" variant="h1" {...props} />
);

export const H2 = (props) => (
  <Typography as="h2" variant="h2" {...props} />
);

export const H3 = (props) => (
  <Typography as="h3" variant="h3" {...props} />
);

export const Body = (props) => (
  <Typography as="p" variant="body" {...props} />
);

export const BodySm = (props) => (
  <Typography as="p" variant="body-sm" {...props} />
);

export const Caption = (props) => (
  <Typography as="span" variant="caption" {...props} />
);

export const LabelTag = (props) => (
  <Typography as="label" variant="label" {...props} />
);

export const Legend = (props) => (
  <Typography as="legend" variant="legend" {...props} />
);
