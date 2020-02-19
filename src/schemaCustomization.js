import sharp from 'sharp';
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} from 'gatsby/graphql';
import fs from 'fs-extra';

import { WatermarkGravityType, WatermarkBlendType } from './types';

export const createSchemaCustomization = async (
  { actions, schema, pathPrefix, getNodeAndSavePathDependency },
  pluginOptions
) => {
  const { createTypes } = actions;
  const outDir = 'static/watermarked';
  fs.ensureDirSync(`public/${outDir}`);
  const imageWatermarkType = schema.buildObjectType({
    name: 'ImageWatermark',
    fields: {
      corner: {
        type: new GraphQLObjectType({
          name: 'ImageWatermarkCorner',
          fields: {
            src: {
              type: new GraphQLNonNull(GraphQLString),
            },
          },
        }),
        args: {
          gravity: {
            type: WatermarkGravityType,
            defaultValue: 'southeast',
          },
          blend: {
            type: WatermarkBlendType,
            defaultValue: 'over',
          },
        },
        resolve: (image, fieldArgs, context) => {
          const args = { ...fieldArgs, pathPrefix };
          const details = getNodeAndSavePathDependency(
            image.parent,
            context.path
          );
          const { contentDigest } = details.internal;
          const { extension, name } = details;
          const outFile = `${name}-${contentDigest}.${extension}`;

          // Process
          return new Promise(resolve => {
            sharp(details.absolutePath)
              .composite([
                {
                  input: pluginOptions.watermark,
                  gravity: args.gravity,
                  blend: args.blend,
                },
              ])
              .toFile(`public/${outDir}/${outFile}`)
              .then(() => {
                resolve({
                  src: `${pathPrefix ? pathPrefix : ''}/${outDir}/${outFile}`,
                });
              });
          });
        },
      },
    },
    interfaces: ['Node'],
    extensions: {
      infer: true,
      childOf: {
        types: ['File'],
      },
    },
  });

  if (createTypes) {
    createTypes([imageWatermarkType]);
  }
};
