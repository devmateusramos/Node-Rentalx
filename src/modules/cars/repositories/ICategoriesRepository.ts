import { Category } from "../entities/Category";

// DTO => Data transfer object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(Name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO);
}

export { ICategoriesRepository, ICreateCategoryDTO };
