import React from 'react';

interface Props {
  description: string;
}

const QueryBlock: React.FC<Props> = ({ description }) => {
  return (
    <div className="query-block">
      <div>{description}</div>
      <div>image</div> {/* You can replace this with an actual image tag or a placeholder */}
      <button>Button</button>
    </div>
  );
};

export default QueryBlock;
