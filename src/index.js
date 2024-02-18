// isn't actually included in code bundle as it is already enqued via wordpress/code
// var registerBlockType = wp.blocks.registerBlockType;
import { registerBlockType } from '@wordpress/blocks';

registerBlockType('blocks-course/firstblock', {
  edit: function () {
    return <p className="class">Edit the JSX</p>;
  },
  save: function () {
    return <p className="class">Save the JSX</p>;
  },
});