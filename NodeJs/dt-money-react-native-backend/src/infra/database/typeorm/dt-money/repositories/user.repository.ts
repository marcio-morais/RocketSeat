import { Repository } from "typeorm";
import {
  CreateUserParams,
  UpdateUserParams,
  UserRepositoryInterface,
} from "../../../../../domain/user/repositoryInterface/user-repository.interface";
import { DatabaseError } from "../../../../../shared/errors/database.error";
import { DtMoneyDataSource } from "../data-source";
import { User } from "../entities/User";

export class UserTypeormRepository implements UserRepositoryInterface {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = DtMoneyDataSource.getRepository(User);
  }
  updateUser(user: UpdateUserParams): Promise<User> {
    throw new Error("Method not implemented.");
  }

  async createUser(user: CreateUserParams): Promise<User> {
    try {
      const userCreated = await this.userRepository.save(user);
      return userCreated;
    } catch (error) {
      throw new DatabaseError("Falha ao criar o usuário!", error);
    }
  }

  async findByEmail(email: string): Promise<User> {
    try {
      const user = await this.userRepository.findOne({
        where: {
          email,
        },
      });
      return user;
    } catch (error) {
      throw new DatabaseError("Falha ao buscar isiário!", error);
    }
  }
}
