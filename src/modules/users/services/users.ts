import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/users'

@Injectable()
export class UserService {
  constructor(
      @InjectRepository(User)
      private usersRepository: Repository<User>,
  ) {}

  async create(user: User): Promise<User> {
    const res = Object.assign(new User(), user, {
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return this.usersRepository.save(res);
  }
}