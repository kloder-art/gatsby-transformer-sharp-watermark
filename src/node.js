const supportedExtensions = ['jpg', 'jpeg', 'png', 'tiff'];

export const onCreateNode = async (
  { node, actions, loadNodeContent, createNodeId, createContentDigest },
  pluginOptions
) => {
  const { createNode, createParentChildLink } = actions;

  if (!supportedExtensions.includes(node.extension)) {
    return;
  }

  const imageNode = {
    id: createNodeId(`${node.id} >> ImageWatermark`),
    children: [],
    parent: node.id,
    internal: {
      contentDigest: `${node.internal.contentDigest}`,
      type: 'ImageWatermark',
    },
  };

  createNode(imageNode);
  createParentChildLink({ parent: node, child: imageNode });

  // console.log('NODE >>', node, '\r\n');
  return;
};
