import React from 'react';

import DemoSource from '../../components/DemoSource/DemoSource';

export default function Source() {
  return (
    <>
      <DemoSource relativePahToCodeFile="features/CopyPaste/demo/demo.ts" />
      <DemoSource relativePahToCodeFile="features//CopyPaste/Tab.tsx" />
    </>
  );
}
