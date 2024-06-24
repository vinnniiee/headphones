import {
  DeleteObjectCommand,
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
// import sharp from "sharp";

const bucketName = process.env.BUCKET_NAME!;
const region = process.env.BUCKET_REGION!;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID!;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY!;

const s3Client = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

export const deleteImageFromS3 = async (key: string) => {
  const params = {
    Bucket: bucketName,
    Key: key,
  };
  const command = new DeleteObjectCommand(params);
  await s3Client.send(command);
};

export const uploadImageToS3 = async (file: Express.Multer.File) => {
  const imageName = `${new Date().toISOString()}.${file.originalname}`;
  // const croppedImageBuffer = await sharp(file.buffer)
  //   .resize(510, 510, {
  //     fit: sharp.fit.cover,
  //     position: sharp.strategy.entropy,
  //   })
  //   .toBuffer();
  const params = {
    Bucket: bucketName,
    ContentType: file.mimetype,
    Body: file.buffer,
    Key: imageName,
  };
  const command = new PutObjectCommand(params);
  // console.log("COMMAND: \n", command);
  const response = await s3Client.send(command);
  // console.log("AWS RESPONSE:\n", response);
  return imageName;
};

export async function getSignedImageUrl(key: string) {
  const params = {
    Bucket: bucketName,
    Key: key,
  };
  const command = new GetObjectCommand(params);
  const seconds = 3600;
  const url = await getSignedUrl(s3Client, command, { expiresIn: seconds });
  return url;
}

export default s3Client;
