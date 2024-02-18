// wp.blocks API for creating new blocks
var registerBlockType = wp.blocks.registerBlockType;
//
registerBlockType("blocks-course/firstblock", {
  edit: function () {
    return "Edit";
  },
  save: function () {
    return "Save";
  },
});