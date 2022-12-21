import React from 'react';
import { Button } from 'shared-ui/dist';
import {
  Mumble,
  Cancel,
  Calendar,
  Checkmark,
} from 'shared-ui/components/icons/components';
import tw from 'twin.macro';

const App = () => {
  return (
    <div>
      <Button
        variant="pink"
        size="large"
        label="Roli Chicken Fest"
        icon="mumble"
        width="default"
      />
      <Mumble width={100} height={100} css={tw`fill-violet-600`} />
      <Calendar width={100} height={100} css={tw`fill-violet-600`} />
      <Cancel width={100} height={100} css={tw`fill-violet-600`} />
      <Checkmark width={100} height={100} css={tw`fill-violet-600`} />
      <p css={tw`text-pink-600 text-3xl`}>Hello World</p>
    </div>
  );
};

export default App;
