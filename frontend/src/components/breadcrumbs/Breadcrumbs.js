import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import Stack from "@mui/material/Stack";

export default function CustomSeparator(props) {
  const {
    maxItems,
    separator,
    children,
    component,
    itemsAfterCollapse = 1,
    itemsBeforeCollapse = 1,
  } = props;

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={separator}
        maxItems={maxItems}
        children={children}
        component={component}
      />
    </Stack>
  );
}
