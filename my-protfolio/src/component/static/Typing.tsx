import {TypeAnimation} from 'react-type-animation';

const Typing = () => {
  return (
    <TypeAnimation
      sequence={[
        'Gayani Madhubhashini',
        2000
      ]}
      wrapper="span"
      cursor={true}
      repeat={1}
      style={{ fontSize: '4xl', color: 'text-blue-400' }}
    />
  );
};

export default Typing;
