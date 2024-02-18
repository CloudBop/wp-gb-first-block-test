// isn't actually included in code bundle as it is already enqued via wordpress/code
// var registerBlockType = wp.blocks.registerBlockType;
import { registerBlockType } from '@wordpress/blocks';
import Edit from "./edit";
import Save from "./save";
import "./style.scss";

registerBlockType('blocks-course/firstblock', {
  edit: Edit,
  save: Save
});