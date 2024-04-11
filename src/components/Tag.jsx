

import "./Tag.css";

function Tag(props) {

  const {tagName, selectTag} = props;

  return (
    <button type='button' className='tag' onClick={() => selectTag(tagName)} >
      {tagName}
    </button>
  )
}

export default Tag