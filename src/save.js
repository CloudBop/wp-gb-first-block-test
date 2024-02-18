import { useBlockProps } from "@wordpress/block-editor";


export default function save() {
  // use frontend block props styles
  const blockProps = useBlockProps.save()
  return <p {...blockProps}>Save JSX</p>;
}