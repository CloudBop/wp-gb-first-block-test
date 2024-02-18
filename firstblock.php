<?php

/**
 * Plugin Name: First Block
 * Plugin URI: https://colinrowntree.com/
 * Description: My first block
 * Author: 0xColinR
 * Author URI: https://colinrowntree.com/
 */

function blocks_course_firstblock_init() {
    // get the block.json
    register_block_type_from_metadata( __DIR__ );
}
// initialise new block
add_action( "init", "blocks_course_firstblock_init" );