import conf from "@/conf/conf";
import { Client, Databases, ID, Storage, Query } from "appwrite";

export class BlogService {
  private client: Client;
  private databases: Databases;
  private bucket: Storage;

  constructor() {
    this.client = new Client();
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);

    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
  }

  async createPost({
    title,
    blogImage,
    category,
    content,
    uploadDate,
    userId,
    author,
    blogViews,
  }: {
    title: string;
    blogImage: string;
    category: string;
    content: string;
    uploadDate: string;
    userId: string;
    author: string;
    blogViews: number;
  }): Promise<any> {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        {
          title,
          content,
          category,
          blogImage,
          userId,
          uploadDate,
          author,
          blogViews,
        }
      );
    } catch (error) {
      console.log(error);
      throw new Error("Failed to create blog");
    }
  }

  async updatePost(
    blogId: string,
    {
      title,
      blogImage,
      category,
      content,
    }: {
      title: string;
      blogImage: string;
      category: string;
      content: string;
    }
  ): Promise<any> {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        blogId,
        {
          title,
          content,
          category,
          blogImage,
        }
      );
    } catch (error) {
      console.log(error);
      throw new Error("Failed to update blog");
    }
  }
  async updateViews(blogId: string, blogViews: number): Promise<any> {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        blogId,
        { blogViews }
      );
    } catch (error) {
      console.log(error);
      throw new Error("Failed to update blog");
    }
  }

  async deletePost(blogId: string): Promise<void> {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        blogId
      );
    } catch (error) {
      console.log(error);
      throw new Error("Failed to delete this blog");
    }
  }

  async getPost(blogId: string): Promise<any> {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        blogId
      );
    } catch (error) {
      console.log(error);
      throw new Error("Failed to get blog");
    }
  }
  async getAllPosts(limit: number, offset: number): Promise<{}> {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        [
          Query.orderDesc("$createdAt"),
          Query.limit(limit),
          Query.offset(offset)
        ]
      );
    } catch (error) {
      console.log(error);
      throw new Error("Failed to list all blogs");
    }
  }
  async getUserPosts(userId: string): Promise<any> {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        [Query.equal("userId", userId), Query.orderDesc("$createdAt")]
      );
    } catch (error) {
      console.log(error);
      throw new Error(`Failed to get blogs`);
    }
  }
  async getCategory(category: string): Promise<any> {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        [Query.equal("category", category), Query.orderDesc("$createdAt")]
      );
    } catch (error) {
      console.log(error);
      throw new Error(`Failed to get ${category} blogs`);
    }
  }
  async getPopularPosts(): Promise<any> {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        [Query.orderDesc("blogViews"), Query.limit(3)]
      );
    } catch (error) {
      console.log(error);
      throw new Error(`Failed to get most popular blogs`);
    }
  }
  async uploadImage(image: any): Promise<any> {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        image
      );
    } catch (error) {
      console.log(error);
      throw new Error("Failed to upload image");
    }
  }
  async deleteImage(imageId: string) {
    try {
      return await this.bucket.deleteFile(conf.appwriteBucketId, imageId);
    } catch (error) {
      console.log(error);
      throw new Error("Failed to delete image");
    }
  }
  getImagePreview(imageId: string) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, imageId);
  }
}

const blogService = new BlogService();
export default blogService;
