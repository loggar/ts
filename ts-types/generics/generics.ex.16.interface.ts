interface IRepository<T> {
  add(entity: T): Promise<void>;
  findById(id: string): Promise<T>;
  updateById(id: string, updated: T): Promise<void>;
  removeById(id: string): Promise<void>;
}
