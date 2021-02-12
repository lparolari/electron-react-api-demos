import React from 'react';

import DemoSource from '../../components/DemoSource/DemoSource';

export default function Source() {
  return (
    <>
      <DemoSource relativePahToCodeFile="features/AppSystemInfo/demo/demo.ts" />
      <DemoSource relativePahToCodeFile="features/AppSystemInfo/Info.tsx" />
    </>
  );
}
